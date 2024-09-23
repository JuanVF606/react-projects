import { create } from "zustand";
import { initialProducts } from "../data/products";

const useDiscountStore = create((set, get) => ({
  discounts: initialProducts.slice(1, 2), // Selección de productos con descuento
  getDiscountedPrice: (productId, price) => {
    // Lógica para obtener el precio con descuento si está disponible
    const { discounts } = get();

    // Verifica si el producto está en la lista de productos con descuentos
    const productWithDiscount = discounts.find(
      (discountedProduct) => discountedProduct.id === productId
    );

    if (productWithDiscount) {
      const discountPercentage = 0.15; // Descuento del 15%
      return price - price * discountPercentage; // Aplica el descuento
    }

    // Si no hay descuento, retorna null
    return price;
  },

  limitedProducts: initialProducts.slice(1, 4), // Selección de productos limitados
  getLimitedDiscountedPrice: (productId, price) => {
    // Lógica para obtener el precio con descuento si está disponible
    const { limitedProducts } = get();

    // Verifica si el producto está en la lista de productos limitados
    const productWithDiscount = limitedProducts.find(
      (discountedProduct) => discountedProduct.id === productId
    );

    if (productWithDiscount) {
      const discountPercentage = 0.30; // Descuento del 30%
      return price - price * discountPercentage; // Aplica el descuento
    }

    // Si no hay descuento, retorna el precio original
    return price;
  }
}));

export default useDiscountStore;
