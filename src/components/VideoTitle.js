import React from "react";

const VideoTitle = (props) => {
  const { originalTitle, overview } = props;
  return (
    <div className="w-screen aspect-video mt-4 pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{originalTitle}</h1>
      <p className="w-4/12 text-xs">{overview}</p>
      <div className="mt-2">
        <button className="bg-white text-black text-md w-24 py-2 rounded-md">
          Play
        </button>
        <button className="mx-2 bg-gray-600 text-white text-md w-24 py-2 rounded-md bg-opacity:80">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
