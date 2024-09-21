// src/components/charts/BarChart.js
import React, { useEffect, useRef, memo } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-plugin-datalabels';

Chart.register(...registerables);

const BarChart = memo(({ labels, data, title }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chartCtx = chartRef.current.getContext('2d');
    const chart = new Chart(chartCtx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Visitors',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            barThickness: 30, // Ancho de las barras
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
            hoverBorderColor: 'rgba(54, 162, 235, 1)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          title: {
            display: true,
            text: title,
            font: {
              size: 18,
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: '#fff',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5, // Ajusta el tamaño de los pasos
            },
          },
        },
      },
    });

    return () => {
      chart.destroy(); // Limpiar el gráfico al desmontar
    };
  }, [labels, data, title]);

  return <canvas ref={chartRef} className="w-full h-72"></canvas>;
});

export default BarChart;
