// src/components/Reservations.js
import React, { useContext, useState } from "react";
import { TourContext } from "../context/TourContext";
import { FaUser, FaEnvelope, FaUsers, FaMapMarkerAlt } from "react-icons/fa"; 
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 
import Modal from "../components/Modal";

const Reservations = () => {
  const { reservations, addReservation, tours } = useContext(TourContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [newReservation, setNewReservation] = useState({
    name: "",
    email: "",
    guests: "",
    tourName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredReservations = reservations.filter((reservation) =>
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    if (
      !newReservation.name ||
      !newReservation.email ||
      !newReservation.guests ||
      !newReservation.tourName
    ) {
      toast.error("Please fill in all required fields."); 
      return;
    }
    addReservation({ ...newReservation, id: Date.now() });
    toast.success("Reservation added successfully!"); 
    setNewReservation({ name: "", email: "", guests: "", tourName: "" });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    toast.warn(`Delete reservation with ID: ${id}`);
  };

  // Calculate total price based on selected tour
  const selectedTour = tours.find(tour => tour.name === newReservation.tourName);
  const totalPrice = selectedTour ? selectedTour.price * newReservation.guests : 0;

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 w-full bg-forest-green text-white py-2 rounded-md shadow hover:bg-misty-blue transition duration-200 ease-in-out"
      >
        Add New Reservation
      </button>

      <h2 className="text-2xl font-bold mb-4 text-forest-green">Reservations</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />

      {filteredReservations.length === 0 ? (
        <p className="text-gray-500">No reservations found.</p>
      ) : (
        <table className="min-w-full bg-white rounded-lg shadow-md mb-4">
          <thead>
            <tr className="bg-forest-green text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Number of Guests</th>
              <th className="py-3 px-4 text-left">Tour Name</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-misty-blue">
                <td className="py-3 px-4 border-b border-gray-200">{reservation.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{reservation.email}</td>
                <td className="py-3 px-4 border-b border-gray-200">{reservation.guests}</td>
                <td className="py-3 px-4 border-b border-gray-200">{reservation.tourName}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <button className="text-red-600" onClick={() => handleDelete(reservation.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <section className="flex items-center justify-between mb-auto">
          <div className="relative mb-12">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-apuntando-distancia-mujer_23-2147833131.jpg?t=st=1726882485~exp=1726886085~hmac=7638297dcedd17eb2d194135fda2091154c0d8dc71d70adb5455394053a0bd4b&w=1380"
              alt="Explorando mapa"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50">
              Add a New Reservation
            </h2>
          </div>
          <form
            onSubmit={handleAddReservation}
            className="mb-8 bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-500 rounded-md">
                  <FaUser className="ml-2 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReservation.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="mx-1 mt-1 block w-full h-10 rounded-md border-0 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-500 rounded-md">
                  <FaEnvelope className="ml-2 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newReservation.email}
                    onChange={handleInputChange}
                    required
                    placeholder="nature@gmail.com"
                    className="mx-1 mt-1 block w-full h-10 rounded-md border-0 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Guests <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-500 rounded-md">
                  <FaUsers className="ml-2 text-gray-500" />
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={newReservation.guests}
                    onChange={handleInputChange}
                    required
                    placeholder="0"
                    className="mx-1 mt-1 block w-full h-10 rounded-md border-0 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="tourName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Tour <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-500 rounded-md">
                  <FaMapMarkerAlt className="ml-2 text-gray-500" />
                  <select
                    id="tourName"
                    name="tourName"
                    value={newReservation.tourName}
                    onChange={handleInputChange}
                    required
                    className="mx-1 mt-1 block w-full h-10 rounded-md border-0 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                  >
                    <option value="">Select a tour</option>
                    {tours.map((tour) => (
                      <option key={tour.id} value={tour.name}>
                        {tour.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-700 mt-4">
              Total Price: ${totalPrice > 0 ? totalPrice.toFixed(2) : "0.00"}
            </h3>

            <button
              type="submit"
              className="mt-4 w-full bg-forest-green text-white py-2 rounded-md shadow hover:bg-misty-blue transition duration-200 ease-in-out"
            >
              Add Reservation
            </button>
          </form>
        </section>
      </Modal>
    </div>
  );
};

export default Reservations;
