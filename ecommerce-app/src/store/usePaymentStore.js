// src/store/paymentStore.js
import { create } from "zustand";

const generateOrderId = () => {
  return `ORDER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

const usePaymentStore = create((set, get) => ({
  paymentInfo: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'creditCard',
  },
  setPaymentInfo: (info) => set((state) => ({
    paymentInfo: {
      ...state.paymentInfo,
      ...info,
    }
  })),
  resetPaymentInfo: () => set({
    paymentInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      paymentMethod: 'creditCard',
    }
  }),
  validatePaymentInfo: () => {
    const { cardNumber, expiryDate, cvv } = get().paymentInfo;

    // Validar campos vacíos
    if (!cardNumber || !expiryDate || !cvv) {
      return { valid: false, message: "All fields must be filled out." };
    }

    // Validar número de tarjeta (16 dígitos)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      return { valid: false, message: "Card number must be 16 digits." };
    }

    // Validar fecha de expiración (MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryDateRegex.test(expiryDate)) {
      return { valid: false, message: "Invalid expiry date format. Use MM/YY." };
    }

    // Validar CVV (3 dígitos)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      return { valid: false, message: "CVV must be 3 digits." };
    }

    // Validar fecha de expiración
    const [month, year] = expiryDate.split('/').map(Number);
    const expiry = new Date(2000 + year, month - 1);
    const now = new Date();
    if (expiry < now) {
      return { valid: false, message: "Card is expired." };
    }

    return { valid: true };
  },
  maskCardNumber: (number) => {
    if (number.length > 4) {
      return number.slice(-4).padStart(number.length, '•');
    }
    return number;
  },
  createOrderId: () => generateOrderId(), // Nueva función para crear un ID de orden
}));

export default usePaymentStore;
