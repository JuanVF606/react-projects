import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useCurrency } from '../../context/Currency';
import { useShipping } from '../../context/ShippingContext';
import useCartStore from '../../store/useCartStore';

const ReviewOrder = ({ cart }) => {
  const { formatPriceToCLP } = useCurrency();
  const { removeFromCart, updateQuantity } = useCartStore();
  const { shippingInfo } = useShipping();

  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const iva = subtotal * 0.19;
  const shippingCost = subtotal > 15000 ? 0 : 1000;
  const finalTotal = subtotal + iva + shippingCost;

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Shipping Information */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Full Name:</strong> {shippingInfo.fullName}</p>
            <p><strong>Address:</strong> {shippingInfo.address}</p>
            <p><strong>City:</strong> {shippingInfo.city}</p>
          </div>
          <div>
            <p><strong>State/Region:</strong> {shippingInfo.state}</p>
            <p><strong>Postal Code:</strong> {shippingInfo.postalCode}</p>
            <p><strong>Country:</strong> {shippingInfo.country}</p>
            <p><strong>Phone:</strong> {shippingInfo.phone}</p>
            <p><strong>Email:</strong> {shippingInfo.email}</p>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Cart Summary</h2>
        <ul className="space-y-4">
          {cart.map((product) => (
            <li key={product.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg border border-gray-300 mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">
                  {formatPriceToCLP(product.price)} x 
                  <select
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                    className="border border-gray-300 rounded mx-2 p-1"
                  >
                    {[...Array(8).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                  </select>
                </p>
              </div>
              <button onClick={() => handleRemove(product.id)} className="text-red-500 hover:text-red-700">
                <AiOutlineClose className="text-xl" />
              </button>
            </li>
          ))}
        </ul>

        {/* Totals */}
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Subtotal:</span>
            <span>{formatPriceToCLP(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <span>IVA (19%):</span>
            <span>{formatPriceToCLP(iva)}</span>
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Shipping Cost:</span>
            <span>{shippingCost === 0 ? 'Free' : formatPriceToCLP(shippingCost)}</span>
          </div>
        </div>

        {/* Final Total */}
        <div className="mt-4 flex justify-between items-center bg-blue-100 p-4 rounded-lg font-bold text-xl text-blue-800">
          <span>Total:</span>
          <span>{formatPriceToCLP(finalTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
