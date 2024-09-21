// src/components/Charts.js
import React from 'react';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';

const Charts = ({ userLabels, userData, salesLabels, salesData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-sand-dollar p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-forest-green text-center">User Statistics</h2>
        <div className="flex-grow">
          <BarChart labels={userLabels} data={userData} />
        </div>
      </div>
      <div className="bg-sand-dollar p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 text-forest-green text-center">Sales Overview</h2>
        <div className="flex-grow">
          <LineChart labels={salesLabels} data={salesData} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
