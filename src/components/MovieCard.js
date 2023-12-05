import React from "react";

const MovieCard = ({ poster }) => {
  if (!poster) return;
  return (
    <div className="w-48 pr-4">
      <img alt="poster img" src={"https://image.tmdb.org/t/p/w500/" + poster} />
    </div>
  );
};

export default MovieCard;
