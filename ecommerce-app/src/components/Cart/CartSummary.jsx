import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useCurrency } from '../../context/Currency';

const CartSummary = ({ cart, handleQuantityChange, handleRemove }) => {
  const { formatPriceToCLP } = useCurrency();

  return (
    <div className="space-y-6">
      <ul className="space-y-4">
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            {/* Imagen y detalles del producto */}
            <div className="flex items-center space-x-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg shadow-md border border-gray-300"
              />
              <div>
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-600 text-md">
                  {formatPriceToCLP(product.price)} x {product.quantity}
                </p>
                {/* Mostrar si el producto está en stock */}
                <p className={`text-sm mt-1 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>

            {/* Controles de cantidad y botón de eliminar */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                className="border border-gray-300 rounded-lg w-16 text-center py-1 px-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={() => handleRemove(product.id)}
                className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
