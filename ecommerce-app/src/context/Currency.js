// src/context/CurrencyContext.js
import React, { createContext, useContext } from 'react';

// Crear el contexto
const CurrencyContext = createContext();

// Formateador de precios en CLP
const formatPriceToCLP = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price);
};

// Proveedor del contexto
export const CurrencyProvider = ({ children }) => {
  return (
    <CurrencyContext.Provider value={{ formatPriceToCLP }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useCurrency = () => {
  return useContext(CurrencyContext);
};
