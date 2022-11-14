import React from "react";

const CapsuleCard = ({capsule}) => {
  return (
    <>
      <div className="h-96 w-96 bg-jet-black h-">
        <div className="p-4 text-[30px] font-medium">
          <p>{capsule.type},{capsule.serial}</p>
        </div>
        <div className="p-4 text-[18px] flex-col space-y-[16px]">
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
