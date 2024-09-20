// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import SummaryCard from '../components/cards/SummaryCard';
import Charts from '../components/Charts';
import { FaUser, FaDollarSign } from 'react-icons/fa';

const userCount = 125; // Ejemplo
const salesCount = 1500; // Ejemplo
const userLabels = ['January', 'February', 'March', 'April', 'May'];
const userData = [50, 100, 75, 125, 150];
const salesLabels = ['January', 'February', 'March', 'April', 'May'];
const salesData = [200, 300, 400, 500, 600];

function Dashboard() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-forest-green mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="User Count" value={userCount} icon={<FaUser />} />
        <SummaryCard title="CLP Sales Count" value={salesCount} icon={<FaDollarSign />} />
        {/* Agrega más tarjetas aquí si es necesario */}
      </div>
      <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-forest-green mb-4">Analytics Overview</h2>
        <Charts userLabels={userLabels} userData={userData} salesLabels={salesLabels} salesData={salesData} />
      </section>
      <div className="mt-10 text-center">
        <Link to="/users" className="text-lg text-blue-600 hover:underline transition duration-200">
          View all users
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
