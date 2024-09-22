import React from "react";
import { Link } from "react-router-dom";
const CallToAction = ({title, description, href, action}) => {
  return (
    <div>
      {" "}
      {/* Sección de Llamado a la Acción */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6">
            {description}
          </p>
          <Link
            to={href}
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            {action}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
