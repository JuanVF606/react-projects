import React, { useState } from 'react';
import useStore from '../store/useStore';
import ProductCard from '../components/common/ProductCard';

const Shop = () => {
  const { products } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto my-16 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our Shop</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">Total Products: {filteredProducts.length}</p>
      </div>
    </div>
  );
};

export default Shop;
