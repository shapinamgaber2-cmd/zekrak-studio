import { useState } from 'react';
import featured1 from '../assets/images/featured-1.jpg';
import featured2 from '../assets/images/featured-2.jpg';
import OrderModal from './OrderModal';
import './Featured.css';

const FEATURED_PRODUCT = { name: 'The Aesthetic Couple Magazine' };

export default function Featured() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <section className="featured">
      <div className="container featured__inner">
        <div className="featured__content">
          <p className="eyebrow featured__eyebrow">✦ Featured ✦</p>
          <h2 className="featured__heading">
            The Aesthetic
            <br />
            Couple magazine
          </h2>
          <p className="featured__desc">
            Your most-loved aesthetic, curated into a beautiful printed magazine.
            Perfect for lovers. Fully personalized.
          </p>

          <div className="featured__actions">
            <span className="featured__price">{FEATURED_PRODUCT.price}</span>
            <button
              type="button"
              className="btn btn-light"
              disabled
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              Orders Closed
            </button>
          </div>
        </div>

        <div className="featured__media">
          <img src={featured1} alt="Valentine's themed magazine cover mockup" className="featured__img featured__img--back" />
          <img src={featured2} alt="'The Lovers' custom couple magazine cover" className="featured__img featured__img--front" />
        </div>
      </div>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}