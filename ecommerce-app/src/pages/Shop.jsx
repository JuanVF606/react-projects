import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import NewProductCard from '../components/common/NewProductCard';

const Shop = () => {
  const { products } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Obtener categorías únicas a partir de los productos
  const categories = ['All', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filtered = products;

      if (selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }

      if (searchTerm !== '') {
        filtered = filtered.filter(
          product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory, products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto my-16 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our Shop</h1>

      {/* Filtros por categoría */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`py-2 px-4 rounded-lg shadow-md ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            } transition duration-200 hover:bg-blue-500 hover:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Campo de búsqueda */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/2 lg:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {searchTerm === '' && (
        <p className="text-center text-gray-500 mb-6">Start typing to search for products...</p>
      )}

      {/* Productos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        )}
      </div>

      {/* Contador de productos */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">Total Products: {filteredProducts.length}</p>
      </div>
    </div>
  );
};

export default Shop;
