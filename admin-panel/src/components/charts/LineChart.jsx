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
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true,
            tension: 0.3, // Suaviza las líneas
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000, // Duración de la animación
            easing: 'easeInOutQuad', // Suaviza el inicio y el final
            from: 1, // Desde líneas rectas
            to: 0.3, // A líneas más suaves
            loop: false,
          },
        },
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
