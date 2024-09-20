// src/components/Layout.js
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUsers } from "react-icons/fa";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-sand-dollar">
      <aside className="bg-forest-green text-white w-full md:w-64 p-6 shadow-lg flex flex-col">
        <h2 className="text-3xl font-bold mb-8 text-center font-oswald bg-sand-dollar p-4 rounded-md shadow-md text-forest-green">
          Admin Panel <span className="text-sm block">v1.0</span>
        </h2>

        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 rounded-md transition duration-200 ${
                  location.pathname === "/dashboard"
                    ? "bg-misty-blue text-forest-green"
                    : "text-white hover:bg-misty-blue"
                }`}
              >
                <FaTachometerAlt className="mr-3 text-lg" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className={`flex items-center p-2 rounded-md transition duration-200 ${
                  location.pathname === "/users"
                    ? "bg-misty-blue text-forest-green"
                    : "text-white hover:bg-misty-blue"
                }`}
              >
                <FaUsers className="mr-3 text-lg" />
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="mt-auto">
          <p className="text-center text-sm">© 2024 Your Company</p>
        </footer>
      </aside>

      <div className="flex-grow p-6 overflow-y-auto">
        <header className="bg-white shadow-md p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-semibold text-forest-green font-oswald">
            Welcome to the Admin Dashboard
          </h1>
        </header>

        <main className="bg-white p-6 rounded-lg shadow-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
