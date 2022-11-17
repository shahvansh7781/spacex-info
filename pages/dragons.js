import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Components/Navbar";

const Dragon = ({ dragonData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <Link href={`/dragonDetails/${dragonData[0].id}`}>
          <div className="bg-jet-black h-[39vmax] w-[35vmax] flex-col space-y-[1vmax]">
            <Image
              src={dragonData[0].flickr_images[3]}
              alt=""
              width={300}
              height={500}
              className="w-[35vmax] h-[20vmax]"
            />
            <div className="p-[0.7vmax]">
              <p className="text-sm">{dragonData[0].description}</p>
              <button className="border-2 p-[0.8vmax] text-sm mt-[3.5vmax]">
                More Details
              </button>
            </div>
          </div>
        </Link>
        <Link href={`dragonDetails/${dragonData[1].id}`}>
          <div className="bg-jet-black h-[39vmax] w-[35vmax] flex-col space-y-[0.7vmax]">
            <Image
              src={dragonData[1].flickr_images[0]}
              alt=""
              width={300}
              height={500}
              className="w-[35vmax] h-[20vmax]"
            />
            <div className="p-[0.7vmax]">
              <p className="text-sm">{dragonData[1].description}</p>
              <button className="border-2 p-[0.8vmax] text-sm mt-[1vmax]">
                More Details
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dragon;

export async function getStaticProps() {
  const response = await fetch("https://api.spacexdata.com/v4/dragons");
  const data = await response.json();
  return {
    props: {
      dragonData: data,
    },
  };
}
