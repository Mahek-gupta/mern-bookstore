
import React, {  useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }

    try {
     const url = "https://mern-bookstore-backend1.onrender.com/author/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/login"), 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white-50 via-purple-50 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black text-center mb-6">Create Account</h1>
        
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input 
              id="name" 
              onChange={handleChange} 
              type="text" 
              name="name" 
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              autoFocus 
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input 
              id="email" 
              onChange={handleChange} 
              type="email" 
              name="email" 
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold shadow-md transition"
          >
            Signup
          </button>
        </form>

        <p className="mt-6 text-center text-black">
          Already have an account?{" "}
          <NavLink 
            to="/login" 
            className="text-blue-800 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
