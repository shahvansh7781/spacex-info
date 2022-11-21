// import React from "react";

import CapsuleCard from "../Components/CapsuleCard";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const Capsule = ({ capsuleData }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (capsuleData) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [capsuleData]);
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
        <div className="sm:w-full sm:flex sm:flex-row sm:gap-8 sm:justify-center sm:flex-wrap sm:mt-[0vmax] flex flex-col flex-wrap items-center gap-6 align-middle mt-[8vmax]">
          {capsuleData.map((capsule) => {
            return <CapsuleCard key={capsule.id} capsule={capsule} />;
          })}
        </div>
      )}
    </>
  );
};

export default Capsule;

export async function getStaticProps() {
  const response = await fetch("https://api.spacexdata.com/v4/capsules");
  const data = await response.json();
  return {
    props: {
      capsuleData: data,
    },
  };
}
