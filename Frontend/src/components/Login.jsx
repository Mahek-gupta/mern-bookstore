// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4001/user/login", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success("Loggedin Successfully");
//           document.getElementById("my_modal_3").close();
//           setTimeout(() => {
//             window.location.reload();
//             localStorage.setItem("Users", JSON.stringify(res.data.user));
//           }, 1000);
//         }
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);
//           toast.error("Error: " + err.response.data.message);
//           setTimeout(() => {}, 2000);
//         }
//       });
//   };
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_3").close()}
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Login</h3>
//             {/* Email */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//               <br />
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             {/* password */}
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//               <br />
//               {errors.password && (
//                 <span className="text-sm text-red-500">
//                   This field is required
//                 </span>
//               )}
//             </div>

//             {/* Button */}
//             <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link
//                   to="/signup"
//                   className="underline text-blue-500 cursor-pointer"
//                 >
//                   Signup
//                 </Link>{" "}
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;


// import React, { useEffect, useState } from 'react';
// import {  NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from '../utils';

// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();
//   useEffect(() => {
//     console.log(loginInfo);
//   }, [loginInfo]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo({ ...loginInfo, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     if ( !email || !password) {
//       return handleError("Name, email, and password are required");
//     }

//     try {
//       const url = "http://localhost:8080/author/login";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       });

//       const result = await response.json();
//       const {success, message,jwtToken,name, error} = result
//       if(success) {
//         handleSuccess(message);
//         localStorage.setItem('token',jwtToken)
//         localStorage.setItem('loggedInUser', name)
//         setTimeout(() => {
//           navigate("/home")
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
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
       
//         <div>
//           <label htmlFor='email'>Email</label>
//           <input id="email" onChange={handleChange} type="email" name="email" placeholder='Enter your email' />
//         </div>
//         <div>
//           <label htmlFor='password'>Password</label>
//           <input id="password" onChange={handleChange} type="password" name="password" placeholder='Enter your password' />
//         </div>

//         <button type="submit">Login</button>
//         <span>Does't have an account? </span>
//         <NavLink to="/signup" className={({ isActive }) => isActive ? "active-link" : ""}>
//           Signup
//         </NavLink>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;



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
      const url = "http://localhost:8080/author/login";
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
