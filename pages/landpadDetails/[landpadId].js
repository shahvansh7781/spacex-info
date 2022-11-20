import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../Components/Navbar";

const LandpadDetails = ({ landpadDetails }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="sm:flex sm:flex-row justify-center flex flex-col items-center mt-12 sm:gap-10 gap-6">
        <div className="sm:w-[32vmax] w-[40vmax] relative h-[40vmax] sm:h-[35vmax]">
          <Image
            src={landpadDetails.images.large[0]}
            alt=""
            fill
          />
        </div>
        <div className="sm:w-[43vmax] sm:space-y-[1.4vmax] space-y-[1.6vmax] flex flex-col sm:justify-start justify-center sm:items-start items-center">
          <p className="sm:text-2xl text-3xl font-bold">{landpadDetails.full_name}</p>
          <p className="sm:text-base text-lg">Status: {landpadDetails.status}</p>
          <p className="sm:text-base text-lg">Type: {landpadDetails.type}</p>
          <p className="sm:text-base text-lg">Locality: {landpadDetails.locality}</p>
          <p className="sm:text-base text-lg">Region: {landpadDetails.region}</p>
          <p className="sm:text-base text-lg">
            Landing Attempts: {landpadDetails.landing_attempts}
          </p>
          <p className="sm:text-base text-lg">
            Landing Successes: {landpadDetails.landing_successes}
          </p>
          <p>
            <Link
              href={landpadDetails.wikipedia}
              className="border-2 p-[0.8vmax] text-base bg-jet-black mr-3"
            >
              Wikipedia
            </Link>
            <Link
              href="/landpads"
              className="border-2 p-[0.8vmax] text-base bg-jet-black"
            >
              Back
            </Link>
          </p>
          <p className="sm:text-base text-lg sm:p-0 p-4">{landpadDetails.details.substring(0,450)}</p>
        </div>
      </div>
    </>
  );
};

export default LandpadDetails;

export async function getStaticPaths(params) {
  const response = await fetch("https://api.spacexdata.com/v4/landpads");
  const data = await response.json();
  const paths = data.map((lId) => {
    return {
      params: {
        landpadId: lId.id,
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
    `https://api.spacexdata.com/v4/landpads/${params.landpadId}`
  );
  const data = await response.json();
  return {
    props: {
      landpadDetails: data,
    },
  };
}
