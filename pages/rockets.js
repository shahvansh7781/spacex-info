import Image from "next/image";
import Link from "next/link";
// import React from 'react'
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const Rocket = ({ rocketData }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (rocketData) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [rocketData]);
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
        <div className="sm:flex sm:flex-row justify-center gap-8 mt-12 flex-wrap gap-y-[4vmax] flex flex-col items-center">
          {rocketData.map((rocket) => {
            return (
              <Link key={rocket.id} href={`rocketDetails/${rocket.id}`}>
                <div className="sm:h-[22vmax] sm:w-[22vmax] h-[27vmax] w-[27vmax] relative">
                  <Image src={rocket.flickr_images[0]} alt="" fill />
                </div>
                <p className="sm:text-[1.3vmax] text-center text-[1.7vmax] mt-2">
                  {rocket.name}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Rocket;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/rockets");
  const data = await response.json();

  return {
    props: {
      rocketData: data,
    },
  };
}
