import React, { useState, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import { useCurrency } from "../../context/Currency"; // Importa el hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCartStore();
  const { formatPriceToCLP } = useCurrency(); // Usa el hook para obtener la función de formateo
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md border-b-2 border-blue-600"
          : "bg-transparent"
      } p-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">VividStore</Link>
        </div>

        {/* Enlaces de navegación */}
        <ul className="hidden md:flex space-x-4">
          {["/", "/shop"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive(path)
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "text-black hover:bg-yellow-400 hover:text-gray-900"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ícono del carrito */}
        <div className="relative flex items-center">
          <Link to="/cart" className="relative flex items-center">
            <AiOutlineShoppingCart className="text-2xl cursor-pointer transition-transform duration-200 hover:scale-110" />
            {cart.length > 0 && (
              <span className="ml-2 text-sm font-semibold text-gray-800">
                TOTAL: {formatPriceToCLP(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                )}
              </span>
            )}
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Menú mobile - Visible solo en dispositivos pequeños */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-blue-600 rounded-2xl p-4 shadow-lg">
          {["/", "/shop", "/about", "/cart"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  isActive(path)
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "text-white hover:bg-yellow-400 hover:text-gray-900"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
