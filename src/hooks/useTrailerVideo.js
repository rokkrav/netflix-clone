import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const movieTrailers = json.results.filter(
      (eachMoive) => eachMoive.type === "Trailer"
    );

    const movieTrailer =
      movieTrailers.length === null ? json.results[0] : movieTrailers[0];
    dispatch(addTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
