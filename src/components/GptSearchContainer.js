import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMoviesContainer from "./GptSearchMoviesContainer";

const GptSearchContainer = () => {
  return (
    <div className="w-screen bg-black">
      <GptSearchBar />
      <GptSearchMoviesContainer />
    </div>
  );
};

export default GptSearchContainer;
