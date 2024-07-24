import React, { useState } from "react";
import banner from "../../public/banner.png";
import { useNavigate } from "react-router-dom";
import { useSearchedAnime } from "../context/searchProvider.jsx";
import axios from "axios";
const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //for usecontext
  const [search, setSearch] = useSearchedAnime();

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/search/${searchTerm}`
      );
      const searchInfo = response.data;
      if (searchInfo.length > 0) {
        console.log(searchInfo); // Handle the response data as needed
        setSearch(searchInfo);
        if (window.location != "http://localhost:5174/collection") {
          navigate("/collection");
        }
      } else {
        toast.error("This anime does not exists!");
      }
      // Programmatically navigate to /collection
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-20 md:py-32 gap-10 justify-center items-center ">
        <div className="w-full md:w-1/2 md:order-1 order-2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to the{" "}
              <span className="text-purple-500">Anime Store!</span>
            </h1>
            <p className="text-xl">
              Immerse yourself in a world of anime at our store, where you'll
              find everything from manga to collectible figurines and stylish
              apparel. Explore a curated selection that celebrates the diverse
              and captivating stories of your favorite series. Whether you're a
              seasoned fan or new to anime, discover treasures that bring your
              favorite characters to life.
            </p>

            <label className="input border border-gray-400 rounded-md flex bg-white dark:bg-slate-900 md:hidden">
              <form
                className="flex items-center justify-between w-full"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={searchTerm}
                  className="flex-grow outline-none text-black dark:text-white placeholder:text-black dark:placeholder:text-white"
                  placeholder="Search Anime"
                  onChange={handleChange}
                />
                <button type="submit" className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </label>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex md:justify-end justify-center order-1 md:order2">
          <img src={banner} className="w-80 h-92" />
        </div>
      </div>
    </>
  );
};

export default Banner;
