import React from "react";
import CapsuleCard from "../Components/CapsuleCard";
import Navbar from "../Components/Navbar";

const Capsule = ({capsuleData}) => {
  return (
    <>
      <div className="pl-8 pr-8">
        <Navbar />
      </div>
      <div className="flex gap-6 justify-center flex-wrap">
        {
          capsuleData.map((capsule)=>{
            return <CapsuleCard key={capsule.id} capsule={capsule}/>
          })
        }
      </div>
    </>
  );
};

export default Capsule;

export async function getStaticProps() {
  const response = await fetch("https://api.spacexdata.com/v4/capsules");
  const data = await response.json();
  return {
    props:{
      capsuleData:data
    }
  }
}