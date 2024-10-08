import React from "react";
import useStore from "../../store/useStore";
import NewProductCard from "../common/NewProductCard"; // Asegúrate de importar el componente

const FeaturedProducts = () => {
  const { featuredProducts } = useStore();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">Featured Products</h2>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {featuredProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
