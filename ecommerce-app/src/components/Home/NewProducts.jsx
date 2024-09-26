import React from "react";
import useStore from "../../store/useStore";
import NewProductCard from "../common/NewProductCard"; // Asegúrate de importar el componente

const NewProducts = () => {
  const { newProducts } = useStore(); // Asumiendo que tienes un hook para nuevos productos

  // Muestra solo 3 nuevos productos
  const newProductsFilter = newProducts.slice(0, 3);

  return (
    <section className="py-16 bg-slate-200 rounded-xl">
      <div className="container mx-auto flex flex-col">
        {/* Contenedor para el título y tarjetas */}
        <div className="flex flex-col items-center mb-10">
          {/* Título */}
          <h2 className="text-5xl font-bold text-blue-600 mb-6 text-center">
            New Arrivals
          </h2>
          {/* Tarjetas de productos alineadas horizontalmente */}
          <div className="flex flex-wrap justify-center gap-8">
            {newProductsFilter.map((product) => (
              <div className="flex-shrink-0" key={product.id}>
                <NewProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
