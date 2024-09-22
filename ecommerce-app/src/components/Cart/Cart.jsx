import React from 'react';
import useStore from '../../store/useStore';

const Cart = () => {
  const { cart, removeFromCart } = useStore();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-red-500">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              {item.name} - ${item.price}
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
