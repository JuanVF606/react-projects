import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Banner from "../components/Home/Banner";
import CustomerSays from "../components/Home/CustomerSays";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner /> {/* Componente del Banner Principal */}
      <FeaturedProducts /> {/* Componente de Productos Destacados */}
      <CustomerSays /> {/* Componente de Testimonios de Clientes */}


      {/* Sección de Llamado a la Acción */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community!</h2>
          <p className="mb-6">
            Subscribe to our newsletter to receive the latest updates and
            special offers.
          </p>
          <Link
            to="/subscribe"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
