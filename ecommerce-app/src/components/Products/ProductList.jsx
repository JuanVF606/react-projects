import React from 'react';
import useStore from '../../store/useStore';

const ProductList = () => {
  const { products, addToCart } = useStore();
  
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 shadow-lg">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm">Price: ${product.price}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="mt-2 bg-secondary text-white py-1 px-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
