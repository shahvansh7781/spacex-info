import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const LandpadCard = ({landpad}) => {
  return (
    <Link href={`landpadDetails/${landpad.id}`}>
    <div className='w-96 h-96 text-center space-y-3'>
        <Image src={landpad.images.large[0]} alt="img" height={500} width={500} className="h-96 w-96 object-cover"/>
        <p className="font-medium text-[22px]">{landpad.name}</p>
    </div>
    </Link>
  )
}

export default LandpadCard;