import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCartStore from '../../store/useCartStore';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // Oculta la notificación después de 2 segundos
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md relative">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700 mt-1">${product.price.toLocaleString()}</p>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition-transform duration-200 hover:bg-blue-700"
      >
        <AiOutlineShoppingCart className="mr-2" /> Add to Cart
      </button>

      {added && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white text-sm rounded-md py-1 px-3 transition-all duration-300 animate-bounce">
          Added to Cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
