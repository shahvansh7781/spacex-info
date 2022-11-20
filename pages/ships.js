import Image from 'next/image';
import React from 'react'
import Navbar from '../Components/Navbar';

const Ships = ({shipData}) => {
  return (
   <>
   <div className='pr-8 pl-8'>
    <Navbar/>
   </div>
   <div className='sm:flex sm:flex-row sm:flex-wrap justify-center gap-10 gap-y-[4vmax] mt-12 flex flex-col items-center'>
{
    shipData.map((ship)=>{
return (
    <>
    <div>
    <div key={ship.id} className="sm:w-[24vmax] sm:h-[22vmax] relative h-[25vmax] w-[28vmax]">
        <Image src={ship.image ? (ship.image):(shipData[0].image)} alt="No image" fill />
    </div>
        <div className='sm:text-[1.3vmax] text-[1.7vmax] text-center mt-2'>
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