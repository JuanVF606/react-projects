import React, { useMemo } from "react";
import ProductCard from "../common/NewProductCard"; // Asegúrate de importar el componente correcto
import useDiscountStore from "../../store/useDiscountStore";
import CountdownTimer from "../common/CountDownTimer";

const DiscountedProducts = () => {
  const { limitedProducts } = useDiscountStore();

  // Solo obtener hasta 3 productos limitados
  const discountedProducts = useMemo(() => {
    return limitedProducts.slice(0, 3);
  }, [limitedProducts]);

  const promoEndDate = new Date("2024-09-25T23:59:59");

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-600">
          Limited Time Discounts!
        </h2>
        <CountdownTimer endDate={promoEndDate} title={"Hurry up! Offer ends in:"} />
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-40 mt-10 mb-5">
          {discountedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product} // Pasa el producto al componente ProductCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountedProducts;
