import Image from "next/image";
import Link from "next/link";
// import React from "react";
import useSWR from "swr";
import Navbar from "../Components/Navbar";
import { RingLoader } from "react-spinners";
const fetcher = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();
  return data;
};

const Launches = () => {
  const { data } = useSWR("launch", fetcher);
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
        <div className="sm:flex sm:flex-row sm:justify-center sm:gap-12 sm:flex-wrap gap-y-[5vmax] mt-10 flex flex-col justify-center items-center">
          {data.map((launch) => {
            let date = new Date(launch.date_utc);
            let month = date.getUTCMonth() + 1;
            let day = date.getUTCDate();
            let year = date.getUTCFullYear();

            return (
              <>
                <Link
                  href={
                    launch.links.article ? launch.links.article : "/launches"
                  }
                >
                  <div className="sm:w-[25vmax] sm:h-[22vmax] h-[25vmax] w-[31vmax] relative">
                    <Image
                      src={
                        launch.links.patch.small
                          ? launch.links.patch.small
                          : launch.links.flickr.original[0]
                      }
                      key={launch.id}
                      alt="no image"
                      fill
                    />
                  </div>
                  <p className="text-center sm:text-[1.2vmax] mt-2 text-[1.7vmax]">
                    {launch.name}
                  </p>
                  <p className="text-center sm:text-[1.2vmax] text-[1.7vmax]">{`Date: ${day}-${month}-${year}`}</p>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Launches;
