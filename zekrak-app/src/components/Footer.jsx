import { useState } from 'react';
import OrderModal from './OrderModal';
import PolicyModal from './PolicyModal';

import './Footer.css';

const WHATSAPP_CONTACT_LINK = 'https://wa.me/201200990798?text=Hi%20Zekrak!%20I%20have%20a%20question.';

// نص الشروط والأحكام
const TERMS_CONTENT = (
  <div>
    <p>Please review our Terms & Conditions carefully before placing an order:</p>
    <ul>
      <li>50% deposit is required to secure your order.</li>
      <li>Production time between 7 to 10 days.</li>
      <li>Shipping is calculated once you send your address.</li>
      <li>Choose your vibe or let us design something that matches your energy perfectly.</li>
    </ul>
  </div>
);

// نص سياسة الخصوصية
const PRIVACY_CONTENT = (
  <div>
    <p><strong>REFUND POLICY</strong></p>
    <ul>
      <li>50% refund if cancelled during the design phase.</li>
      <li>No refund after the final PDF design has been sent.</li>
    </ul>
  </div>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // حالات التحكم بمودال الشروط والسياسات
  const [policyModal, setPolicyModal] = useState({
    isOpen: false,
    title: '',
    content: null,
  });

  const openPolicy = (title, content) => {
    setPolicyModal({ isOpen: true, title, content });
  };

  const closePolicy = () => {
    setPolicyModal({ isOpen: false, title: '', content: null });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        {/* العمود 1: اللوجو والمعلومات (الصف الأول على الموبايل - شمال) */}
        <div className="footer__column footer__brand">
          <a href="#top" className="footer__logo">
            <img src="/assets/image2.svg" className="footer__logo-img" alt="ZEKRAK" />
          </a>
          <p className="footer__tagline">
            Your memory, designed beautifully.
            <br />
            Custom printed gifts crafted with love in Egypt.
          </p>
          <ul className="footer__contact">
            <li>
              <a href="mailto:Zekrak.eg@gmail.com">Zekrak.eg@gmail.com</a>
            </li>
            <li>
              <a href="https://instagram.com/zekrak.eg" target="_blank" rel="noopener noreferrer">
                @zekrak.eg
              </a>
            </li>
            <li>Alexandria, Egypt</li>
          </ul>

          <div className="footer__social">
            <a href="https://instagram.com/zekrak.eg" aria-label="Zekrak on Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://tiktok.com/@zekrak.eg" aria-label="Zekrak on TikTok" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.872 2.89 2.89 0 0 1-2.891-2.892 2.894 2.894 0 0 1 2.891-2.892c.32 0 .633.054.928.156V9.404a6.29 6.29 0 0 0-.928-.069 6.326 6.326 0 0 0-6.331 6.332 6.327 6.327 0 0 0 6.331 6.33 6.327 6.327 0 0 0 6.331-6.33V9.025a8.212 8.212 0 0 0 4.785 1.523V7.103a4.831 4.831 0 0 1-1.005-.417z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* العمود 2: Shop (الصف الأول على الموبايل - يمين) */}
        <div className="footer__column">
          <h4 className="footer__column-title">Shop</h4>
          <ul>
            {['Magazine Prints', 'Newspaper Prints', 'Aesthetic Collage Boards', 'Polaroid Sets', 'Framed Photo Collages', 'Custom Birthday Prints'].map((item) => (
              <li key={item}>
                <a href="#shop">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود 3: Company (الصف الثاني على الموبايل - شمال) */}
        <div className="footer__column">
          <h4 className="footer__column-title">Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#top">FAQ</a></li>
            <li><a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            
            <li>
              <button 
                type="button" 
                className="footer__link-btn"
                onClick={() => openPolicy('Terms & Conditions', TERMS_CONTENT)}
              >
                Terms & Conditions
              </button>
            </li>

            <li>
              <button 
                type="button" 
                className="footer__link-btn"
                onClick={() => openPolicy('Privacy Policy', PRIVACY_CONTENT)}
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* العمود 4: How To Order (الصف الثاني على الموبايل - يمين) */}
        <div className="footer__column footer__order">
          <h4 className="footer__column-title">How To Order</h4>
          <ul>
            {['Choose your print', 'Send your memory', 'We design it', 'Delivered as soon as possible'].map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-light footer__cta" onClick={() => setIsOrderModalOpen(true)}>
            Start Your Order →
          </button>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Zekrak. All rights reserved.</p>
        <p>Designed with love in Egypt ♥</p>
      </div>

      {/* المودال الخاص بالطلب */}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />

      {/* المودال الخاص بالشروط والسياسات */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicy}
        title={policyModal.title}
        content={policyModal.content}
      />
    </footer>
  );
}