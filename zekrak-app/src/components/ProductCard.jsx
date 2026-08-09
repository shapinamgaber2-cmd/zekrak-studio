import { useState } from 'react';
import OrderModal from './OrderModal';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const isSoldOut = product.isSoldOut;

  const images = product.images && product.images.length ? product.images : [];
  const pricingOptions = product.pricing || [];

  const [imageIndex, setImageIndex] = useState(0);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // حماية للـ index الخاص بالصور
  const safeImageIndex = imageIndex >= images.length ? 0 : imageIndex;

  const hasMultipleImages = images.length > 1;
  const hasPriceOptions = pricingOptions.length > 1;
  
  // حماية لاختيار السعر المتاح دائماً حتى لو عنصر واحد في المصفوفة
  const selectedPrice = pricingOptions[selectedPriceIndex] || pricingOptions[0];

  const goPrevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className={`product-card ${isSoldOut ? 'product-card--sold-out' : ''}`}>
      <div className="product-card__media">
        {images.length > 0 && (
          <img src={images[safeImageIndex]} alt={product.name} loading="lazy" />
        )}
        
        {/* بادج Sold Out يظهر فوق الصورة لو المنتج منتهي */}
        {isSoldOut ? (
          <span className="product-card__badge product-card__badge--sold">Sold Out</span>
        ) : (
          product.badge && <span className="product-card__badge">{product.badge}</span>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="product-card__slider-nav product-card__slider-nav--prev"
              aria-label="Previous image"
              onClick={goPrevImage}
            >
              ‹
            </button>
            <button
              type="button"
              className="product-card__slider-nav product-card__slider-nav--next"
              aria-label="Next image"
              onClick={goNextImage}
            >
              ›
            </button>

            <div className="product-card__slider-dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`product-card__slider-dot ${i === safeImageIndex ? 'is-active' : ''}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        {hasPriceOptions && (
          <div className="product-card__price-options" role="group" aria-label={`Select pricing for ${product.name}`}>
            {pricingOptions.map((option, i) => (
              <button
                key={option.label}
                type="button"
                className={`product-card__price-option ${i === selectedPriceIndex ? 'is-active' : ''}`}
                aria-pressed={i === selectedPriceIndex}
                onClick={() => setSelectedPriceIndex(i)}
                disabled={isSoldOut}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <div className="product-card__footer">
          {/* عرض السعر المختار أو السعر الافتراضي للـ Single Pricing */}
          <span className="product-card__price">
            {selectedPrice ? selectedPrice.price : product.price}
          </span>
          <button
            type="button"
            className="product-card__cta"
            onClick={() => !isSoldOut && setIsOrderModalOpen(true)}
            disabled={isSoldOut}
          >
            {isSoldOut ? 'SOLD OUT' : 'ADD'}
          </button>
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProductId={product.id}
        initialPricingIndex={selectedPriceIndex}
      />
    </article>
  );
}