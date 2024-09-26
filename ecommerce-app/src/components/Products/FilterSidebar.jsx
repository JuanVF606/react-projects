import React, { useState } from 'react';
import { useCurrency } from '../../context/Currency';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
  const [isOpen, setIsOpen] = useState(true);

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
    <aside className={`w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-md mb-6 lg:mb-0 border border-gray-300 transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={isOpen ? "Collapse filters" : "Expand filters"}
        >
          <ChevronDownIcon 
            className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </button>
      </div>

      {/* Contenido del Sidebar */}
      {isOpen && (
        <div>
          {/* Categorías */}
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
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Búsqueda */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={onSearchChange}
              className="border border-gray-400 rounded-lg p-3 w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search for products"
            />
          </div>

          {/* Rango de precios */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
              <input
                type="number"
                name="minPrice"
                value={priceRange[0]}
                onChange={handlePriceChange}
                min={minPrice}
                max={maxPrice}
                className="border border-gray-400 rounded-lg p-2 w-full sm:w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Min (${formatPriceToCLP(minPrice)})`}
                aria-label="Minimum price"
              />
              <input
                type="number"
                name="maxPrice"
                value={priceRange[1]}
                onChange={handlePriceChange}
                min={minPrice}
                max={maxPrice}
                className="border border-gray-400 rounded-lg p-2 w-full sm:w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Max (${formatPriceToCLP(maxPrice)})`}
                aria-label="Maximum price"
              />
            </div>
            {priceRange[0] > priceRange[1] && (
              <p className="text-red-600 text-sm">Minimum price cannot exceed maximum price.</p>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
