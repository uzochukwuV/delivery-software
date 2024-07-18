import { ActionIcon, NavLink } from "@mantine/core";
import React from "react";

function Solution() {
  return (
    <div className=" bg-black px-6 py-8">
      <div className=" solution-wrapper">
        <div className=" ">
          <h2 className=" text-xl text-slate-200 font-medium">
            Trexpress's suite of solutions for
          </h2>

          <div className=" w-16 border-b-4 border-b-rose-500 mt-1"></div>
        </div>
        <div className="flex flex-col gap-4 mt-8 *:text-slate-200">
          <SolutionItem />
          <SolutionItem />
          <SolutionItem />
          
        </div>
      </div>
    </div>
  );
}

export default Solution;



function SolutionItem(){
    return <div className="solution-item flex flex-col gap-4">
    <div className="solution-item-img">
      <img src="./assets/solution1.png" />
    </div>
    <div className="solution-item-text ">
      <h3>D2C Brands</h3>
      <p>
        We provide an integrated logistics solution built on Express
        Parcel, Cross Border, Warehousing, Freight and Software value
        added services that helps brands deliver faster and provide a
        superior experience
      </p>
    </div>
    <div className="solution-item-link mt-2">
      <a href="">Know More</a>
    </div>
  </div>
}