// import React from "react";
import useSWR from "swr";
import Navbar from "../Components/Navbar";
import PayloadCard from "../Components/PayloadCard";
import { RingLoader } from "react-spinners";
const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/payloads");
  const data = await response.json();
  return data;
};

const Payload = () => {
  const { data } = useSWR("payload", fetcher);
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      {!data ? (
        <div className="flex w-full h-[80vh] justify-center items-center">
          <RingLoader color="#FFFFFF" size="4vmax" />
        </div>
      ) : (
        <div className="sm:flex sm:flex-row sm:flex-wrap gap-10 justify-center items-center flex flex-col mt-10">
          {data.map((payload) => {
            return <PayloadCard key={payload.id} payload={payload} />;
          })}
        </div>
      )}
    </>
  );
};

export default Payload;
