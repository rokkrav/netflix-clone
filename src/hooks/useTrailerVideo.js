import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  console.log(movieId);
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const movieTrailers = json.results.filter(
      (eachMoive) => eachMoive.type === "Trailer"
    );
    console.log(movieTrailers);
    const movieTrailer =
      movieTrailers.length === null ? json.results[0] : movieTrailers[0];
    dispatch(addTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
