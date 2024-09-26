// src/components/UnderConstruction.js
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 relative">
      <img 
        src="https://img.freepik.com/foto-gratis/fondo-textura-hoja-verde_501050-120.jpg?t=st=1726890740~exp=1726894340~hmac=6706b74aa9e089b6a37ed760b4036716eddc36ee5d3ad9341f1ad04f973965b9&w=1380"
        alt="Nature Background"
        className="absolute inset-0 w-full  object-cover opacity-60 min-h-screen"
      />
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-center border border-green-300 relative z-10 w-full  max-w-lg mx-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">Nature Tours - Under Construction</h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          We're working hard to get this page ready for you. Stay tuned for exciting nature adventures!
        </p>
        <img
          src="https://img.freepik.com/vector-gratis/senal-advertencia-palabra-advertencia_78370-4060.jpg?t=st=1726890825~exp=1726894425~hmac=ffac88bbd6047060c7da996957a98ee8450ef2ffc5bf4201bfa62b50ce3ba70e&w=1380"
          alt="Under Construction"
          className="w-2/3 md:w-1/2 mx-auto mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">
          Thank you for your patience and understanding!
        </p>
        
      </div>
    </div>
  );
};

export default UnderConstruction;
