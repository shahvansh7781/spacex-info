import React from "react";
import LandpadCard from "../Components/LandpadCard";

import Navbar from "../Components/Navbar";

const Landpad = ({ landpadData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="flex justify-center gap-8 flex-wrap gap-y-20 mt-10">
        {landpadData.map((landpad) => {
          return <LandpadCard key={landpad.id} landpad={landpad} />;
        })}
      </div>
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
