import React from 'react'

const PayloadCard = ({payload}) => {
  return (
    <>
    <div className="bg-jet-black h-80 w-96 p-4 space-y-2">
    <p className="text-[25px] font-bold">{payload.name},{payload.type}</p>
    <p className='text-[20px]'>Mass(in kg):{payload.mass_kg}</p>
    <p className='text-[20px]'>Customers: {payload.customers[0]} </p>
    <p className='text-[20px]'>Manufacturers: {payload.manufacturers[0]} </p>
    <p className='text-[20px]'>Nationality: {payload.nationalities[0]} </p>
    <p className='text-[20px]'>Orbit: {payload.orbit}</p>
    </div>
    </>
  )
}

export default PayloadCard;