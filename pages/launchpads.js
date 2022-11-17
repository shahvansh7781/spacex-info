import Image from "next/image";
import React from "react";
import Navbar from "../Components/Navbar";

const Launchpads = ({ launchpadData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="flex flex-wrap justify-center gap-16 gap-y-36 text-[22px]">
        {launchpadData.map((launchpad) => {
          return (
            <>
              <div
                className="h-[500px] w-[500px] space-y-3 text-center"
                key={launchpad.id}
              >
                <Image
                  src={launchpad.images.large[0]}
                  alt=""
                  height={500}
                  width={500}
                  className="h-[500px] w-[500px] object-cover"
                />
                <p className="text-[22px]">{launchpad.name}</p>
                <p>Status: {launchpad.status}</p>
                {/* <p>{launchpad.details}</p> */}
              </div>
            </>
          );
        })}
      </div>
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
