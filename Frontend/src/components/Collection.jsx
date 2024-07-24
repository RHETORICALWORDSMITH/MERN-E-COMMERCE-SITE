import React, { useState, useEffect, useRef } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSearchedAnime } from "../context/searchProvider.jsx";

const Collection = () => {
  const [anime, setAnime] = useState([]);
  //search context
  const [search, setSearch] = useSearchedAnime();
  //state for filters
  const [filterName, setFilterName] = useState();
  //Filter Array
  const filterArray = ["Fantasy", "Adventure", "Thriller", "Action"];
  //state of checkboxes
  const [isChecked, setIsChecked] = useState(true);

  //To search via filters
  const handleFilterChange = (appliedFilter, currState) => {
    setFilterName(appliedFilter);
    setIsChecked(currState);
    if (currState === false) {
      const recoverAnime = async () => {
        const res = await axios.get(`http://localhost:3000/anime/`);
        setAnime(res.data);
      };
      recoverAnime();
    }
  };

  useEffect(() => {
    // console.log("search in Array form having an:");
    // console.log(search);
    const getAnime = async () => {
      try {
        let searchName = "";
        if (
          Array.isArray(search) &&
          search.length > 0 &&
          search[0].hasOwnProperty("name")
        ) {
          searchName = search[0].name;
        }

        if (searchName) {
          const res = await axios.get(`http://localhost:3000/anime/`);
          const requiredAnime = res.data.filter((item) =>
            item.name.includes(searchName)
          );
          setAnime(requiredAnime);

          // console.log("the thing you searchde" + searchName);
        } else {
          const res = await axios.get(`http://localhost:3000/anime/`);
          setAnime(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAnime();
  }, [search]);

  useEffect(() => {
    const getAnimeViaFil = async () => {
      try {
        if (filterName) {
          const res = await axios.get(`http://localhost:3000/anime/`);
          const requiredAnime = res.data.filter((item) =>
            item.category.includes(filterName)
          );
          setAnime(requiredAnime);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAnimeViaFil();
  }, [filterName]);

  useEffect(() => {
    //to make the check boxes unmarked
    setFilterName(null);
    setIsChecked(false);
  }, [search]);

  //search functionality for the search bar in the collection
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-4">
      <div className="mt-28 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl">
          Explore the Vast{" "}
          <span className="text-purple-500">{`Collection! :)`}</span>
        </h1>
        <p className="mt-12 text-center">
          Explore an expansive collection of anime, featuring a diverse range of
          genres from action-packed adventures to heartfelt romances. Immerse
          yourself in captivating storytelling and beloved characters at our
          store.
        </p>
        <label className="input border border-gray-400 rounded-md flex bg-white dark:bg-slate-900 md:hidden mt-8">
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
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:text-black hover:bg-pink-700 duration 300">
            Back
          </button>
        </Link>
        <div className="flex flex-col items-center gap-4 mt-16">
          <h1 className="text-2xl font-bold text-yellow-400">
            Search via Filters!
          </h1>
          <div className="flex gap-3">
            {filterArray.map((filter) => (
              <div key={filter} className="form-control">
                <label className="cursor-pointer gap-3 flex items-center">
                  <span className="label-text dark:text-white text-black">
                    {filter}
                  </span>
                  <input
                    checked={filterName === filter && isChecked}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                    onChange={(e) => {
                      handleFilterChange(filter, e.target.checked);
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {anime.map((item) => (
          <div
            key={item.id}
            className="max-w-sm mx-auto rounded shadow-md overflow-hidden"
          >
            <Cards key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
