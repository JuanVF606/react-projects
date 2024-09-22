import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <>
     {/* Sección del Banner Principal */}
     <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
        <img
          src="https://img.freepik.com/foto-gratis/tienda-ropa-efecto-borroso_23-2148164688.jpg?t=st=1727025903~exp=1727029503~hmac=c0282b666f06c1968860bcbaa28a4723fb8afe74f78822510b0e665527b2a4d0&w=1380"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Welcome to VividStore
          </h1>
          <p className="text-lg mb-6 animate__animated animate__fadeIn">
            Your one-stop shop for amazing products!
          </p>
          <Link
            to="/shop"
            className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl animate__animated animate__bounce"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default Banner