import { create } from "zustand";
import { initialProducts } from '../data/products'; // Asegúrate de que la ruta sea correcta
import { testimonials } from '../data/testimonials';

const useStore = create(() => ({
  products: initialProducts,
  cart: [],
  featuredProducts: initialProducts.slice(0, 3), // Selecciona los primeros 3 productos por defecto
  testimonials: testimonials,
  
}));

export default useStore;
