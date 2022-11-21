import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const Rocketdetails = ({ rocketDetails }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (rocketDetails) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [rocketDetails]);
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
        <div className="sm:flex sm:flex-row justify-center mt-16 flex flex-col items-center sm:gap-8 gap-6">
          <div className="sm:w-[32max] sm:h-[35vmax] h-[40vmax] w-[40vmax] relative">
            <Image src={rocketDetails.flickr_images[0]} alt="" fill />
          </div>
          <div className="sm:w-[43vmax] space-y-[2.5vmax] flex flex-col sm:justify-start sm:items-start justify-center items-center gap-y-2 sm:gap-y-0">
            <p className="sm:text-2xl text-3xl font-bold">
              {" "}
              {rocketDetails.name}{" "}
            </p>
            <p className="sm:text-lg text-xl">
              {" "}
              First Flight: {rocketDetails.first_flight}{" "}
            </p>
            <div className="flex gap-4">
              <div className="bg-jet-black sm:w-[18vmax] p-[1.3vmax] sm:text-base text-lg sm:h-[13vmax] flex flex-col gap-y-[0.7vmax] h-[17vmax] w-[20vmax]">
                <p> Country: {rocketDetails.country} </p>
                <p> Height: {rocketDetails.height.meters} m </p>
                <p> Diameter: {rocketDetails.diameter.meters} m </p>
                <p> Mass: {rocketDetails.mass.kg} kg </p>
              </div>
              <div className="bg-jet-black sm:w-[18vmax] p-[1.3vmax] sm:text-base text-[1.3vmax] sm:h-[13vmax] flex flex-col gap-y-[0.4vmax] h-[17vmax] w-[20vmax]">
                <p className="text-center font-bold">Engine Details</p>
                <p> Type: {rocketDetails.engines.type} </p>
                <p> Propellant 1: {rocketDetails.engines.propellant_1} </p>
                <p> Propellant 2: {rocketDetails.engines.propellant_2} </p>
                <p>
                  {" "}
                  Thrust/Weight Ratio: {
                    rocketDetails.engines.thrust_to_weight
                  }{" "}
                </p>
              </div>
            </div>
            <div className="sm:text-left text-center">
              <Link
                href={rocketDetails.wikipedia}
                className="border-2 sm:p-[0.8vmax] p-[1vmax] sm:text-base bg-jet-black mr-3 text-lg"
              >
                Wikipedia
              </Link>
              <Link
                href="/rockets"
                className="border-2 sm:p-[0.8vmax] p-[1vmax] sm:text-base text-lg bg-jet-black"
              >
                Back
              </Link>
              <p className="sm:mt-9 mt-3 sm:text-sm text-xl sm:p-0 p-4">
                {rocketDetails.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rocketdetails;

export async function getStaticPaths(params) {
  const response = await fetch("https://api.spacexdata.com/v4/rockets");
  const data = await response.json();

  const paths = data.map((rId) => {
    return {
      params: {
        rocketId: rId.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.spacexdata.com/v4/rockets/${params.rocketId}`
  );
  const data = await response.json();
  return {
    props: {
      rocketDetails: data,
    },
  };
}
