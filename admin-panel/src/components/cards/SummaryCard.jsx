// src/components/SummaryCard.js
import React, { useEffect, useState } from "react";
import anime from "animejs";

const SummaryCard = ({ title, value, icon }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const duration = 2000; // Duración de la animación en ms

  useEffect(() => {
    if (displayValue !== value) {
      const start = displayValue; // Valor actual
      const end = value; // Valor nuevo

      // Configuración de la animación
      const animatedValue = { value: start }; // Objeto para animar

      anime({
        targets: animatedValue,
        value: end,
        duration,
        easing: 'linear',
        update: () => {
          setDisplayValue(Math.round(animatedValue.value)); // Actualiza el estado con el valor animado
        },
      });
    }
  }, [value, displayValue]);

  const getDirectionSymbol = () => {
    if (value > displayValue) return "↑"; // Incremento
    if (value < displayValue) return "↓"; // Decremento
    return ""; // Sin cambio
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 duration-300 border-l-4 border-blue-300">
      <div className="text-4xl text-white mr-4">{icon}</div>
      <div className="text-white">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="flex items-center">
          <p className="text-3xl font-extrabold">
            {displayValue < 0 ? "-" : ""}{Math.abs(displayValue).toLocaleString()}
          </p>
          <span className={`text-lg ml-2 ${value > displayValue ? "text-green-400" : "text-red-400"}`}>
            {getDirectionSymbol()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
