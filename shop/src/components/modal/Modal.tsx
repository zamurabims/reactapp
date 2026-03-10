import { createPortal } from 'react-dom';
import React from 'react';

import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-esc-button" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
