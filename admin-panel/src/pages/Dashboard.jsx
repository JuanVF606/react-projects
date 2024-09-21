// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import SummaryCards from '../components/cards/SummaryCard';
import Charts from '../components/Charts';
import { FaTree, FaUsers, FaTicketAlt, FaComments } from 'react-icons/fa';

const toursCount = 25; // Total de tours disponibles
const reservationsCount = 150; // Total de reservas
const customersCount = 200; // Total de clientes
const feedbackCount = 75; // Total de comentarios

const userLabels = ['January', 'February', 'March', 'April', 'May'];
const userData = [50, 100, 75, 125, 150];
const salesLabels = ['January', 'February', 'March', 'April', 'May'];
const salesData = [200, 300, 400, 500, 600];

function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-forest-green mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCards title="Total Tours" value={toursCount} icon={<FaTree />} />
        <SummaryCards title="Total Reservations" value={reservationsCount} icon={<FaTicketAlt />} />
        <SummaryCards title="Total Customers" value={customersCount} icon={<FaUsers />} />
        <SummaryCards title="Total Feedback" value={feedbackCount} icon={<FaComments />} />
      </div>
      <section className="mt-10">
        <Charts userLabels={userLabels} userData={userData} salesLabels={salesLabels} salesData={salesData} />
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
