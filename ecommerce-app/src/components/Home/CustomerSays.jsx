import React from "react";
import useStore from "../../store/useStore";

const Testimonials = () => {
  const { testimonials } = useStore();

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 mx-4 mb-4 transition-transform transform hover:scale-105"
            >
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <p className="font-semibold mt-4">- {testimonial.name}</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                  <span key={index} className="text-gray-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
