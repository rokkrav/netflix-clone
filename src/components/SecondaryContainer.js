import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return movies.upcomingMovies ? (
    <div className="bg-black w-screen">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  ) : (
    <h1 className="text-center text-md mt-5">Loading....</h1>
  );
};

export default SecondaryContainer;
