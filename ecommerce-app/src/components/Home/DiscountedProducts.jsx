import React, { useEffect, useState } from "react";
import { useCurrency } from "../../context/Currency";
import NewProductCard from "../common/NewProductCard";
import useDiscountStore from "../../store/useDiscountStore"; // Importar la tienda de descuentos

const DiscountedProducts = () => {
  const { limitedProducts, getLimitedDiscountedPrice } = useDiscountStore();
  const { formatPriceToCLP } = useCurrency();
  const [timeLeft, setTimeLeft] = useState({});
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    setDiscountedProducts(limitedProducts); // Obtener productos limitados
  }, [limitedProducts]);

  useEffect(() => {
    const promoEndDate = new Date("2024-09-25T23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = promoEndDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-600">
          Limited Time Discounts!
        </h2>
        <div className="mb-6 container">
          <p className="text-xl font-semibold">Hurry up! Offer ends in:</p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.days || 0}</span>
              <span className="text-sm text-gray-500">Days</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">{timeLeft.hours || 0}</span>
              <span className="text-sm text-gray-500">Hours</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">
                {timeLeft.minutes || 0}
              </span>
              <span className="text-sm text-gray-500">Minutes</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">
                {timeLeft.seconds || 0}
              </span>
              <span className="text-sm text-gray-500">Seconds</span>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-40 mt-10 mb-5">
          {discountedProducts.map((product) => {
            const discountedPrice = getLimitedDiscountedPrice(
              product.id,
              product.price
            );

            return (
              <NewProductCard
                key={product.id}
                product={product}
                discountedPrice={discountedPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscountedProducts;
