// src/store/useStore.js
import { create } from "zustand";
import { initialProducts } from '../data/products';
import { testimonials } from '../data/testimonials';

const useStore = create((set) => ({
  newProducts: initialProducts.filter((product) => product.isNew === true),
  products: initialProducts,
  discountedProducts: initialProducts.slice(6, 9),
  updateStock: (productId, quantity) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, stock: product.stock - quantity } : product
      ),
    }));
  },
  cart: [],
  featuredProducts: initialProducts.slice(0, 3),
  testimonials: testimonials,
}));

export default useStore;
