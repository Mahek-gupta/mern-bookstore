




import React, { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || "Guest");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const fetchProducts = async () => {
    try {
      const url = 'http://localhost:8080/products/pro';
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      handleError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔍 Filtered products by search, category, and price
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchMinPrice = minPrice === '' || p.price >= Number(minPrice);
    const matchMaxPrice = maxPrice === '' || p.price <= Number(maxPrice);
    return matchSearch && matchCategory && matchMinPrice && matchMaxPrice;
  });

  // 🏷 Unique categories from products
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-indigo-600">📚 Book Store</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Welcome, {loggedInUser}</span>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Price Range */}
        <div className="flex gap-2 w-full md:w-1/3">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Products */}
      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Books</h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No books match your search or filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-40 object-cover rounded-md mb-3" 
                />
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-indigo-600 font-bold mt-2">₹{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
