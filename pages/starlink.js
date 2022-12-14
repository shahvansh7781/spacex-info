// import React from "react";
import Navbar from "../Components/Navbar";
import StarlinkCard from "../Components/StarlinkCard";
import useSWR from "swr";
import { RingLoader } from "react-spinners";
const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/starlink");
  const data = await response.json();
  return data;
};
const Starlink = () => {
  const {data} = useSWR("starlink", fetcher);
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      {
        !data ? (<div className="flex w-full h-[80vh] justify-center items-center">
        <RingLoader color="#FFFFFF" size="4vmax" />
      </div>) : (
            <div className="flex flex-wrap justify-center gap-8 mt-16">
        {data.map((starlink) => {
          return (
            <>
              <StarlinkCard key={starlink.id} starlink={starlink} />
            </>
          );
        })}
      </div>
        )
      }
      
    </>
  );
};

export default Starlink;
