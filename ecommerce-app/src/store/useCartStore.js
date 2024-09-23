// src/store/cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  errorMessage: "",
  showErrorModal: false,
  
  addToCart: (product, discountedPrice = null) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      const stockAvailable = product.stock; // Asumiendo que el producto tiene una propiedad 'stock'
      
      // Determina el precio a usar (con descuento o precio original)
      const priceToUse = discountedPrice || product.price;

      if (existingProduct) {
        const newQuantity = existingProduct.quantity + 1;
        if (newQuantity <= stockAvailable && newQuantity <= 8) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: newQuantity } : item
            ),
            errorMessage: "",
            showErrorModal: false,
          };
        }
        return {
          ...state,
          errorMessage: "No puedes agregar más de 8 unidades de este producto o no hay suficiente stock.",
          showErrorModal: true,
        };
      }

      if (stockAvailable > 0) {
        return {
          cart: [...state.cart, { ...product, price: priceToUse, quantity: 1 }],
          errorMessage: "",
          showErrorModal: false,
        };
      }

      return {
        ...state,
        errorMessage: "Este producto está agotado.",
        showErrorModal: true,
      };
    });
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.min(quantity, item.stock) } : item
      ),
    }));
  },
  
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },
  
  clearCart: () => set({ cart: [] }),
  
  closeErrorModal: () => set({ showErrorModal: false, errorMessage: "" }),
}));

export default useCartStore;
