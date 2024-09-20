// src/components/charts/BarChart.js
import React, { useEffect, useRef, memo } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = memo(({ labels, data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chartCtx = chartRef.current.getContext('2d');
    const chart = new Chart(chartCtx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'New Users',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy(); // Limpiar el gráfico al desmontar
    };
  }, [labels, data]);

  return <canvas ref={chartRef} className="w-full h-72"></canvas>;
});

export default BarChart;
