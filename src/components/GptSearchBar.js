import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovie } from "../utils/gptSlice";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const getMovieBySearch = async (movieSearch) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieSearch +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(
      addMovie({
        movieName: movieSearch.toUpperCase(),
        movieResults: json.results,
      })
    );
  };

  const handleGptSearchBtn = async () => {
    console.log(searchText.current.value);
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const results = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(results);
    getMovieBySearch(searchText.current.value);
    searchText.current.value = "";
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4  col-span-9 bg-white rounded-sm"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 bg-red-600 text-white ml-8 rounded-sm"
          onClick={handleGptSearchBtn}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
