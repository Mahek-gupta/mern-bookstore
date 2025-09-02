

import React from "react";
import BookCharacter from "../assets/boy.jpg";
import BookStack from "../assets/handbook.jpg";
import BookIcon from "../assets/handbook.jpg";
import GirlReading from "../assets/cartoongirls.jpg";
import { FaStar } from "react-icons/fa";
import UserGroup from "../assets/user.jpg";

const TrendingBooksCard = () => {
  return (
    <div data-aos="fade-up" className="flex flex-wrap justify-center group gap-6 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-100 p-6">
      
      {/* Card 1 */}
      <div className="flex flex-col sm:flex-row group-hover:scale-105  justify-center max-w-2xs w-full bg-gradient-to-r from-orange-100 to-pink-100  shadow-lg overflow-hidden">
        <img
          src={BookCharacter}
          alt="Character"
          className="w-full sm:w-32 h-48   rounded-t-xl "
        />
        <div className="bg-gradient-to-l group-hover:scale-100 from-pink-300 via-pink-300 to-pink-200 p-4 flex mt-12 sm:m rounded-t-xl flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-900">Trending Books</h2>
          <p className="text-sm text-gray-800 mt-2">Explore trending books of this month</p>
          <div className="mt-2 text-2xl">➡️</div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col group-hover:scale-105 sm:flex-row max-w-2xs w-full bg-[#0B1437] rounded-t-xl text-white shadow-lg overflow-hidden">
        <div className="flex flex-col  justify-center gap-2 p-4">
          <img src={BookIcon} alt="Book Icon" className="w-8 h-8" />
          <h2 className="text-lg font-semibold">Our Greatest Collection</h2>
          <p className="text-sm text-gray-300">Choose your favorite Books</p>
        </div>
        <div className="flex justify-center items-center ">
          <img src={BookStack} alt="Books on hand" className="w-32 h-48  rounded-t-xl" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col group-hover:scale-105 sm:flex-row max-w-2xs w-full   shadow-lg overflow-hidden">
        <div className=" justify-center flex flex-col gap-0.5  rounded-t-2xl mt-15  pl-4 pr-6   bg-gradient-to-r from-blue-100 to-purple-200">
          <h2 className="text-lg font-semibold text-gray-900">Our Exclusive Articles</h2>
          <div className="flex items-center gap-2 mt-2">
            <img src={UserGroup} alt="Users" className="w-6 h-6" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-500" />
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-800 mt-1 pl-7">20K Total Reviews</span>
        </div>
        <div className="flex justify-center   items-center ">
          <img
            src={GirlReading}
            alt="Girl Reading"
            className="w-32 h-48  object-cover  rounded-t-xl"
          />
        </div>
      </div>

    </div>
  );
};

export default TrendingBooksCard;
