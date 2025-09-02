

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginInfo);
  }, [loginInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const url = "https://mern-bookstore-backend1.onrender.com/author/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => navigate("/home"), 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-pink-100 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input
              id="email"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              id="password"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold shadow-md transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-black">
          Doesn't have an account?{" "}
          <NavLink
            to="/signup"
            className="text-blue-800 font-semibold hover:underline"
          >
            Signup
          </NavLink>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
