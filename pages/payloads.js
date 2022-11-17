import React from "react";
import Navbar from "../Components/Navbar";
import PayloadCard from "../Components/PayloadCard";

const Payload = ({ payloadData }) => {
  return (
    <>
      <div className="pr-8 pl-8">
        <Navbar />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {payloadData.map((payload) => {
          return <PayloadCard key={payload.id} payload={payload} />;
        })}
      </div>
    </>
  );
};

export default Payload;

export async function getStaticProps(params) {
  const response = await fetch("https://api.spacexdata.com/v4/payloads");
  const data = await response.json();

  return {
    props: {
      payloadData: data,
    },
  };
}
