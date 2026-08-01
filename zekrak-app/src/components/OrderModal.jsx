import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PRODUCTS } from '../data/products';
import { openWhatsAppOrderMulti } from '../utils/whatsapp';
import './OrderModal.css';

function buildInitialSelections(initialProductId, initialPricingIndex) {
  const selections = {};
  PRODUCTS.forEach((product) => {
    const isInitialProduct = product.id === initialProductId;
    selections[product.id] = {
      checked: isInitialProduct,
      pricingIndex: isInitialProduct ? initialPricingIndex : 0,
    };
  });
  return selections;
}

export default function OrderModal({ isOpen, onClose, initialProductId, initialPricingIndex = 0 }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', canPost: 'yes' });
  const [errors, setErrors] = useState({});
  const [selections, setSelections] = useState(() =>
    buildInitialSelections(initialProductId, initialPricingIndex)
  );

  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', phone: '', email: '', address: '', canPost: 'yes' });
      setErrors({});
      setSelections(buildInitialSelections(initialProductId, initialPricingIndex));
    }
  }, [isOpen, initialProductId, initialPricingIndex]);

  if (!isOpen) return null;

  const handleFieldChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const toggleProduct = (productId) => {
    setSelections((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], checked: !prev[productId].checked },
    }));
  };

  const setProductPricingIndex = (productId, index) => {
    setSelections((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], pricingIndex: index },
    }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Full name is required.';
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!form.address.trim()) nextErrors.address = 'Delivery address is required.';

    const hasSelectedProduct = Object.values(selections).some((s) => s.checked);
    if (!hasSelectedProduct) nextErrors.products = 'Please select at least one product.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const items = PRODUCTS.filter((product) => selections[product.id].checked).map((product) => {
      const pricing = product.pricing[selections[product.id].pricingIndex] || product.pricing[0];
      return {
        name: product.name,
        packageLabel: pricing.label,
        price: pricing.price,
      };
    });

    openWhatsAppOrderMulti({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      canPost: form.canPost === 'yes' ? 'Yes' : 'No',
      items,
    });

    onClose();
  };

  return createPortal(
    <div className="order-modal__overlay" onClick={onClose}>
      <div
        className="order-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Order form"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="order-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3 className="order-modal__title">Complete Your Order</h3>

        <form className="order-modal__form" onSubmit={handleSubmit} noValidate>
          <div className="order-modal__field">
            <label htmlFor="order-name">Full Name *</label>
            <input id="order-name" type="text" value={form.name} onChange={handleFieldChange('name')} />
            {errors.name && <span className="order-modal__error">{errors.name}</span>}
          </div>

          <div className="order-modal__field">
            <label htmlFor="order-phone">Phone Number *</label>
            <input id="order-phone" type="tel" value={form.phone} onChange={handleFieldChange('phone')} />
            {errors.phone && <span className="order-modal__error">{errors.phone}</span>}
          </div>

          <div className="order-modal__field">
            <label htmlFor="order-email">Email Address</label>
            <input id="order-email" type="email" value={form.email} onChange={handleFieldChange('email')} />
          </div>

          <div className="order-modal__field">
            <label htmlFor="order-address">Delivery Address *</label>
            <input id="order-address" type="text" value={form.address} onChange={handleFieldChange('address')} />
            {errors.address && <span className="order-modal__error">{errors.address}</span>}
          </div>

          <div className="order-modal__products">
            <p className="order-modal__section-label">Select Products</p>

            {PRODUCTS.map((product) => {
              const selection = selections[product.id];
              const hasOptions = product.pricing.length > 1;

              return (
                <div key={product.id} className="order-modal__product-row">
                  <label className="order-modal__product-check">
                    <input
                      type="checkbox"
                      checked={selection.checked}
                      onChange={() => toggleProduct(product.id)}
                    />
                    {product.name}
                  </label>

                  {hasOptions ? (
                    <select
                      className="order-modal__product-select"
                      value={selection.pricingIndex}
                      disabled={!selection.checked}
                      onChange={(e) => setProductPricingIndex(product.id, Number(e.target.value))}
                    >
                      {product.pricing.map((opt, i) => (
                        <option key={opt.label} value={i}>
                          {opt.label} — {opt.price}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="order-modal__product-fixed-price">{product.pricing[0].price}</span>
                  )}
                </div>
              );
            })}

            {errors.products && <span className="order-modal__error">{errors.products}</span>}
          </div>

          {/* سؤال السماح بنشر الأوردر */}
          <div className="order-modal__field order-modal__field--radio">
            <label className="order-modal__question-label">
              Can we post your order on zekrak's page after you receive it?
            </label>
            <div className="order-modal__radio-group">
              <label className="order-modal__radio-label">
                <input
                  type="radio"
                  name="canPost"
                  value="yes"
                  checked={form.canPost === 'yes'}
                  onChange={handleFieldChange('canPost')}
                />
                Yes
              </label>
              <label className="order-modal__radio-label">
                <input
                  type="radio"
                  name="canPost"
                  value="no"
                  checked={form.canPost === 'no'}
                  onChange={handleFieldChange('canPost')}
                />
                No
              </label>
            </div>
          </div>

          {/* صندوق الملاحظات الشاملة (مدة التجهيز والعربون) */}
          <div className="order-modal__info-box">
            <p className="order-modal__info-title">📌 Important Notes:</p>
            <ul>
              <li>Order takes from 7–10 days</li>
              <li>For order confirmation, send 50% deposit</li>
            </ul>
          </div>

          <button type="submit" className="btn btn-primary order-modal__submit">
            Send Order
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}