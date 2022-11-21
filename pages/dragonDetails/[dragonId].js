import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const DragonDetails = ({ dragonDetails }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (dragonDetails) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [dragonDetails]);
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
        <div className="sm:flex sm:flex-row justify-center sm:gap-10 gap-6 mt-12 flex flex-col items-center">
          <div className="sm:w-2/5 relative sm:h-[36vmax] w-[34vmax] h-[34vmax]">
            <Image src={dragonDetails.flickr_images[2]} alt="" fill />
          </div>
          <div className="sm:w-1/2 gap-y-[2vmax] flex flex-col w-[100%] justify-center items-center sm:justify-start sm:items-start">
            <div className="">
              <p className="text-2xl font-bold">{dragonDetails.name}</p>
              <p className="text-lg font-medium">
                First Flight: {dragonDetails.first_flight}
              </p>
            </div>
            <div className="flex text-base sm:gap-6 gap-2 sm:p-0 p-4">
              <div className="space-y-[1vmax]">
                <p>Type: {dragonDetails.type}</p>
                <p>Crew: {dragonDetails.crew_capacity}</p>
                {dragonDetails.active ? <p>Active</p> : <p>Not Active</p>}
                <p>Dry Mass: {dragonDetails.dry_mass_kg}kg</p>
              </div>
              <div className="flex sm:gap-5 gap-3 text-sm">
                <div className="bg-jet-black p-[1.2vmax] space-y-[1vmax]">
                  <p className="uppercase">Heat Shield Details</p>
                  <p>Material: {dragonDetails.heat_shield.material}</p>
                  <p>Size: {dragonDetails.heat_shield.size_meters}m</p>
                  <p>Temperature: {dragonDetails.heat_shield.temp_degrees}°</p>
                  <p>
                    Developement Partner:{" "}
                    {dragonDetails.heat_shield.dev_partner}
                  </p>
                </div>
                <div className="bg-jet-black p-[1.2vmax] space-y-[1vmax]">
                  <p className="uppercase">Thrusters</p>
                  <p>Type: {dragonDetails.thrusters[0].type}</p>
                  <p>Fuel 1: {dragonDetails.thrusters[0].fuel_1}</p>
                  <p>Fuel 2: {dragonDetails.thrusters[0].fuel_2}</p>
                  <p>Thrust: {dragonDetails.thrusters[0].thrust.kN}kN</p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-0">
              <Link
                href={dragonDetails.wikipedia}
                className="border-2 p-[0.8vmax] text-base bg-jet-black mr-3"
              >
                Wikipedia
              </Link>
              <Link
                href="/dragons"
                className="border-2 p-[0.8vmax] text-base bg-jet-black"
              >
                Back
              </Link>
              <p className="mt-8 text-sm">{dragonDetails.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DragonDetails;

export async function getStaticPaths() {
  const response = await fetch("https://api.spacexdata.com/v4/dragons");
  const data = await response.json();

  const paths = data.map((dId) => {
    return {
      params: {
        dragonId: dId.id,
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
    `https://api.spacexdata.com/v4/dragons/${params.dragonId}`
  );
  const data = await response.json();
  return {
    props: {
      dragonDetails: data,
    },
  };
}
