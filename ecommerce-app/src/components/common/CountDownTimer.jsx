// CountdownTimer.js
import React, { useEffect, useState } from "react";

const CountdownTimer = ({ endDate, title }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="mb-6">
      <p className="text-xl font-semibold">{title}</p>
      <div className="flex justify-center space-x-8">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div className="text-center" key={index}>
            <span className="text-3xl font-bold">{timeLeft[unit] || 0}</span>
            <span className="text-sm text-gray-500">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
