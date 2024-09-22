import React from "react";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Banner from "../components/Home/Banner";
import CustomerSays from "../components/Home/CustomerSays";
import CallToAction from "../components/common/CallToAction";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner /> {/* Componente del Banner Principal */}
      <FeaturedProducts /> {/* Componente de Productos Destacados */}
      <CustomerSays /> {/* Componente de Testimonios de Clientes */}
      <CallToAction
        title="Join Our Community!"
        description="Subscribe to our newsletter to receive the latest updates and special offers."
        href="/subscribe"
        action="Subscribe Now"
      /> {/* Componente de Llamado a la Acción */}
    </div>
  );
};

export default Home;
