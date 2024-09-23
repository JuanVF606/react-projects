import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar"; // Navbar importado
import Footer from "./components/navigation/Footer"; // Footer importado
import Home from "./pages/Home"; // Página de inicio importada
import ProductDetails from "./pages/ProductDetails"; // Página de detalles de producto importada
import Shop from "./pages/Shop"; // Página de tienda importada
import Cart from "./pages/Cart"; // Página de carrito importada
import OrderConfirmation from "./pages/OrderConfirmation";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-grow my-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
