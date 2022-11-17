import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Navbar from '../Components/Navbar';

const Rocket = ({rocketData}) => {
  return (
    <>
    <div className="pr-8 pl-8">
    <Navbar/>
    </div>
    <p className='text-center text-[50px] font-bold'>Rockets</p>
<div className='flex justify-center gap-10 mt-16 flex-wrap gap-y-28'>
{
    rocketData.map((rocket)=>{

        return (
            <Link key={rocket.id} href={`rocketDetails/${rocket.id}`}>
            <div className='h-96 w-96 text-center space-y-2'>
            <Image src={rocket.flickr_images[0]} alt="" height={500} width={500} className="h-96 w-96 object-cover"  />
            <p className='text-[25px]'> {rocket.name} </p>
            </div>
            </Link>
        )
        
    })
}
</div>
    

    </>
  )
}

export default Rocket;

export async function getStaticProps(params) {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    const data = await response.json();

    return {
        props:{
            rocketData:data
        }
    }
}