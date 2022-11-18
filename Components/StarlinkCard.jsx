import React from 'react'

const StarlinkCard = ({starlink}) => {
  return (
    <>
    <div className="bg-jet-black w-[400px] h-[180px] grid gap-2 place-content-center">
        <div className='font-bold text-[25px]'> Name: {starlink.spaceTrack.OBJECT_NAME} </div> 
        <div className='text-[18px]'>Launch Date: {starlink.spaceTrack.LAUNCH_DATE} </div>
        <div className='text-[18px]'>Decay Date: {starlink.spaceTrack.DECAY_DATE} </div> 
    </div>
    </>
  )
}

export default StarlinkCard;