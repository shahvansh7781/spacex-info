import Link from 'next/link'
import React from 'react'
import CrewCard from '../Components/CrewCard'
import Navbar from '../Components/Navbar'

const Crew = ({crewData}) => {
  return (
<>
<div className='pr-8 pl-8'>
    <Navbar/>
</div>
<div className="flex gap-16 flex-wrap pr-8 pl-8 justify-center gap-y-36 mt-10">
{
    crewData.map((crew)=>{
         return <Link href={crew.wikipedia} key={crew.id}>
            <CrewCard crew={crew}/>
         </Link>
    })
}
</div>
</>
  )
}

export default Crew;

export async function getStaticProps(params) {
    const response = await fetch("https://api.spacexdata.com/v4/crew");
    const data = await response.json();
    return {
        props:{
            crewData:data
        }
    }
}