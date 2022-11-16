import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../Components/Navbar";

const LandpadDetails = ({landpadDetails}) => {
  return (
    <>
    <div className="pr-8 pl-8">
        <Navbar/>
    </div>
    <div className="flex justify-center p-6">
        <div className="w-2/5">
<Image src={landpadDetails.images.large[0]} alt="" width={500} height={500} className="h-[35vmax] w-[35vmax]"/>
        </div>
        <div className="w-1/2 space-y-[1.4vmax]">
<p className="text-2xl font-bold">{landpadDetails.full_name}</p>
<p className="text-base">Status: {landpadDetails.status}</p>
<p className="text-base">Type: {landpadDetails.type}</p>
<p className="text-base">Locality: {landpadDetails.locality}</p>
<p className="text-base">Region: {landpadDetails.region}</p>
<p className="text-base">Landing Attempts: {landpadDetails.landing_attempts}</p>
<p className="text-base">Landing Successes: {landpadDetails.landing_successes}</p>
<p>
<Link href={landpadDetails.wikipedia} className="border-2 p-[0.8vmax] text-base bg-jet-black mr-3">Wikipedia</Link>
<Link href="/landpads" className="border-2 p-[0.8vmax] text-base bg-jet-black">Back</Link>
</p> 
<p className="text-base">{landpadDetails.details}</p>
        </div>
    </div>
    </>
  );
};

export default LandpadDetails;

export async function getStaticPaths(params) {
    const response = await fetch("https://api.spacexdata.com/v4/landpads");
    const data = await response.json();
    const paths =  data.map((lId)=>{
        return {
            params:{
                landpadId:lId.id
            }
        }
     })

     return {
        paths,
        fallback:false
     }
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
