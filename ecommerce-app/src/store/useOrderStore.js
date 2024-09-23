// src/store/orderStore.js
import { create } from "zustand";

const useOrderStore = create((set, get) => ({
  orders: JSON.parse(localStorage.getItem('orders')) || [], // Cargar órdenes del localStorage

  addOrder: (order) => {
    const newOrder = { ...order, id: Date.now() }; // Generar un ID único basado en el timestamp
    const updatedOrders = [...get().orders, newOrder];
    set({ orders: updatedOrders });
    localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Guardar en localStorage
  },

  clearOrders: () => {
    set({ orders: [] });
    localStorage.removeItem('orders'); // Limpiar localStorage
  },

  getOrderById: (id) => {
    return get().orders.find(order => order.id === id); // Buscar una orden por ID
  },
}));

export default useOrderStore;
