// src/components/UserManagement.js
import React, { useContext, useState, useEffect } from "react";
import { TourContext } from "../context/TourContext";
import { toast } from "react-toastify";

const UserManagement = () => {
  const { reservations, tours } = useContext(TourContext);
  const [selectedTour, setSelectedTour] = useState("");
  const [message, setMessage] = useState("");
  const [messageTemplate, setMessageTemplate] = useState("reminder");
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("");

  const messageTemplates = {
    reminder: "This is a reminder that your tour starts in X minutes. Please make sure to arrive on time!",
    survey: "We hope you enjoyed your recent tour! Please take a moment to complete our satisfaction survey.",
  };

  const getNextTour = () => {
    const upcomingTours = tours.filter(tour => new Date(tour.date) > new Date());
    return upcomingTours.length > 0 ? upcomingTours[0] : null;
  };

  const handleSendReminder = (e) => {
    e.preventDefault();
    if (!selectedTour || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const participants = reservations
      .filter(reservation => reservation.tourName === selectedTour)
      .map(reservation => reservation.email);

    if (participants.length === 0) {
      toast.error("No participants found for this tour.");
      return;
    }

    participants.forEach(email => {
      console.log(`Sending reminder to ${email}: ${message}`);
    });
    toast.success(`Reminders sent successfully to ${participants.length} participants!`);

    setHistory((prev) => [
      ...prev,
      { tourName: selectedTour, message, date: new Date(), participants },
    ]);

    setSelectedTour("");
    setMessage("");
  };

  const handleTemplateChange = (e) => {
    const template = e.target.value;
    setMessageTemplate(template);
    setMessage(messageTemplates[template]);
  };

  const nextTour = getNextTour();

  const filteredHistory = history.filter(entry => 
    entry.tourName.toLowerCase().includes(filter.toLowerCase())
  );

  // Actualizar el mensaje automáticamente al seleccionar un template
  useEffect(() => {
    setMessage(messageTemplates[messageTemplate]);
  }, [messageTemplate]);

  return (
    <div className="container mx-auto p-6">
      {/* Tarjeta del Próximo Tour */}
      {nextTour && (
        <div className="flex justify-center mb-4">
          <div className="flex rounded-lg bg-sand-dollar text-forest-green shadow-lg">
            <div className="relative overflow-hidden">
              <img
                className="h-48 w-48 rounded-l-lg object-cover"
                src={nextTour.image}
                alt={nextTour.name}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-forest-green uppercase tracking-wide animate-pulse bg-white inline-block px-2 py-1 rounded-lg shadow-lg border border-gray-200">Upcoming Tour</h2>
              <p><strong>Name:</strong> {nextTour.name}</p>
              <p><strong>Date:</strong> {new Date(nextTour.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {nextTour.location}</p>
              <p><strong>Description:</strong> {nextTour.description}</p>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4 text-forest-green">User Management</h2>

      <form onSubmit={handleSendReminder} className="mb-4 p-6 rounded-lg shadow-lg bg-white border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tourName" className="block text-sm font-medium text-gray-700">Select Tour <span className="text-red-500">*</span></label>
            <select
              id="tourName"
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              required
              className="mt-1 block w-full h-10 rounded-md border-gray-300 focus:border-forest-green focus:ring-forest-green transition duration-200"
            >
              <option value="">Select a tour</option>
              {tours.map((tour) => (
                <option key={tour.id} value={tour.name}>{tour.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message here..."
              className="mt-1 block w-full h-20 rounded-md border-gray-300 focus:border-forest-green focus:ring-forest-green transition duration-200"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="template" className="block text-sm font-medium text-gray-700">Select Message Template</label>
          <select
            id="template"
            value={messageTemplate}
            onChange={handleTemplateChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 focus:border-forest-green focus:ring-forest-green transition duration-200"
          >
            <option value="reminder">Tour Reminder</option>
            <option value="survey">Satisfaction Survey</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-forest-green text-white py-2 rounded-md shadow hover:bg-emphasis transition duration-200 ease-in-out"
        >
          Send Reminder
        </button>
      </form>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Sent Reminders History</h3>
      <input
        type="text"
        placeholder="Filter by tour name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mt-2 mb-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <div className="grid grid-cols-1 gap-4">
        {filteredHistory.map((entry, index) => (
          <div key={index} className="p-4 rounded-lg bg-white shadow-md border border-gray-200">
            <h4 className="font-bold text-gray-800">{entry.tourName}</h4>
            <p className="text-sm text-gray-600">{entry.date.toLocaleString()}</p>
            <p className="mt-2">{entry.message}</p>
            <p className="mt-2"><strong>Participants:</strong> {entry.participants.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
