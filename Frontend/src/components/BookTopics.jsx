import React from 'react';
// import bookImage from '../assets/book-inside.png'; // Use your image path here
import TopicBook from "../assets/TopicBook.png"

const BookTopics = () => {
  const topics = [
    'Design Principles',
    'Typography',
    'Visual Hierarchy',
    'UI Design',
    'White Space',
    'Color Theory',
  ];

  return (
    <section className="bg-gradient-to-r from-white to-pink-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div data-aos="fade-right" className="max-w-xl text-center md:text-left">
          <p className="text-gray-500 text-sm">Some topics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What’s inside <br /> the <span className="text-yellow-500">book</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis euismod.
          </p>

          {/* Topics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
             
                <div className="w-2.5 h-2.5 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-full" />
                <span className="text-gray-700 text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="relative">
          <div className="w-72 h-72 bg-white rounded-[2.5rem] shadow-lg flex items-center justify-center overflow-hidden">
            <div className="w-60 h-60 bg-blue-700 rounded-full flex items-center justify-center">
              <img
                src={TopicBook}
                alt="Books stacked"
                className="w-44 h-48 rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTopics;
