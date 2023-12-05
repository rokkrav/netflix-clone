import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchMoviesContainer = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);

  return (
    <div className="text-white">
      {movieResults && (
        <h1 className="text-white font-bold md:text-lg pt-8 pl-6 md:pt-8">
          Search Results
        </h1>
      )}
      <MoviesList title={movieName} movies={movieResults} />
    </div>
  );
};

export default GptSearchMoviesContainer;
