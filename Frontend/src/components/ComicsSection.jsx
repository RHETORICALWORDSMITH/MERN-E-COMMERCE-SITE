import React from "react";
import ActionAnime from "./ActionAnime";
import comicBackground from "../../public/homePics/comicBackground.png"
const ComicsSection = () => {
  return (
    <>
      <div className=`relative overflow-hidden h-screen bg-[url(${comicBackground})] bg-cover bg-center bg-no-repeat bg-opacity-75`>
        <div className="w-screen h-full bg-black opacity-80 absolute inset-0"></div>
        <ActionAnime />
      </div>
     
    </>
  );
};

export default ComicsSection;
