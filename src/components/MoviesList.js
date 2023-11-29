import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((eachMovie) => (
            <MovieCard key={eachMovie.id} poster={eachMovie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
