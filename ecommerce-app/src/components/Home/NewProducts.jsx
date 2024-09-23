import React from "react";
import useStore from "../../store/useStore";
import NewProductCard from "../common/NewProductCard"; // Asegúrate de importar el componente

const NewProducts = () => {
  const { newProducts } = useStore(); // Asumiendo que tienes un hook para nuevos productos

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-600">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
