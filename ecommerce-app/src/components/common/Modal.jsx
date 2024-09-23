// src/components/Modal.js
import React, { useEffect } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-transparent opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 z-10 shadow-lg transform transition-transform duration-300 scale-100">
        <div className="flex items-center mb-4">
          <AiOutlineExclamationCircle className="text-red-600 text-3xl mr-2" />
          <h2 className="text-lg font-semibold">Error</h2>
        </div>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
