import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchMoviesContainer = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  console.log(movieName);
  console.log(movieResults);

  return (
    <div className="text-white">
      <MoviesList title={movieName} movies={movieResults} />
    </div>
  );
};

export default GptSearchMoviesContainer;
