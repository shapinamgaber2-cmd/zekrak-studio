import { useState } from 'react';
import storyPhoto from '../assets/images/story-photo.jpg';
import OrderModal from './OrderModal';
import './Story.css';

const FEATURES = ['Premium Printing', 'Fast Delivery', 'Custom Design'];

export default function Story() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <section className="story" id="about">
      <div className="container story__inner">
        <div className="story__media">
          <img src={storyPhoto} alt="Framed custom photo collage print, 'My Girl'" />
        </div>

        <div className="story__content">
          <p className="eyebrow">✦ Our Story ✦</p>
          <h2 className="story__heading">
            Born From a Love
            <br />
            of Meaningful Gifts
          </h2>
          <span className="story__divider" />

          <p className="story__paragraph">
            "Zekrak" (ذكراك) means "your memory" in Arabic — and that's exactly
            what we create. We started as a small creative studio in Egypt
            with one mission: turn the moments that matter into art you can
            hold.
          </p>
          <p className="story__paragraph">
            From custom Vogue covers to heartfelt photo frames, every piece is
            designed with intention, printed with quality, and delivered with
            love.
          </p>

          <div className="story__features">
            {FEATURES.map((feature) => (
              <span className="story__feature" key={feature}>
                {feature}
              </span>
            ))}
          </div>

          <button 
            type="button" 
            className="btn btn-primary" 
            disabled
            style={{ opacity: 0.6, cursor: 'not-allowed' }}
          >
            Orders Closed
          </button>
        </div>
      </div>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </section>
  );
}