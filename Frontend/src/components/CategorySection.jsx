import React from 'react';
import pencilImage from "../assets/scale.jpg"; 
import book2 from "../assets/book2.jpg";
import  hat from "../assets/hat.jpg"

const CategorySection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-pink-50 to-pink-100 py-16 px-4">
      <div data-aos="fade-up" className="max-w-3xl mx-auto bg-[rgb(252,241,228)] rounded-3xl text-center p-10 relative shadow-lg">
        {/* Decorative floating icons */}
        <div data-aos="zoom-in" className="absolute top-4 left-4 w-6 h-6">
                     <div className='flex h-12 w-12  bg-gradient-to-r from-gray-100 via-purple-100 to-purple-200 shadow-lg shadow-purple-300 rounded-full absolute'></div>
          <img className='absolute h-7 w-12 top-4 left-0.2 rounded-full' src={book2} alt="book icon" />
        </div>
        <div data-aos="zoom-in" className="w-6 h-6 top-4 right-17 absolute   ">
                     <div className='flex h-12 w-12  bg-gradient-to-r from-gray-100 via-pink-100 to-pink-200 shadow-lg shadow-pink-300 rounded-full absolute'></div>
          <img className='absolute -bottom-5 h-7 w-10 rounded-full' src={hat} alt="user icon" />
        </div>
        <div data-aos="zoom-in" className="absolute  right-19 bottom-49 w-6 h-6">
           <div className='flex h-12 w-12  bg-gradient-to-r from-gray-100 via-blue-100 to-blue-200 shadow-lg shadow-blue-300 rounded-full absolute'></div>
          <img className='absolute -bottom-6 h-7 w-12 left-0 rounded-2xl'  src={book2} alt="abc icon" />
        </div>

        {/* Text */}
        <p className="uppercase text-sm text-gray-500 mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
          Let’s Work On <br />
          Something Cool Together
        </h2>

        {/* Button */}
        <button className="bg-white px-6 py-2 rounded-full shadow-md text-gray-900 font-medium hover:bg-gray-100 transition">
          Sign up →
        </button>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <img
            src={pencilImage}
            alt="Pencil Ruler"
            className="w-54  h-40 rounded-t-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
