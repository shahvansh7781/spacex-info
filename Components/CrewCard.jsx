import Image from 'next/image'
import React from 'react'

const CrewCard = ({crew}) => {
  return (
    <>
    <div className="flex-col h-96 w-80 space-y-3">
        <Image src={crew.image} alt="" height={384} width={320}/>
        <p className='text-center font-medium text-[22px]'>{crew.name}</p>
    </div>
    </>
  )
}

export default CrewCard