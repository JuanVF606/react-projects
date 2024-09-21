// src/components/Tours.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { useTable, usePagination } from "react-table";
import { TourContext } from "../context/TourContext";
import Modal from "../components/Modal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Asegúrate de que el ícono del marcador de Leaflet se muestre correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Tours = () => {
  const { addTour, tours } = useContext(TourContext);
  const [tourData, setTourData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const pageCount = Math.ceil(tours.length / 10);
  const handleAddTour = async (e) => {
    e.preventDefault();
    const { name, description, date, location, price } = tourData;

    if (!name || !description || !date || !location || !price) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: { q: location, format: "json" },
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        addTour({ ...tourData, coordinates: [lat, lon], price: parseFloat(price) });
        setMessage("Tour added successfully!");
      } else {
        setMessage("Location not found. Please check the address.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setMessage("Could not fetch location. Please try again.");
    } finally {
      setLoading(false);
      setTourData({ name: "", description: "", date: "", location: "", price: "" });
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Configuración de la tabla
  const data = React.useMemo(() => tours, [tours]);
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Location', accessor: 'location' },
      { Header: 'Price', accessor: 'price', Cell: ({ value }) => `$${value.toFixed(2)}` },
      {
        Header: 'Map',
        accessor: 'coordinates',
        Cell: ({ value }) => (
          <button
            className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
            onClick={() => setSelectedTour(value)}
          >
            View Map
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="container mx-auto my-6 p-4">
      <div className="relative mb-6">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-tiro-medio-explorando-mapa_23-2149212371.jpg?t=st=1726881469~exp=1726885069~hmac=354f1d7a27cf0cb41bc39629d67157258fe3d78e89c0d0f28ac2eabba6485ae5&w=1380"
          alt="Explorando mapa"
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50">
          Add a New Tour
        </h2>
      </div>

      <form onSubmit={handleAddTour} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["name", "date", "description", "location", "price"].map((field, index) => (
            <div key={index} className="mt-4">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-500">*</span>
              </label>
              {field === "description" ? (
                <textarea
                  id={field}
                  name={field}
                  value={tourData[field]}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                />
              ) : (
                <input
                  type={field === "date" ? "date" : "text"}
                  id={field}
                  name={field}
                  value={tourData[field]}
                  onChange={handleInputChange}
                  required
                  min={field === "date" ? today : undefined}
                  className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-forest-green focus:ring-forest-green sm:text-sm transition duration-200"
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-forest-green text-white py-2 rounded-md shadow-lg hover:bg-emphasis transition duration-200"
        >
          {loading ? "Loading..." : "Add Tour"}
        </button>
        {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
      </form>

      <button
        onClick={toggleModal}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
      >
        View Tours
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <h2 className="text-xl font-bold mb-4">Created Tours</h2>
          <div className="overflow-x-auto">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 border border-gray-300">
              <thead className="bg-gray-100">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-50 transition-colors duration-200">
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-300">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="mt-4 flex justify-between">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>
              <button onClick={previousPage} disabled={!canPreviousPage}>
                {'<'}
              </button>
              <button onClick={nextPage} disabled={!canNextPage}>
                {'>'}
              </button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>
            </div>
          </div>

          {selectedTour && (
            <MapContainer center={selectedTour} zoom={13} className="mt-4" style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={selectedTour}>
                <Popup>
                  Tour Location: {selectedTour[0]}, {selectedTour[1]}
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Tours;
