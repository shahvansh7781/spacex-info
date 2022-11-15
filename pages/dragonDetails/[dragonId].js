import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../Components/Navbar";

const DragonDetails = ({ dragonDetails}) => {
  return (
      <>
<div className="pr-8 pl-8">
    <Navbar/>
</div>
<div className="flex justify-center">
    <div className="w-2/5">
        <Image src={dragonDetails.flickr_images[2]} alt="" width={600} height={600} className="h-[35vmax] w-[35vmax] object-cover"/>
    </div>
    <div className="w-1/2">
        <div className="p-6">
        <p className="text-2xl font-bold">{dragonDetails.name}</p>
        <p className="text-lg font-medium">First Flight: {dragonDetails.first_flight}</p>
        </div>
        <div className="flex text-base">
            <div className="p-6 space-y-2">
                <p>Type: {dragonDetails.type}</p>
        <p>Crew: {dragonDetails.crew_capacity}</p>
        {dragonDetails.active ?  (<p>Active</p>) : (<p>Not Active</p>)}
        <p>Dry Mass: {dragonDetails.dry_mass_kg}kg</p>
        </div>
        <div className="flex gap-5 text-sm">

            <div className="bg-jet-black p-6 space-y-2">
              <p className="uppercase">Heat Shield Details</p>  
              <p>Material: {dragonDetails.heat_shield.material}</p>
              <p>Size: {dragonDetails.heat_shield.size_meters}m</p>
              <p>Temperature: {dragonDetails.heat_shield.temp_degrees}°</p>
              <p>Developement Partner: {dragonDetails.heat_shield.dev_partner}</p>
            </div>
            <div className="bg-jet-black p-6 space-y-2">
              <p className="uppercase">Thrusters</p>  
              <p>Type: {dragonDetails.thrusters[0].type}</p>
              <p>Fuel 1: {dragonDetails.thrusters[0].fuel_1}</p>
              <p>Fuel 2: {dragonDetails.thrusters[0].fuel_2}</p>
              <p>Thrust: {dragonDetails.thrusters[0].thrust.kN}kN</p>
            </div>
        </div>
        </div>
        <div className="p-6">
        <Link href={dragonDetails.wikipedia} className="border-2 p-[0.8vmax] text-base bg-jet-black mr-3">Wikipedia</Link>
        <Link href="/dragons" className="border-2 p-[0.8vmax] text-base bg-jet-black">Back</Link>
        <p className="mt-10 text-sm">{dragonDetails.description}</p>
        </div>
    </div>
</div>
      </>

  )
  
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
  const response = await fetch(`https://api.spacexdata.com/v4/dragons/${params.dragonId}`);
  const data = await response.json();
  return {
    props: {
      dragonDetails: data,
    },
  };
}
