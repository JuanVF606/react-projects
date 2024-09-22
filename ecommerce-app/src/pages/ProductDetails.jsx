import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../store/useStore";
import useCartStore from "../store/useCartStore";
import { toast } from "react-toastify";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useStore();
  const {addToCart} = useCartStore();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-16 text-lg">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="container mx-auto  p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/4 rounded-lg shadow-lg mb-6 md:mb-0 transition-transform transform hover:scale-105"
        />
        <div className="md:ml-8 flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product.price.toLocaleString("es-CL")}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Features</h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Feature</th>
              <th className="py-2 px-4 border-b">Detail</th>
            </tr>
          </thead>
          <tbody>
            {product.features.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {feature.name}
                </td>
                <td className="py-2 px-4 border-b">{feature.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>
        {product.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {product.reviews.map((review, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className="mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </span>
                <strong>{review.name}:</strong> {review.feedback}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Similar Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((similarProduct) => (
            <div
              key={similarProduct.id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={similarProduct.image}
                alt={similarProduct.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">{similarProduct.name}</h4>
              <p className="text-gray-600 mb-1">
                ${similarProduct.price.toLocaleString("es-CL")}
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/products/${similarProduct.id}`;
                }
              }
                className="bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-full mr-2"
              >
                Details
              </button>

              <button
                onClick={() => addToCart(similarProduct)}
                className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-full transition-transform transform hover:scale-105 flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
