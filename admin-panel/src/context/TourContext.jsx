// src/context/TourContext.js
import React, { createContext, useState } from "react";

const TourContext = createContext();

const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "City Sightseeing Tour",
      description: "Explore the city landmarks with a local guide.",
      date: "2024-10-01",
      location: "City Center",
      price: 25,
    },
    {
      id: 2,
      name: "Mountain Hiking Adventure",
      description: "A thrilling hike through the mountain trails.",
      date: "2024-10-05",
      location: "Mountain Base",
      price: 40,
    },
    {
      id: 3,
      name: "Cultural Heritage Tour",
      description: "Discover the rich culture and history of the region.",
      date: "2024-10-10",
      location: "Cultural District",
      price: 30,
    },
    {
      id: 4,
      name: "Beach Day Tour",
      description: "Relax and enjoy the sun at the beautiful beaches.",
      date: "2024-10-15",
      location: "Sunny Beach",
      price: 20,
    },
  ]);
  const [reservations, setReservations] = useState([
    // Datos de ejemplo para reservas
    {
      id: 1,
      name: "Juan Venegas",
      email: "juan@example.com",
      guests: 2,
      tourId: 1,
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      email: "maria@example.com",
      guests: 4,
      tourId: 2,
    },
  ]);

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
