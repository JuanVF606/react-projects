import React from "react";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Banner from "../components/Home/Banner";
import CustomerSays from "../components/Home/CustomerSays";
import CallToAction from "../components/common/CallToAction";
import NewProducts from "../components/Home/NewProducts";
import DiscountedProducts from "../components/Home/DiscountedProducts";
import { motion } from "framer-motion"; // Importar Framer Motion para animaciones

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Contenedor principal con fondo suave */}
      <div className="bg-gradient-to-b from-white to-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Banner /> {/* Componente del Banner Principal */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <NewProducts /> {/* Componente de Nuevos Productos */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DiscountedProducts /> {/* Componente de Productos en Descuento */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FeaturedProducts /> {/* Componente de Productos Destacados */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CustomerSays /> {/* Componente de Testimonios de Clientes */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <CallToAction
          title="Join Our Community!"
          description="Subscribe to our newsletter to receive the latest updates and special offers."
          href="/subscribe"
          action="Subscribe Now"
        />{" "}
        {/* Componente de Llamado a la Acción */}
      </motion.div>
    </div>
  );
};

export default Home;
