import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMoviesContainer from "./GptSearchMoviesContainer";

const GptSearchContainer = () => {
  return (
    <div className=" bg-black h-screen">
      <GptSearchBar />
      <GptSearchMoviesContainer />
    </div>
  );
};

export default GptSearchContainer;
