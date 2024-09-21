// src/components/Tours.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { TourContext } from "../context/TourContext";

const Tours = () => {
  const { addTour } = useContext(TourContext);
  const [tourData, setTourData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    price: "", // Nuevo campo para el precio
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTour = async (e) => {
    e.preventDefault();
    if (!tourData.name || !tourData.description || !tourData.date || !tourData.location || !tourData.price) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: tourData.location,
          format: "json",
        },
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        addTour({ ...tourData, coordinates: [lat, lon], price: parseFloat(tourData.price) }); // Asegúrate de parsear el precio
        setMessage("Tour added successfully!");
      } else {
        setMessage("Location not found. Please check the address.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setMessage("Could not fetch location. Please try again.");
    } finally {
      setLoading(false);
    }

    setTourData({
      name: "",
      description: "",
      date: "",
      location: "",
      price: "", // Reiniciar el campo de precio
    });
  };

  return (
    <div className="container mx-auto my-6 p-4">
      <div className="relative mb-6">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-tiro-medio-explorando-mapa_23-2149212371.jpg?t=st=1726881469~exp=1726885069~hmac=354f1d7a27cf0cb41bc39629d67157258fe3d78e89c0d0f28ac2eabba6485ae5&w=1380"
          alt="Explorando mapa"
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50">
          Add a New Tour
        </h2>
      </div>

      <form onSubmit={handleAddTour} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Tour Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={tourData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Tour Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={tourData.date}
              onChange={handleInputChange}
              required
              min={today}
              className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={tourData.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location (Address) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={tourData.location}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={tourData.price}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
            min="0" // Asegúrate de que el precio no sea negativo
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-forest-green text-white py-2 rounded-md shadow-lg hover:bg-emphasis transition duration-200"
        >
          {loading ? "Loading..." : "Add Tour"}
        </button>
      </form>

      {message && <p className="text-red-500 text-sm">{message}</p>}
    </div>
  );
};

export default Tours;
