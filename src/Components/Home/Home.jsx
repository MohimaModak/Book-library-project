import React from "react";
import "./Home.css";
import Category from "../Category/Category";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import { useEffect } from "react";
import { useState } from "react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";
import video from "../../assets/gallery/hom.mp4";

const Home = () => {
  const [darkLight, setdarkLight] = useState(
    localStorage.getItem("darkLight") === "true"
  );

  const toggleBackground = () => {
    setdarkLight((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("darkLight", newTheme.toString());
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkLight", darkLight.toString());
  }, [darkLight]);

  const backgroundColor = darkLight ? "black" : "white";
  const textColor = darkLight ? "white" : "black";

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className="relative">
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video object-cover h-[85vh]"
          >
            <source src={video} className="video " />
          </video>
          {/* <div className="overlay"></div> */}
        </div>
        <div className="absolute flex justify-center inset-0 items-center text-white">
          <div className="background max-w-md p-5 rounded-md bannerfont">
            <h1 className="text-5xl text-center">Online Library</h1>
            <div className="flex justify-center">
              <p className="text-center p-3 text-sm">
                A library is a place where books and sources of information are
                stored. They make it easier for people to get access to them for
                various purposes.
              </p>
            </div>

            <h1 className="text-center">You Can Use Dark Theme</h1>

            <div className="flex justify-center  z-50 items-center mb-2">
              <button
                className="text-3xl pl-5  flex justify-center items-center"
                onClick={toggleBackground}
              >
                {darkLight ? (
                  <BsLightbulb></BsLightbulb>
                ) : (
                  <BsLightbulbOff></BsLightbulbOff>
                )}
              </button>
            </div>

            <div className="flex justify-center text-sm">
              <p className="text-center border px-2 py-2 uppercase rounded-md">
                Buy Now
              </p>
            </div>
          </div>
        </div>
      </div>
      <Category></Category>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;
