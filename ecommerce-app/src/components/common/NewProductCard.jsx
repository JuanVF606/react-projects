import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md"; // Icono de fuego
import { useCurrency } from "../../context/Currency";
import useCartStore from "../../store/useCartStore";
import useDiscountStore from "../../store/useDiscountStore";
import Modal from "../common/Modal";

const ProductCard = ({ product }) => {
  const { formatPriceToCLP } = useCurrency();
  const { addToCart, errorMessage, showErrorModal, closeErrorModal } = useCartStore();
  const { getDiscountedPrice, getLimitedDiscountedPrice } = useDiscountStore();

  const [added, setAdded] = useState(false);

  // Determinar si el producto tiene un descuento limitado
  const isLimited = product.category === 'Limited';

  // Memoriza el precio con descuento
  const discountedPrice = useMemo(() => {
    return isLimited 
      ? getLimitedDiscountedPrice(product.id, product.price)
      : getDiscountedPrice(product.id, product.price);
  }, [product.id, product.price, getDiscountedPrice, getLimitedDiscountedPrice, isLimited]);

  // Truncar el nombre del producto si es largo
  const shortName = product.name.length > 25 ? `${product.name.slice(0, 25)}...` : product.name;

  // Truncar la descripción si es larga
  const shortDescription =
    product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description;

  const priceContent = (
    <div className="flex items-center">
      <p className="text-lg font-semibold text-red-500">
        {formatPriceToCLP(discountedPrice)}
      </p>
      {discountedPrice < product.price && (
        <del className="text-sm text-gray-600 ml-2">
          {formatPriceToCLP(product.price)}
        </del>
      )}
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product, discountedPrice || product.price);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Oculta el mensaje después de 1.5 segundos
  };

  return (
    <div className="relative w-64 h-80 bg-white shadow-md rounded-lg p-4 flex flex-col justify-between duration-500 hover:scale-105 hover:shadow-xl">
      {isLimited && (
        <div className="absolute top-2 left-2 bg-red-600 text-white rounded-full p-1">
          <MdLocalFireDepartment className="w-5 h-5" />
        </div>
      )}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={`Image-${product.name}`}
          className="h-40 w-full object-cover rounded-lg mb-2"
        />
        <p className="text-md font-bold text-black truncate">{shortName}</p>
        <p className="text-sm text-gray-600 truncate">{shortDescription}</p>

        {/* Sección de precios */}
        <div className="mt-2">
          {priceContent}
        </div>
      </Link>
      {/* Botón de agregar al carrito */}
      <div className="flex justify-between items-center mt-auto">
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

      {/* Modal de error si existe un error al agregar */}
      {showErrorModal && (
        <Modal message={errorMessage} onClose={closeErrorModal} />
      )}
    </div>
  );
};

export default ProductCard;
