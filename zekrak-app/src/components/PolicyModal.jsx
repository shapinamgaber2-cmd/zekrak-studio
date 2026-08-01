import { createPortal } from 'react-dom';
import './PolicyModal.css';

export default function PolicyModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="policy-modal__overlay" onClick={onClose}>
      <div
        className="policy-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="policy-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3 className="policy-modal__title">{title}</h3>

        <div className="policy-modal__content">
          {content}
        </div>

        <button type="button" className="btn btn-primary policy-modal__btn" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>,
    document.body
  );
}