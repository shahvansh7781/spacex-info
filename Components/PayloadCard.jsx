// import React from 'react'

const PayloadCard = ({ payload }) => {
  return (
    <>
      <div className="bg-jet-black sm:h-[17vmax] sm:w-[22vmax] h-[40vmax] w-[36vmax] p-4 space-y-2">
        <p className="sm:text-[1.4vmax] font-bold text-[2.3vmax]">
          {payload.name},{payload.type}
        </p>
        <p className="sm:text-[1vmax] text-[2vmax]">
          Mass(in kg):{payload.mass_kg}
        </p>
        <p className="sm:text-[1vmax] text-[2vmax]">
          Customers: {payload.customers[0]}
        </p>
        <p className="sm:text-[1vmax] text-[2vmax]">
          Manufacturers: {payload.manufacturers[0]}
        </p>
        <p className="sm:text-[1vmax] text-[2vmax]">
          Nationality: {payload.nationalities[0]}
        </p>
        <p className="sm:text-[1vmax] text-[2vmax]">Orbit: {payload.orbit}</p>
      </div>
    </>
  );
};

export default PayloadCard;
