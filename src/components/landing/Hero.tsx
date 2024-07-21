import ListItem from "../misc/ListItem";
import { Card, CardSection } from "@mantine/core";
import TrackOrder from "../misc/TrackOrder";
function Hero() {
  return (
    <div className=" pt-14 md:pt-20">
      <div className=" min-h-[600px] lg:m-6  relative">
        <div className=" hero-bg w-full bg-cover absolute top-0 left-0 right-0 bottom-0 "></div>
        <div className=" h-full bg-gradient-to-r from-black via-transparent to-transparent px-6 pt-20 pb-6">
          <div className="flex  flex-col md:flex-row justify-between gap-6 items-center pt-16">
            <div className="  z-20 max-w-2xl space-y-6 ">
              <div className="heroh1  text-white  ">
                <h1 className=" text-[32px] lg:text-[48px] font-medium">
                  We are US largest fully integrated{" "}
                  <span className=" text-red-500">logistics services</span>{" "}
                  provider{" "}
                </h1>
              </div>
              <div className="service-list text-white flex justify-between pe-8">
                <div className=" flex-1 md:flex gap-4">
                  <ListItem text="Express Parcel" />
                  <ListItem text="Cross Border   " />
                </div>

                <div className=" flex-1 md:flex gap-4">
                  <div className=" flex gap-4">
                    <ListItem text="PTL" />
                    <ListItem text="FTL" />
                  </div>

                  <ListItem text="Supply Chain" />
                </div>
              </div>
            </div>
            <div className="  w-full">
              <Card w={"100%"} shadow="sm" maw={500} className="  h-[420px] mx-auto lg:mr-0 rounded-sm mt-4  shadow-lg bg-white">
                <CardSection className="p-6">
                  <div className="border-b flex gap-8">
                    <div className="font-semibold border-b-rose-500 border-b-[3px] text-xl text-slate-800">
                      Track order
                    </div>
                    <div className="font-semibold   text-xl text-slate-800">
                      Ship order
                    </div>
                  </div>

                  <TrackOrder />
                </CardSection>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
