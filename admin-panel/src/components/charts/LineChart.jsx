// src/components/charts/LineChart.js
import React, { useEffect, useRef, memo } from 'react';
import { Chart } from 'chart.js/auto';

const LineChart = memo(({ labels, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext('2d');
    const chart = new Chart(chartCtx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true,
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

export default LineChart;
