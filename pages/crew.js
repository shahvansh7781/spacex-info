import Link from "next/link";
import React from "react";
import CrewCard from "../Components/CrewCard";
import Navbar from "../Components/Navbar";

const Crew = ({ crewData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="sm:flex sm:flex-row sm:gap-16 sm:flex-wrap sm:pr-8 sm:pl-8 sm:justify-center gap-y-[4vmax] sm:mt-10 mt-[8vmax] flex flex-col justify-center items-center">
        {crewData.map((crew) => {
          return <CrewCard crew={crew} key={crew.id} />;
        })}
      </div>
    </>
  );
};

export default Crew;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/crew");
  const data = await response.json();
  return {
    props: {
      crewData: data,
    },
  };
}
