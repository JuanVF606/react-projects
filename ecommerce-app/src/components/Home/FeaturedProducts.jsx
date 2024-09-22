import React from "react";
import { AiFillStar } from "react-icons/ai";
import useStore from "../../store/useStore";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { featuredProducts } = useStore();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform transform hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  ${product.price.toLocaleString("es-CL")}
                </p>
                <div className="flex items-center mb-4">
                  <AiFillStar className="text-yellow-500" />
                  <span className="ml-1 text-gray-500">4.5</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
