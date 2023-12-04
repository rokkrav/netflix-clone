import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return movies.upcomingMovies ? (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};

export default SecondaryContainer;
