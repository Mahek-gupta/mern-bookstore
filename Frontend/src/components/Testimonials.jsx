

import React from 'react';
// import book from "../assets/book.jpg" // Replace with your image path
import teacher from "../assets/become-a-teacher.svg"
import document from "../assets/lockedDouckment.jpg"
import calender from "../assets/calender.jpg"

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-tr from-white via-pink-50 to-purple-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div data-aos="fade-right" className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What People <br /> Say about the <br /> <span className="text-black">Redex Book</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis euismod.
          </p>
          <a href="#" className="text-gray-600 font-medium hover:underline">
            Reviews →
          </a>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="relative">
          <div className="w-64 h-64 rounded-full bg-white shadow-lg flex items-center justify-center relative">
            <div className="w-48 h-48 bg-purple-600 rounded-full flex items-center justify-center">
             {/* <img
                src={teacher}
                alt="Testimonial"
                className="w-86 h-86 mr-3"
              /> */}
            </div>
          </div>
  <img
                src={teacher}
                alt="Testimonial"
                className="w-52 h-52 absolute -top-1.5 left-16  "
              />
          {/* Floating Icons */}
          <img
            src={document}
            alt="icon"
            className="absolute shadow-lg shadow-gray-400 -top-1 left-4 w-6 h-6"
          />
          <div className='h-8 w-15 bottom-20 -left-17 shadow-lg shadow-gray-300 absolute bg-orange-300 rounded-2xl'></div>
          <img
            src={calender}
            alt="icon"
            className="absolute bottom-22 shadow-lg    -left-12 w-4 h-4  "
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mt-10 gap-4">
        <button className="bg-white p-2 h-10 w-10  rounded-full border shadow hover:bg-gray-100">
          ←
        </button>
        <button className="bg-blue-600 h-10 w-10 text-white p-2 rounded-full shadow hover:bg-blue-700">
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
