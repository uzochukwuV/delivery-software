import React from "react";
import heroImage from "../../assets/home-image.jpeg";

import CancelIcon from "../misc/CancelIcon";
import ListItem from "../misc/ListItem";
import { Card, CardSection, } from "@mantine/core";
import TrackOrder from "../misc/TrackOrder";
function Hero() {
  return (
    <div className="">
      <div className=" min-h-[780px]  relative">
        <div className=" hero-bg w-full bg-cover absolute top-0 left-0 right-0 bottom-0 " >

        </div>
        <div className=" h-full px-6 pt-20 pb-6">
          <div className="flex flex-col gap-6 justify-start">
            <div className="heroh1  text-white z-20 mt-16">
              <h1 className=" text-[32px] font-medium">
                We are US largest fully integrated {" "}
                <span className=" text-red-500">logistics services</span> provider{" "}
              </h1>
            </div>
            <div className="service-list z-20 text-white flex justify-between pe-8">
              <div className=" flex-1">
              <ListItem text="Express Parcel" />
              <ListItem text="Cross Border   " />
              </div>
                
               <div className=" flex-1">
               <div className=" flex gap-4">
                    <ListItem text="PTL" />
                    <ListItem text="FTL" />
                </div>
                
                <ListItem text="Supply Chain" />
               </div>
            </div>
            <Card className=" w-[100%] h-[420px] mx-auto rounded-sm mt-4  shadow-lg bg-white">
              <CardSection className="p-6">
                  <div className="border-b flex gap-8">
                    <div className="font-semibold border-b-rose-500 border-b-[3px] text-xl text-slate-800">Track order</div>
                    <div className="font-semibold  border-b-4 text-xl text-slate-800">Ship order</div>
                  </div>

                  <TrackOrder />
                  
              </CardSection>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
