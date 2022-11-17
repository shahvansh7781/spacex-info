import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Navbar from '../../Components/Navbar';

const Rocketdetails = ({rocketDetails}) => {
  return (
    <>
    <div className="pr-8 pl-8">
    <Navbar/>
    </div>
    <div className='flex justify-center mt-10'>
    <div className='w-2/5'>
    <Image src={rocketDetails.flickr_images[0]} alt="" height={500} width={500} className="h-[35vmax] w-[38vmax] object-cover" />
    </div>
    <div className='w-2/5 space-y-[2.5vmax]'>
    <p className='text-2xl font-bold'> {rocketDetails.name} </p>
    <p className='text-lg'> First Flight: {rocketDetails.first_flight} </p>
    <div className='flex gap-4'>
    <div className='bg-jet-black w-[18vmax] p-[1vmax] text-base'>
    <p> Country: {rocketDetails.country} </p>
    <p> Height: {rocketDetails.height.meters} m </p>
    <p> Diameter: {rocketDetails.diameter.meters} m </p>
    <p> Mass: {rocketDetails.mass.kg} kg </p>
    </div>
    <div className='bg-jet-black w-[18vmax] p-[1vmax] text-base'>
    <p className='text-center font-bold'>Engine Details</p>
    <p> Type: {rocketDetails.engines.type} </p>
    <p> Propellant 1: {rocketDetails.engines.propellant_1} </p>
    <p> Propellant 2: {rocketDetails.engines.propellant_2} </p>
    <p> Thrust/Weight Ratio: {rocketDetails.engines.thrust_to_weight} </p>
    </div>
    </div>
    <div>
        <Link href={rocketDetails.wikipedia} className="border-2 p-[0.8vmax] text-base bg-jet-black mr-3">Wikipedia</Link>
        <Link href="/rockets" className="border-2 p-[0.8vmax] text-base bg-jet-black">Back</Link>
        <p className="mt-9 text-sm">{rocketDetails.description}</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Rocketdetails;

export async function getStaticPaths(params) {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await response.json();

 const paths = data.map((rId)=>{
    return {
        params:{
            rocketId:rId.id
        }
    }
    })

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
const {params} = context;
const response = await fetch(`https://api.spacexdata.com/v4/rockets/${params.rocketId}`);
const data = await response.json();
    return {
        props:{
            rocketDetails:data
        }
    }
}