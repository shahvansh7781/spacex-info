// import React from 'react'

const StarlinkCard = ({ starlink }) => {
  return (
    <>
      <div className="bg-jet-black sm:w-[21vmax] sm:h-[12vmax] h-[15vmax] w-[25vmax] sm:flex sm:flex-wrap sm:gap-2 sm:place-content-center flex flex-col justify-center items-center gap-y-2">
        <div className="font-bold sm:text-[1.3vmax] text-[1.8vmax]">
          Name: {starlink.spaceTrack.OBJECT_NAME}
        </div>
        <div className="sm:text-[1vmax] text-[1.5vmax]">
          Launch Date: {starlink.spaceTrack.LAUNCH_DATE}
        </div>
        <div className="sm:text-[1vmax] text-[1.5vmax]">
          Decay Date: {starlink.spaceTrack.DECAY_DATE}
        </div>
      </div>
    </>
  );
};

export default StarlinkCard;
