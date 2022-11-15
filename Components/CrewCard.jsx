import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CrewCard = ({crew}) => {
  return (
    <Link href={crew.wikipedia}>
    <div className="flex-col h-96 w-80 space-y-3">
        <Image src={crew.image} alt="" className="h-96 w-80 object-cover" width={320} height={384}/>
        <p className='text-center font-medium text-[22px]'>{crew.name}</p>
    </div>
    </Link>
  )
}

export default CrewCard;