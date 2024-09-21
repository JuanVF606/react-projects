// src/components/Layout.js
import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaSignOutAlt, FaClipboardList, FaComments } from "react-icons/fa";
import { toast } from "react-toastify";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      localStorage.removeItem("authToken");
      toast.success("You have successfully logged out.");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("An error occurred while trying to log out. Please try again.");
    }
  };

  const onLogoutClick = () => {
    handleLogout();
  };

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
            <li>
              <Link
                to="/tours"
                className={`flex items-center p-2 rounded-md transition duration-200 ${
                  location.pathname === "/tours"
                    ? "bg-misty-blue text-forest-green"
                    : "text-white hover:bg-misty-blue"
                }`}
              >
                <FaClipboardList className="mr-3 text-lg" />
                Tours
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className={`flex items-center p-2 rounded-md transition duration-200 ${
                  location.pathname === "/reservations"
                    ? "bg-misty-blue text-forest-green"
                    : "text-white hover:bg-misty-blue"
                }`}
              >
                <FaClipboardList className="mr-3 text-lg" />
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/feedbacks"
                className={`flex items-center p-2 rounded-md transition duration-200 ${
                  location.pathname === "/feedbacks"
                    ? "bg-misty-blue text-forest-green"
                    : "text-white hover:bg-misty-blue"
                }`}
              >
                <FaComments className="mr-3 text-lg" />
                Feedbacks
              </Link>
            </li>
          </ul>
        </nav>
        
        <button
          onClick={onLogoutClick}
          className="flex items-center mt-4 p-2 rounded-xl transition duration-200 text-white bg-red-600 hover:bg-red-700 text-center"
        >
          <FaSignOutAlt className="mr-2 text-lg" />
          Logout
        </button>
        
        <footer className="mt-6">
          <p className="text-center text-sm">© 2024 Your Nature Tours</p>
        </footer>
      </aside>

      <div className="flex-grow p-6 overflow-y-auto">
        <header className="bg-white shadow-md p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-semibold text-forest-green font-oswald">
            Welcome to the Nature Tours Admin Dashboard
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
