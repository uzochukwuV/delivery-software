import { Button } from "@mantine/core";
import { SITE_NAME } from "../../constants/names";


const SERVICE = [
  {
    title: "Express Parcel Services",
    subtitle: `Send shipments across US and Canada for parcels across categories including
          heavy goods. Get value added services like RTO reduction tools,
          door-step inspection and tracking`,
    image: "s2.jpg"
  },
  {
    title: "Carrie Management",
    subtitle: `Through our industry experience and relationships with a top-tier carrier network, we negotiate the least cost truckload and LTL rates. Using Pro Ship, the manual process of soliciting rates from carriers one by one is eliminated.

`,
    image: "s7.jpg"
  },
  {
    title: "Warehousing Services",
    subtitle: `We have dedicated and secure warehousing where customers consignment are been kept while processing clearance .`,
    image: "s3.jpg"
  },
  {
    title: "Freight and leavrage Pricing",
    subtitle: `Working with Express Logistics, you can save an average of 15% to 20% off your freight costs. With thousands of loads per week, we are able to offer volume pricing and lane optimization. Within seconds, you can obtain pricing and transit time data from more than 30 of the top LTL carriers in the industry.`,
    image: "s4.jpg"
  },
  {
    title: "Deliver Van",
    subtitle: `Consignment are deliver to our client irrespective of destination within the country, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance,`,
    image: "s5.jpg"
  },
  {
    title: "Ocean Freight Services",
    subtitle: `International Sea freight Freighters per week to Lagos Import Customs clearance and delivery to any Nigerian Destination Export Sea freight by scheduled and Charter services...`,
    image: "s6.jpg"
  }
]


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
            {
              SERVICE.map((e,i)=> <ServiceCard key={i}  title={e.title} subtitle={e.subtitle} image={e.image} />)
            }
            
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

function ServiceCard({title, subtitle, image}:any) {
  
  return (
    <div className="service-card group relative bg-white p-2 sm:h-[440px] hover:shadow-lg  rounded-lg shadow-sm">
      <div className="rounded-md h-3/5 lg:h-2/5 relative  ">
      <div className="h-full min-h-40"></div>
        <div className=" absolute bottom-0 top-0 left-0 right-0">
        <img src={`src/assets/services/${image}`} height={30} width={30} className="w-full h-full object-cover rounded-md" />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 z-[1000px] min-h-40 bg-cover flex items-end p-4 bg-gradient-to-b from-transparent via-transparent to-black">
          <h3 className=" text-white font-semibold text-2xl">
           {title}
          </h3>
        </div>
      </div>
      <div className="h-2/5  py-3 space-y-4 lg:h-3/5 lg:flex lg:py-6 lg:flex-col lg:justify-between ">
        <div className="px-3 text-slate-500">
          {subtitle}
        </div>
        <div className="card-link group-hover:*:text-rose-500  p-3 lg:py-0">
          <p className=" text-slate-800 font-bold">
            Know More
          </p>
        </div>
      </div>
    </div>
  );
}
