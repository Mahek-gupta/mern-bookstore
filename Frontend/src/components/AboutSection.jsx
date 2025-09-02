
// import React from "react";
// import girl from "../assets/girl.jpg";
// import { FaLock } from "react-icons/fa6";
// import PPencil  from "../assets/PPencil.jpg"
// import YPencil from "../assets/YPencil.jpg"

// const AboutSection = () => {
//   return (
//     <section className="px-15 py-11  bg-amber-100">
//       <div className="flex items-center sm:flex-row    flex-col md:flex-row justify-between  max-w-6xl mx-auto mb-10 gap-6 ">
//         <div data-aos="fade-right" className="text-3xl font-bold mb-4">
//           <h2 className="">About</h2>
//           <p> The Redex Library </p>
//         </div>
//         <div data-aos="fade-left" className="flex items-center max-w-md   sm:flex-row gap-3  sm:text-left text-center">
//         <p className="text-gray-600  mb-8  text-sm">
//           Lorem ipsum dolor sit amet consectetur    adipiscing elit. Maecenas in
//           felis euismod.lucluers argue at, auctor dolor. Denec portitor.
          
//         </p>
//         <img data-aos="fade-up" className="h-10  rotate-45 w-2 mb-28 " src={PPencil} />
//         </div>
//       </div>
//       <div className="flex gap-2">
//        <img data-aos="fade-up" className="h-10 w-2  mt-3 rotate-240" src={YPencil}/>
//       <div data-aos="fade-up" className="flex flex-col md:flex-row items-center max-w-full ml-3 bg-gradient-to-r from-purple-300 to-pink-200  rounded-lg gap-60">
//        {/* <img src={YPencil}/> */}
//         <img src={girl} alt="Girl with books" className="w-60 ml-5 rounded-full" />
//         <div className="bg-white gap-10 flex p-11 m-4 rounded-xl relative shadow-lg">
//           <div className="text-xl mt-4 font-semibold">
//             <h3>The</h3>
//             <h3> Redex Library</h3>
//           </div>
//           <div>
//             <div className="flex gap-1 items-center">
//               <FaLock />
//               <p className="text-sm ">Author</p>
//             </div>
//             <p className="text-sm ml-4 font-bold">Redex Library</p>
//             <div className="flex gap-1 mt-5">
//               <FaLock />
//               <p className="text-sm">Total</p>
//             </div>
//             <p className="text-sm ml-4 font-bold"> 368 Books</p>
//               <span className="h-10 w-10 bg-blue-400 rounded-full"></span>
//           </div>
//           <div className="absolute h-7 w-7 bg-pink-300 rounded-full bottom-3 right-25"></div>
//          <div className="absolute h-10 w-10 bg-blue-800 bottom-1 right-4 rounded-full">

//          </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




import React from "react";
import girl from "../assets/girl.jpg";
import { FaLock } from "react-icons/fa6";
import PPencil from "../assets/ppencil.jpg";
import YPencil from "../assets/ypencil.jpg";

const AboutSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-11 bg-amber-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-10 gap-6">
        <div data-aos="fade-right" className="text-3xl font-bold mb-4 text-center md:text-left">
          <h2>About</h2>
          <p>The Redex Library</p>
        </div>

        <div
          data-aos="fade-left"
          className="flex items-center sm:flex-row flex-col  max-w-lg sm:text-left text-center"
        >
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas in
            felis euismod. Lucluers argue at, auctor dolor. Donec porttitor.
          </p>
          <img
            data-aos="fade-up"
            className="h-10 w-2 rotate-45 sm:mb-10 mr-10"
            // className="h-15 w-2 rotate-45 sm:mb-10"
              
            src={PPencil}
            alt="Pencil"
          />
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="flex gap-2 items-start"> */}
      <div className="flex gap-2 items-start text-center md:text-left justify-center md:justify-start  sm:ml-0">
    
        <img
          data-aos="fade-up"
          // className="h-10 w-2 mt-3 -rotate-90"
          className="h-10 w-2 mt-3 ml-5 -rotate-50 mr-3 "
          src={YPencil}
          alt="Yellow Pencil"
        />

        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center w-250 bg-gradient-to-r from-purple-300  to-pink-200 rounded-lg p-6 md:p-8 gap-10 md:gap-12"
          // className="flex flex-col md:flex-row items-center w-full md:w-250 bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg p-6 md:p-6 gap-6 md:gap-90 md:ml-50"
        >
          <img
            src={girl}
            alt="Girl with books"
            className="w-40 sm:w-48 md:w-60 rounded-full"
          />

          {/* Info Card */}
          <div className="bg-white flex flex-col sm:flex-row gap-10 p-6 rounded-xl relative shadow-lg w-full max-w-lg sm:max-w-none sm:justify-between">
            <div className="text-xl font-semibold text-center sm:text-left">
              <h3>The</h3>
              <h3>Redex Library</h3>
            </div>

            <div>
              <div className="flex gap-1 items-center">
                <FaLock />
                <p className="text-sm">Author</p>
              </div>
              <p className="text-sm ml-4 font-bold">Redex Library</p>

              <div className="flex gap-1 items-center mt-5">
                <FaLock />
                <p className="text-sm">Total</p>
              </div>
              <p className="text-sm ml-4 font-bold">368 Books</p>
              <span className="h-10 w-10 bg-blue-400 rounded-full block mt-4"></span>
            </div>

            {/* Decorative Circles */}
            <div className="absolute h-7 w-7 bg-pink-300 rounded-full bottom-3 right-6"></div>
            <div className="absolute h-10 w-10 bg-blue-800 bottom-1 right-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
