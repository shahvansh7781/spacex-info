import Image from 'next/image';
import React from 'react'
import Navbar from '../Components/Navbar';

const Ships = ({shipData}) => {
  return (
   <>
   <div className='pr-8 pl-8'>
    <Navbar/>
   </div>
   <div className='flex flex-wrap justify-center gap-10 gap-y-40 mt-10'>
{
    shipData.map((ship)=>{
return (
    <>
    <div key={ship.id} className="w-[420px] h-[400px] text-center space-y-4">
        <Image src={ship.image ? (ship.image):(shipData[0].image)} alt="No image" height={600} width={600} className="object-cover w-[420px] h-[400px]" />
        <div className='text-[22px]'>
        <p>Name: {ship.name} </p>
        <p>Port: {ship.home_port} </p>
        <p>Type: {ship.type} </p>
        </div>
    </div>
    </>
)
    })
}
   </div>
   </>
  )
}

export default Ships;

export async function getStaticProps(params) {
    const response = await fetch("https://api.spacexdata.com/v4/ships");
    const data = await response.json();

    return {
        props:{
            shipData:data
        }
    }
}