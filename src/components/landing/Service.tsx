import { Button } from "@mantine/core";
import { SITE_NAME } from "../../constants/names";


function Service() {
  return (
    <>
      <div id="service" className=" px-6 py-8">
        <div className="service-wrapper md:flex md:gap-10 lg:gap-32">
          <div className=" md:w-36 ">
            <h2 className=" text-xl text-slate-800 md:text-2xl  font-medium">
              <span className="font-bold">Services</span> that power our
              solutions and ecosystem
            </h2>

            <div className=" w-16 border-b-4 border-b-rose-500 mt-1"></div>
          </div>
          <div className="service-card-wrapper flex-1 p-2 mt-8 md:mt-0 flex flex-col md:grid md:grid-cols-3 gap-6 lg:gap-10">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
      <div className="bg-black py-10 md:py-20 flex justify-center items-center">
        <div className=" *:text-white w-4/5 max-w-md md:max-w-2xl space-y-5">
          <h2 className=" text-center text-xl md:text-3xl mb-0 md:mb-2 pb-0">
            Experience the operating Logistics system for personal and
            commercial purposes in US
          </h2>
          <p className=" text-xs md:text-sm text-center text-slate-300">
            Sign up now to start shipping with <span className=" font-logo">{SITE_NAME}</span>
          </p>
          <div className=" flex justify-between md:justify-center md:gap-6 space-x-6">
            <Button
              bg={"white"}
              color="black"
              c={"black"}
              w={'100%'}
              bgsz={"md"}
              size="sm"
              fz={"xs"}
              className=" text-sm bg-white text-slate-800"
            >
              Personal Courier
            </Button>
            <Button
              bg={"white"}
              color="black"
              c={"black"}
              w={'100%'}
              bgsz={"md"}
              fz={"xs"}
              className=" text-sm bg-white text-slate-800"
            >
              Business Shipment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

function ServiceCard() {
  return (
    <div className="service-card group bg-white p-2 sm:h-[440px] hover:shadow-lg  rounded-lg shadow-sm">
      <div className="rounded-md h-3/5 lg:h-2/5 bg-serviceone ">
        <div className="h-full min-h-40 bg-cover flex items-end p-4 bg-gradient-to-b from-transparent via-transparent to-black">
          <h3 className=" text-white font-semibold text-2xl">
            Express Parcel Services
          </h3>
        </div>
      </div>
      <div className="h-2/5  py-3 space-y-4 lg:h-3/5 lg:flex lg:py-6 lg:flex-col lg:justify-between ">
        <div className="px-3 text-slate-500">
          Send shipments across US and Canada for parcels across categories including
          heavy goods. Get value added services like RTO reduction tools,
          door-step inspection and tracking
        </div>
        <div className="card-link group-hover:*:text-rose-500  p-3 lg:py-0">
          <a href="" className=" text-slate-800 font-bold">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}
