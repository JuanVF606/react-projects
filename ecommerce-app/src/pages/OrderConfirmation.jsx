// src/components/OrderConfirmation.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCurrency } from '../context/Currency';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { orderDetails, orderId } = state || { orderDetails: [], orderId: '' };
  const { formatPriceToCLP } = useCurrency();

  const totalAmount = orderDetails.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        <AiOutlineCheckCircle className="inline text-green-500" /> Thank You for Your Purchase!
      </h1>
      <p className="mb-4 text-center text-gray-600">Your order has been successfully placed.</p>
      
      <div className="mb-4 text-center">
        <span className="text-gray-700">Order ID: <strong>{orderId}</strong></span>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-700">Order Details:</h2>
      <ul className="mb-4 space-y-2">
        {orderDetails.length > 0 ? (
          orderDetails.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-2 border-b border-gray-200">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <span className="text-gray-800">{item.name}</span>
              </div>
              <span className="text-gray-600">
                {item.quantity} x {formatPriceToCLP(item.price)}
              </span>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No items in your order.</li>
        )}
      </ul>

      <div className="flex justify-between font-bold text-lg mb-4">
        <span className="text-gray-800">Total Amount:</span>
        <span className="text-blue-600">{formatPriceToCLP(totalAmount)}</span>
      </div>

      <div className="mt-4 text-center text-gray-600">
        <p>Your tracking number will be sent to your email once your order is ready for delivery.</p>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/"
          className="flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded shadow-md"
        >
          <FaShoppingCart className="mr-2" /> Continue Shopping
        </Link>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">If you have any questions about your order, feel free to contact our support team.</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
