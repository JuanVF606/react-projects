// src/components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const maxPagesToShow = 3; // Número máximo de botones de página a mostrar
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(pageCount, startPage + maxPagesToShow - 1);
  
  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <button 
        onClick={() => handlePageClick(1)} 
        disabled={currentPage === 1}
        className="mx-1 py-2 px-4 rounded-lg shadow bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
      >
        &laquo; First
      </button>
      
      {startPage > 1 && (
        <>
          <button onClick={() => handlePageClick(1)} className="mx-1 py-2 px-4 rounded-lg shadow bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200">1</button>
          {startPage > 2 && <span className="mx-1">...</span>}
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          key={startPage + index}
          onClick={() => handlePageClick(startPage + index)}
          className={`mx-1 py-2 px-4 rounded-lg shadow ${
            currentPage === startPage + index ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
          } transition duration-200 hover:bg-blue-500 hover:text-white`}
        >
          {startPage + index}
        </button>
      ))}

      {endPage < pageCount && (
        <>
          {endPage < pageCount - 1 && <span className="mx-1">...</span>}
          <button onClick={() => handlePageClick(pageCount)} className="mx-1 py-2 px-4 rounded-lg shadow bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200">{pageCount}</button>
        </>
      )}

      <button 
        onClick={() => handlePageClick(pageCount)} 
        disabled={currentPage === pageCount}
        className="mx-1 py-2 px-4 rounded-lg shadow bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
      >
        Last &raquo;
      </button>
    </div>
  );
};

export default Pagination;
