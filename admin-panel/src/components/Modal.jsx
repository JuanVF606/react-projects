// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 shadow-lg z-10 transform transition-transform duration-300 scale-95">
        <button onClick={onClose} className="text-red-500 hover:text-red-700 float-right">
          Close
        </button>
        <div className="clear-both mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
