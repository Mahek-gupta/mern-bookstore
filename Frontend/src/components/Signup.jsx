// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Validate form
//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email";
//     if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     return newErrors;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length === 0) {
//       alert("Signup Successful ✅");
//       console.log("Form Data:", formData);
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Create Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password}</p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 font-medium hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4001/user/signup", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Signup Successfully");
//           navigate(from, { replace: true });
//         }
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//         }
//       });
//   };
//   return (
//     <>
//       <div className="flex h-screen items-center justify-center">
//         <div className=" w-[600px] ">
//           <div className="modal-box">
//             <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </Link>

//               <h3 className="font-bold text-lg">Signup</h3>
//               <div className="mt-4 space-y-2">
//                 <span>Name</span>
//                 <br />
//                 <input
//                   type="text"
//                   placeholder="Enter your fullname"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("fullname", { required: true })}
//                 />
//                 <br />
//                 {errors.fullname && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Email */}
//               <div className="mt-4 space-y-2">
//                 <span>Email</span>
//                 <br />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("email", { required: true })}
//                 />
//                 <br />
//                 {errors.email && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Password */}
//               <div className="mt-4 space-y-2">
//                 <span>Password</span>
//                 <br />
//                 <input
//                   type="text"
//                   placeholder="Enter your password"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("password", { required: true })}
//                 />
//                 <br />
//                 {errors.password && (
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* Button */}
//               <div className="flex justify-around mt-4">
//                 <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                   Signup
//                 </button>
//                 <p className="text-xl">
//                   Have account?{" "}
//                   <button
//                     className="underline text-blue-500 cursor-pointer"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Login
//                   </button>{" "}
//                   <Login />
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;



// import React, { useEffect, useState } from 'react';
// import {  NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from '../utils';

// const Signup = () => {
//   const [signupInfo, setSignupInfo] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();
//   useEffect(() => {
//     console.log(signupInfo);
//   }, [signupInfo]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignupInfo({ ...signupInfo, [name]: value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = signupInfo;

//     if (!name || !email || !password) {
//       return handleError("Name, email, and password are required");
//     }

//     try {
//       const url = "http://localhost:8080/author/signup";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(signupInfo)
//       });

//       const result = await response.json();
//       const {success, message, error} = result
//       if(success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/login")
//         }, 1000)
//       }else if (error){
//         const details = error?.details[0].message;
//         handleError(details)
//       }
//       else if(!success){
//         handleError(message)
//       }
//       console.log(result);
//     } catch (err) {
//       handleError(err.message || "Signup failed");
//     }
//   };

//   return (
//     <div className='container'>
//       <h1>Signup</h1>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label htmlFor='name'>Name</label>
//           <input id="name" onChange={handleChange} type="text" name="name" placeholder='Enter your name' autoFocus />
//         </div>
//         <div>
//           <label htmlFor='email'>Email</label>
//           <input id="email" onChange={handleChange} type="email" name="email" placeholder='Enter your email' />
//         </div>
//         <div>
//           <label htmlFor='password'>Password</label>
//           <input id="password" onChange={handleChange} type="password" name="password" placeholder='Enter your password' />
//         </div>

//         <button type="submit">Signup</button>
//         <span>Already have an account? </span>
//         <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>
//           Login
//         </NavLink>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;



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
      const url = "http://localhost:8080/author/signup";
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
