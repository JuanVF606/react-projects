import { create } from "zustand";
import { initialProducts } from "../data/products";

const useDiscountStore = create((set, get) => ({
  discounts: initialProducts.slice(6, 24), // Productos con descuento
  limitedProducts: initialProducts.filter(product => product.category === 'Limited'), // Filtra productos con la categoría "Limited"
  
  // Función general para aplicar descuentos
  applyDiscount: (price, discountPercentage) => {
    return price - price * discountPercentage;
  },

  // Obtener el precio con descuento para productos generales
  getDiscountedPrice: (productId, price) => {
    const { discounts } = get();
    const productWithDiscount = discounts.find(product => product.id === productId);

    if (productWithDiscount) {
      const discountPercentage = 0.15;
      return get().applyDiscount(price, discountPercentage);
    }
    return price; // Precio original si no hay descuento
  },

  // Obtener el precio con descuento para productos limitados
  getLimitedDiscountedPrice: (productId, price) => {
    const { limitedProducts } = get();
    const productWithLimitedDiscount = limitedProducts.find(product => product.id === productId);

    if (productWithLimitedDiscount) {
      const discountPercentage = 0.30; // Ajusta según lo que consideres razonable
      return get().applyDiscount(price, discountPercentage);
    }
    return price; // Precio original si no hay descuento
  },
}));

export default useDiscountStore;
