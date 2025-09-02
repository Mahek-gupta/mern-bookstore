

import React from 'react';
import book2 from "../assets/book2.jpg"

const books = [
  {
    id: 1,
    color: 'bg-pink-100',
    circle: 'bg-pink-400',
    title: 'Horlicks',
    price: '$34.00',
    desc: 'Sweet malted milk hot drink',
    img: book2, // Replace with your actual image path
  },
  {
    id: 2,
    color: 'bg-indigo-100',
    circle: 'bg-indigo-600',
    title: 'Horlicks',
    price: '$34.00',
    desc: 'Sweet malted milk hot drink',
    img: book2,
  },
  {
    id: 3,
    color: 'bg-cyan-100',
    circle: 'bg-cyan-400',
    title: 'Horlicks',
    price: '$34.00',
    desc: 'Sweet malted milk hot drink',
    img: book2,
  },
];

const NewArrivals = () => {
  return (
    <section data-aos="fade-up" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas for.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {books.map((book) => (
            <div key={book.id} className={`rounded-xl p-6 shadow-md w-64 ${book.color}`}>
              <div className="flex justify-center mb-4">
                <div className={`rounded-full p-4 ${book.circle}`}>
                  <img src={book.img} alt={book.title} className="w-12 h-12 rounded-full" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.desc}</p>
              <p className="text-sm font-bold text-gray-800 mt-2">{book.price}</p>
              <button className="mt-4 px-4 py-2 text-sm bg-white border rounded-lg hover:bg-gray-100">
                View Book Demo
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <button className="bg-white  rounded-full h-10 w-10 border shadow hover:bg-gray-100">
            <span className="text-xl">{'←'}</span>
          </button>
          <button className="bg-blue-500 text-white  rounded-full h-10 w-10 shadow hover:bg-blue-600">
            <span className="text-xl ">{'→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
