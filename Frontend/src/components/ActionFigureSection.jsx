import React from "react";
import jin from "../../public/homePics/jin.png";
import { Link } from "react-router-dom";

const ActionFigureSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center overflow-hidden h-screen bg-[url('../../public/homePics/battleGround.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-75">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full p-8 max-w-4xl mx-auto">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center md:text-left max-w-md border-2 border-red-600">
          <h1 className="text-4xl font-extrabold text-red-500 mb-4">
            Action Heroes
          </h1>
          <p className="text-gray-300 text-lg">
            Perfectly crafted for the ultimate collector.
          </p>
          <Link to={"collection"}>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold transition duration-300">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Image section */}
        <div className="relative md:ml-8 flex-shrink-0">
          <img
            src={jin}
            alt="Action Figure"
            className="z-10 h-[400px] md:h-[700px] mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionFigureSection;
