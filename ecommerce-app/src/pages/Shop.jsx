import React, { useState, useEffect } from "react";
import useStore from "../store/useStore";
import NewProductCard from "../components/common/NewProductCard";
import FilterSidebar from "../components/Products/FilterSidebar";
import Pagination from "../components/Products/Pagination";

const Shop = () => {


  const { products } = useStore();
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, maxPrice]); // Ajustar según los precios
  const itemsPerPage = 12;

  const totalItems = filteredProducts.length;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 
  // Obtener categorías únicas a partir de los productos
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filtered = products;

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      if (searchTerm !== "") {
        filtered = filtered.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filtrar por rango de precios
      filtered = filtered.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      setFilteredProducts(filtered);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory, products, priceRange]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Resetear a la primera página al cambiar la categoría
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-64 bg-cover bg-center flex items-center justify-center text-center rounded-lg mb-6" 
           style={{ backgroundImage: `url('https://img.freepik.com/foto-gratis/mujer-caminando-bolsas-papel_23-2147669701.jpg?t=st=1727123534~exp=1727127134~hmac=f20861becec10b45a09ca457ab5ca92583a5b9b6fb8ffa0a87bc98de18a2f1b1&w=1380')` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-2">Discover Amazing Products</h1>
          <p className="text-xl text-white">Find everything you need right here.</p>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          minPrice={minPrice}  // Enviar el precio mínimo
          maxPrice={maxPrice}  // Enviar el precio máximo
          priceRange={priceRange}
          setPriceRange={setPriceRange}  // Función para actualizar el rango de precios
        />

        {/* Contenido principal */}
        <div className="flex-1 mx-6 p-6 bg-gray-100 rounded-lg shadow-lg">
          {/* Productos filtrados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <NewProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products found.
              </div>
            )}
          </div>

          {/* Paginación */}
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />

          {/* Contador de productos */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">Total Products: {totalItems}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
