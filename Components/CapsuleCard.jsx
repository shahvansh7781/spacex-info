// import React from "react";

const CapsuleCard = ({ capsule }) => {
  return (
    <>
      <div className="sm:h-[20vmax] sm:w-[20vmax] h-[30vmax] w-[30vmax] bg-jet-black">
        <div className="sm:p-[1vmax] sm:text-[1.7vmax] font-bold p-[1.7vmax] text-[2.5vmax]">
          <p>
            {capsule.type},{capsule.serial}
          </p>
        </div>
        <div className="sm:p-[1vmax] sm:text-[1vmax] sm:space-y-[0.8vmax] flex-col p-[1.9vmax] text-[1.4vmax] space-y-[1.2vmax]">
          <div>Water Landings: {capsule.water_landings}</div>
          <div>Reuse Count: {capsule.reuse_count}</div>
          <div>Land Landings: {capsule.land_landings}</div>
          <div>{capsule.last_update}</div>
          <div>Status {capsule.status}</div>
        </div>
      </div>
    </>
  );
};

export default CapsuleCard;
