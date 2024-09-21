// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SummaryCards from '../components/cards/SummaryCard';
import Charts from '../components/Charts';
import { FaTree, FaUsers, FaTicketAlt, FaComments } from 'react-icons/fa';
import { TourContext } from '../context/TourContext';

function Dashboard() {
  const { reservations, tours } = useContext(TourContext);
  
  const toursCount = tours.length; // Total de tours disponibles
  const reservationsCount = reservations.length; // Total de reservas
  const totalGuests = reservations.reduce((acc, { guests }) => acc + guests, 0); // Total de huéspedes
  const feedbackCount = 75; // Total de comentarios (ajusta si es necesario)

  // Inicializa las variables para contar tours y ventas por mes
  const monthCounts = Array(12).fill(0);
  const salesData = Array(12).fill(0); 

  // Itera sobre las reservas una sola vez para calcular ambos valores
  reservations.forEach(({ tourId, guests }) => {
    const tour = tours.find(t => t.id === tourId);
    if (tour) {
      const month = new Date(tour.date).getMonth();
      monthCounts[month] += 1; // Incrementa el contador de tours
      salesData[month] += guests * tour.price; // Total de ventas por mes
    }
  });

  const userLabels = [
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 
    'November', 'December'
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-forest-green mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCards title="Total Tours" value={toursCount} icon={<FaTree />} />
        <SummaryCards title="Total Reservations" value={reservationsCount} icon={<FaTicketAlt />} />
        <SummaryCards title="Total Guests" value={totalGuests} icon={<FaUsers />} />
        <SummaryCards title="Total Feedback" value={feedbackCount} icon={<FaComments />} />
        <SummaryCards title="Total Sales $" value={salesData.reduce((acc, curr) => acc + curr, 0)} icon={<FaTicketAlt />} />
      </div>
      <section className="mt-10">
        <Charts 
          userLabels={userLabels} 
          userData={monthCounts} // Tours por mes
          salesLabels={userLabels} 
          salesData={salesData} // Ventas por mes
        />
      </section>
      <div className="mt-10">
        <Link to="/tours" className="text-lg text-blue-600 hover:underline transition duration-200">
          View all tours
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
