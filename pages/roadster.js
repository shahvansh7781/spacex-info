import Image from "next/image";
import Link from "next/link";
// import React from "react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const Roadster = ({ roadsterData }) => {
  let date = new Date(roadsterData.launch_date_utc);
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (roadsterData) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [roadsterData]);
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
        <div className="sm:flex sm:flex-row justify-center sm:mt-10 flex flex-col items-center mt-16">
          <div className="w-1/2">
            <Image
              src={roadsterData.flickr_images[2]}
              alt=""
              height={600}
              width={600}
              className="h-[36vmax] w-[45vmax]"
            />
          </div>
          <div className="w-2/5 space-y-[2.5vmax]">
            <p className="text-2xl font-bold sm:mt-0 mt-5 sm:text-left text-center">
              {roadsterData.name}{" "}
            </p>
            <div className="bg-jet-black w-[18vmax] p-[1vmax] text-base space-y-[0.4vmax]">
              <p>Launch Date: {`${day}-${month}-${year}`}</p>
              <p>Launch Mass(in kg): {roadsterData.launch_mass_kg} </p>
              <p>Orbit type: {roadsterData.orbit_type} </p>
              <p>Speed: {Math.round(roadsterData.speed_kph)} kph </p>
              <p>
                Distance from Earth:{" "}
                {Math.round(roadsterData.earth_distance_km)}
                km
              </p>
            </div>
            <p>
              <Link
                href={roadsterData.wikipedia}
                className="border-2 p-[0.8vmax] text-sm bg-jet-black"
              >
                Wikipedia
              </Link>
            </p>
            <p className="text-base">{roadsterData.details} </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Roadster;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/roadster");
  const data = await response.json();

  return {
    props: {
      roadsterData: data,
    },
  };
}
