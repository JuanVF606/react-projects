// src/components/Products/FilterSidebar.js

import React from 'react';
import { useCurrency } from '../../context/Currency';

const FilterSidebar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  minPrice, 
  maxPrice, 
  priceRange, 
  setPriceRange 
}) => {
  const { formatPriceToCLP } = useCurrency();

  const handlePriceChange = (event) => {
    const { value, name } = event.target;
    const newRange = [...priceRange];

    if (name === 'minPrice') {
      newRange[0] = Number(value);
    } else {
      newRange[1] = Number(value);
    }

    setPriceRange(newRange);
  };

  return (
    <aside className="w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-md mb-6 lg:mb-0 border border-gray-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Filters</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex flex-col space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`py-2 px-4 rounded-md shadow transition duration-200 border-2 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-700'
                  : 'bg-gray-200 text-gray-800 border-gray-300'
              } hover:bg-blue-500 hover:text-white hover:border-blue-600`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={onSearchChange}
          className="border border-gray-400 rounded-lg p-3 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Rango de precios */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <div className="flex justify-between">
          <input
            type="number"
            name="minPrice"
            value={priceRange[0]}
            onChange={handlePriceChange}
            min={minPrice}
            max={maxPrice}
            className="border border-gray-400 rounded-lg p-2 w-1/2 mr-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Min (${formatPriceToCLP(minPrice)})`}
          />
          <input
            type="number"
            name="maxPrice"
            value={priceRange[1]}
            onChange={handlePriceChange}
            min={minPrice}
            max={maxPrice}
            className="border border-gray-400 rounded-lg p-2 w-1/2 ml-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Max (${formatPriceToCLP(maxPrice)})`}
          />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
