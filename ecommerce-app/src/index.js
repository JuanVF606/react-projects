import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CurrencyProvider } from "./context/Currency";
import { ShippingProvider } from "./context/ShippingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShippingProvider>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ShippingProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true} // Ocultar la barra de progreso para un diseño más limpio
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored" // Usar tema de color para que se vea más atractivo
    />
  </React.StrictMode>
);
