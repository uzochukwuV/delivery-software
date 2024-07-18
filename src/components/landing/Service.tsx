import { Button } from "@mantine/core";
import React from "react";

function Service() {
  return (
    <>
    <div id="service" className=" px-6 py-8">
      <div className="service-wrapper">
        <div className=" ">
          <h2 className=" text-xl text-slate-800  font-medium">
            <span className="font-bold">Services</span> that power our solutions
            and ecosystem
          </h2>

          <div className=" w-16 border-b-4 border-b-rose-500 mt-1"></div>
        </div>
        <div className="service-card-wrapper p-2 mt-8 flex flex-col gap-6">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          
        </div>
        
      </div>
    </div>
    <div className="bg-black py-10 flex justify-center items-center">
    <div className=" *:text-white w-4/5 max-w-md space-y-5">
        <h2 className=" text-center text-xl mb-0 pb-0">Experience the operating Logistics system for personal and commercial purposes in US</h2>
        <p className=" text-xs text-center text-slate-300">Sign up now to start shipping with Delhivery</p>
        <div className=" flex justify-between space-x-6">
            <Button bg={"white"} color="black" c={"black"} bgsz={"md"} size="sm" fz={"xs"} className=" text-sm bg-white text-slate-800">Personal Courier</Button>
            <Button bg={"white"} color="black" c={"black"} bgsz={"md"} fz={"xs"}  className=" text-sm bg-white text-slate-800">Business Shipment</Button>
        </div>
    </div>
</div>
</>
  );
}

export default Service;



function ServiceCard() {
    return <div className="service-card bg-white p-2 h-[440px] rounded-lg shadow-sm">
    <div className="rounded-md h-3/5 bg-serviceone">
    <div className="h-full flex items-end p-4 bg-gradient-to-b from-transparent via-transparent to-black">
    <h3 className=" text-white font-semibold text-2xl">Express Parcel Services</h3>
    </div>
    </div>
    <div className="h-2/5 py-3 space-y-4">
      <div className="px-3 text-slate-600">
        Send shipments across India for parcels across categories
        including heavy goods. Get value added services like RTO
        reduction tools, door-step inspection and tracking
      </div>
      <div className="card-link  p-3">
        <a href="" className=" text-slate-800 font-bold">Know More</a>
      </div>
    </div>
  </div>
}