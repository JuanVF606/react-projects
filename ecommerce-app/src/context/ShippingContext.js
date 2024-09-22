import React, { createContext, useContext, useState } from 'react';

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
    email: '',
    shippingMethod: '',
    deliveryNotes: '',
    subscribe: false,
  });

  return (
    <ShippingContext.Provider value={{ shippingInfo, setShippingInfo }}>
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => {
  return useContext(ShippingContext);
};
