import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-white font-bold pt-4 md:pt-8 pb-1">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
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
