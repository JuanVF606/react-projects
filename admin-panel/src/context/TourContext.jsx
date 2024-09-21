// src/context/TourContext.js
import React, { createContext, useState } from "react";
import { toursData, reservationsData } from "./data"; // Importar los datos

const TourContext = createContext();

const TourProvider = ({ children }) => {
  const [tours, setTours] = useState(toursData); // Inicializar con los datos importados
  const [reservations, setReservations] = useState(reservationsData); // Inicializar con los datos importados

  const addTour = (tour) => {
    setTours((prevTours) => [...prevTours, tour]);
  };

  const addReservation = (reservation) => {
    setReservations((prevReservations) => [
      ...prevReservations,
      { ...reservation, id: prevReservations.length + 1 }, // Asignar un ID único
    ]);
  };

  return (
    <TourContext.Provider
      value={{ tours, addTour, reservations, addReservation }}
    >
      {children}
    </TourContext.Provider>
  );
};

export { TourContext, TourProvider };
