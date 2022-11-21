import Image from "next/image";
import Link from "next/link";
// import React from 'react'

const CrewCard = ({ crew }) => {
  return (
    <Link href={crew.wikipedia}>
      <div className="sm:h-[21vmax] sm:w-[17vmax] relative h-[30vmax] w-[27vmax]">
        <Image src={crew.image} alt="" fill />
      </div>
      <p className="text-center font-medium sm:text-[1.3vmax] text-[1.7vmax] mt-3">
        {crew.name}
      </p>
    </Link>
  );
};

export default CrewCard;
