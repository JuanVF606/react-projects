import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
      {/* Imagen de fondo con opacidad */}
      <img
        src="https://img.freepik.com/foto-gratis/tienda-ropa-efecto-borroso_23-2148164688.jpg?t=st=1727025903~exp=1727029503~hmac=c0282b666f06c1968860bcbaa28a4723fb8afe74f78822510b0e665527b2a4d0&w=1380"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="container mx-auto relative z-10 text-center">
        {/* Título con animación */}
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Welcome to VividStore
        </h1>
        {/* Descripción */}
        <p className="text-xl mb-6 animate__animated animate__fadeInUp">
          Your one-stop shop for amazing products!
        </p>
        {/* Botón con efectos hover */}
        <Link
          to="/shop"
          className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__pulse"
        >
          Shop Now
        </Link>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,288L1440,224L1440,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
