import Image from "next/image";
// import React from "react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
const Launchpads = ({ launchpadData }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (launchpadData) {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [launchpadData]);
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
        <div className="sm:flex sm:flex-row sm:flex-wrap justify-center gap-16 sm:gap-y-[5vmax] flex flex-col items-center mt-10 gap-y-[4vmax]">
          {launchpadData.map((launchpad) => {
            return (
              <>
                <div key={launchpad.id}>
                  <div className="sm:h-[27vmax] sm:w-[25vmax] h-[32vmax] w-[30vmax] relative">
                    <Image src={launchpad.images.large[0]} alt="" fill />
                  </div>
                  <p className="sm:text-[1.3vmax] text-[1.6vmax] text-center mt-3">
                    {launchpad.name}
                  </p>
                  <p className="sm:text-[1.3vmax] text-[1.9vmax] text-center">
                    Status: {launchpad.status}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Launchpads;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/launchpads");
  const data = await response.json();
  return {
    props: {
      launchpadData: data,
    },
  };
}
