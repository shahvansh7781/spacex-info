import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Components/Navbar";

const Launches = ({ launchData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="flex justify-center gap-12 flex-wrap gap-y-72 mt-10">
        {launchData.map((launch) => {
          let date = new Date(launch.date_utc);
            let month = date.getUTCMonth()+1;
            let day = date.getUTCDate();
            let year = date.getUTCFullYear();
            
          return (
            <>
            <Link href={launch.links.article ? (launch.links.article):("/launches")}>
            <div className="w-[370px] h-[350px] text-center space-y-2 text-[20px]">
            <Image
              key={launch.id}
              src={launch.links.patch.small ? (launch.links.patch.small) : (launch.links.flickr.original[0])}
              alt="no image"
              height={320}
              width={370}
            />
  <p>{launch.name}</p>
  <p>{`Date: ${day}-${month}-${year}`}</p>
            </div>
            </Link>
            
            </>
          );
        })}
      </div>
    </>
  );
};

export default Launches;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();

  return {
    props: {
      launchData: data,
    },
  };
}
