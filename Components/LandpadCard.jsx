// import React from 'react'
import Image from "next/image";
import Link from "next/link";
const LandpadCard = ({ landpad }) => {
  return (
    <Link href={`landpadDetails/${landpad.id}`}>
      <div className="sm:w-[25vmax] sm:h-[25vmax] h-[30vmax] w-[30vmax] relative">
        <Image src={landpad.images.large[0]} alt="img" fill />
      </div>
      <p className="font-medium sm:text-[1.3vmax] text-[2vmax] text-center mt-4">
        {landpad.name}
      </p>
    </Link>
  );
};

export default LandpadCard;
