import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCurrency } from "../../context/Currency";
import useCartStore from "../../store/useCartStore";
import useDiscountStore from "../../store/useDiscountStore";
import Modal from "../common/Modal";

const ProductCard = ({ product }) => {
  const { formatPriceToCLP } = useCurrency();
  const { addToCart, errorMessage, showErrorModal, closeErrorModal } = useCartStore();
  const { getDiscountedPrice } = useDiscountStore();
  const [added, setAdded] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(null);

  useEffect(() => {
    // Calcula el precio con descuento si aplica
    const discount = getDiscountedPrice(product.id, product.price);
    if (discount) {
      setDiscountedPrice(discount);
    }
  }, [product.id, product.price, getDiscountedPrice]);

  const handleAddToCart = () => {
    addToCart(product, discountedPrice);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Oculta el mensaje después de 1.5 segundos
  };

  return (
    <div className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={`Image-${product.name}`}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
      </Link>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{product.category}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {product.name}
        </p>

        {/* Sección de precios */}
        <div className="mt-3 mb-4">
          {discountedPrice ? (
            <div className="flex items-center">
              <p className="text-lg font-semibold text-red-500">
                {formatPriceToCLP(discountedPrice)}
              </p>
              <del className="text-sm text-gray-600 ml-2">
                {formatPriceToCLP(product.price)}
              </del>
            </div>
          ) : (
            <p className="text-lg font-semibold text-black">
              {formatPriceToCLP(product.price)}
            </p>
          )}
        </div>

        {/* Botón de agregar al carrito */}
        <div className="flex justify-between items-center">
          {product.stock > 0 ? (
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center w-full transition-transform duration-200 hover:bg-blue-700"
            >
              <AiOutlineShoppingCart className="mr-2" /> Add to Cart
            </button>
          ) : (
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded-md flex items-center justify-center w-full cursor-not-allowed"
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>

        {/* Mensaje de confirmación de agregado */}
        {added && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white text-sm rounded-md py-1 px-3 transition-all duration-300 animate-bounce">
            Added to Cart!
          </div>
        )}
      </div>

      {/* Modal de error si existe un error al agregar */}
      {showErrorModal && (
        <Modal message={errorMessage} onClose={closeErrorModal} />
      )}
    </div>
  );
};

export default ProductCard;
