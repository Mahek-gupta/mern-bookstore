// import React from 'react'
// import img from "../assets/book.jpg"
// import img2 from "../assets/booklogo.jpg"
// import hat from "../assets/hat.jpg"
// import cal from "../assets/vecteezy_3d-minimal-calculator-render-concept-of-financial_9315257.png"

// const Hero = () => {
//   return (
//     <div>
//        <section className="bg-gradient-to-br from-white to-pink-100 px-8 py-16 text-center md:text-left md:flex md:items-center">
//       <div className="md:w-1/2 space-y-6">
//         <p className="text-sm bg-indigo-200 text-gray-600 px-7 py-1 rounded-xl font-semibold">Analysis. Research. Problem Solving.</p>
//        <h2 className="text-4xl font-bold"> Find yourself in a Great Book</h2>
//         <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Fusce dapibus risus vel.</p>
//         <div className="flex space-x-4 justify-center md:justify-start">
//           <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">Get Started</button>
//           <button className="border border-black px-6 py-2 rounded-full">Learn More</button>
//         </div>
//       </div>
//       <div className="md:w-1/2 mt-10 ml-80 md:mt-0">
//       {/* <div className='flex h-20 w-20 bg-pink-100 shadow-lg rounded-full relative'>
//         jj
//         {/* <span className='h-20 w-30  bg-blue-600 rounded-full'>ghhh</span> */}
//         {/* <img className=' h-10 w-10 rounded-full absolute' src={img2}></img> */}
//       {/* </div> */} 
//         <img src={img} alt="Books" className="w-70 h-70 bg-white relative  rounded-2xl"  />
//         <div className='gap-5 flex'>
//          <div className='flex h-15 w-15 top-35  bg-pink-100 shadow-lg shadow-fuchsia-300 rounded-full absolute'>
        
//         {/* <span className='h-20 w-30  bg-blue-600 rounded-full'>ghhh</span> */}
//         <img className=' h-10 w-10 rounded-full  absolute top-5' src={img2}></img>
//       </div>
//         <div className='flex h-15 w-15 top-30 right-14  bg-pink-100 shadow-lg shadow-fuchsia-400 rounded-full absolute'>
        
//         {/* <span className='h-20 w-30  bg-blue-600 rounded-full'>ghhh</span> */}
//         <img className=' h-10 w-10 rounded-full absolute top-5' src={hat}></img>
//       </div>
//          <div className='flex h-15 w-15 bottom-15 right-32  bg-amber-100 shadow-lg shadow-amber-400 rounded-full absolute'>
        
//         {/* <span className='h-20 w-30  bg-blue-600 rounded-full'>ghhh</span> */}
//         <img className=' h-10 w-10 rounded-full absolute top-5' src={cal}></img>
//       </div>
//       </div>
//       </div>
//     </section>
//     </div>
//   )
// }

// export default Hero

// import React from 'react';
// import { useNavigate } from "react-router-dom"; 
// import img from "../assets/book.jpg";
// import img2 from "../assets/booklogo.jpg";
// import hat from "../assets/hat.jpg";
// import cal from "../assets/vecteezy_3d-minimal-calculator-render-concept-of-financial_9315257.png";

// const Hero = () => {
//    const navigate = useNavigate();
//   return (
//     <section  className="  bg-gradient-to-br from-white to-pink-100 px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
//     {/* <section  className="  bg-gradient-to-br from-white to-pink-100 px-6  md:px-40 py-16 flex flex-col md:flex-row items-center justify-between gap-16  relative overflow-hidden"> */}
      
//       {/* Left Content */}
//       <div data-aos="fade-up" className="md:w-1/2 text-center md:text-left space-y-6">
//         {/* <p className="text-sm bg-indigo-200 text-gray-600 inline-block px-6 py-2 rounded-xl font-semibold"> */}
//         <p className="text-sm bg-indigo-200 text-gray-600 inline-block px-6 py-2 rounded-xl font-semibold">
//           Analysis. Research. Problem Solving.
//         </p>
//         <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
//           Find yourself in a Great Book
//         </h2>
//         <p className="text-gray-600 text-base md:text-lg">
//           Lorem ipsum dolor sit amet consectetur. Fusce dapibus risus vel.
//         </p>
//         <div className="flex justify-center md:justify-start gap-4">
//           {/* <button className="bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full overflow-hidden transform:scale-105">Get Started</button> */}
//           <button  onClick={() => navigate("/signup")} className="bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full overflow-hidden transform:scale-105">Get Started</button>
//           <button className="border border-black px-6 py-2 cursor-pointer rounded-full">Learn More</button>
//         </div>
//       </div>

//       {/* Right Image with floating icons */}
//       <div data-aos="fade-up" className="md:w-1/2 relative w-full max-w-sm mx-auto ml-0 md:ml-70">
//         <img
//           src={img}
//           alt="Books"
//           className="w-full h-auto rounded-2xl "
//         />

//         {/* Floating Icons */}
//         <div data-aos="zoom-in" className="absolute top-5 left-5 bg-pink-100 shadow-lg shadow-fuchsia-300 rounded-full w-14 h-14 flex items-center justify-center">
//           <img src={img2} alt="Logo" className="h-8 w-8 rounded-full" />
//         </div>

//         <div data-aos="zoom-in" className="absolute top-8 right-8 bg-pink-100 shadow-lg shadow-fuchsia-400 rounded-full w-14 h-14 flex items-center justify-center">
//           <img src={hat} alt="Hat" className="h-8 w-8 rounded-full" />
//         </div>

//         <div data-aos="zoom-in" className="absolute bottom-0 left-1/2 bg-amber-100 shadow-lg shadow-amber-400 rounded-full w-14 h-14 flex items-center justify-center">
//           <img src={cal} alt="Calculator" className="h-8 w-8 rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React from "react";
import  { useNavigate }  from "react-router-dom";  // ✅ Import hook
import img from "../assets/book.jpg";
import img2 from "../assets/booklogo.jpg";
import hat from "../assets/hat.jpg";
import cal from "../assets/vecteezy_3d-minimal-calculator-render-concept-of-financial_9315257.png";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Navigation hook

  return (
    <section className="bg-gradient-to-br from-white to-pink-100 px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
      {/* Left Content */}
      <div data-aos="fade-up" className="md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-sm bg-indigo-200 text-gray-600 inline-block px-6 py-2 rounded-xl font-semibold">
          Analysis. Research. Problem Solving.
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Find yourself in a Great Book
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Fusce dapibus risus vel.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {/* ✅ Navigate to signup */}
          <button
            onClick={() => navigate("/login")}
            className="bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full hover:scale-105 transition-transform"
          >
            Get Started
          </button>
          <button className="border border-black px-6 py-2 cursor-pointer rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div data-aos="fade-up" className="md:w-1/2 relative w-full max-w-sm mx-auto">
        <img src={img} alt="Books" className="w-full h-auto rounded-2xl " />

        {/* Floating Icons */}
        <div className="absolute top-5 left-5 bg-pink-100 shadow-lg shadow-fuchsia-300 rounded-full w-14 h-14 flex items-center justify-center">
          <img src={img2} alt="Logo" className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute top-8 right-8 bg-pink-100 shadow-lg shadow-fuchsia-400 rounded-full w-14 h-14 flex items-center justify-center">
          <img src={hat} alt="Hat" className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-1/2 bg-amber-100 shadow-lg shadow-amber-400 rounded-full w-14 h-14 flex items-center justify-center">
          <img src={cal} alt="Calculator" className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
