// import React from "react";
import LandpadCard from "../Components/LandpadCard";

import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

const Landpad = ({ landpadData }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (landpadData) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [landpadData]);
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      {loading ? (
        <div className="flex w-full h-[80vh] justify-center items-center">
          <RingLoader color="#FFFFFF" size="4vmax" />
        </div>
      ) : (
        <div className="sm:flex sm:flex-row justify-center gap-8 sm:flex-wrap sm:gap-y-[3vmax] mt-10 flex flex-col items-center">
          {landpadData.map((landpad) => {
            return <LandpadCard key={landpad.id} landpad={landpad} />;
          })}
        </div>
      )}
    </>
  );
};

export default Landpad;

export async function getStaticProps() {
  const response = await fetch("https://api.spacexdata.com/v4/landpads");
  const data = await response.json();
  return {
    props: {
      landpadData: data,
    },
  };
}
