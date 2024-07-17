
import Road1 from "../assets/road1";

function Roadmap() {
  return (
    <div className=" bg-white px-6 py-8">
      <div className=" ">
        <h2 className=" text-xl text-slate-600 font-medium">
          Flexibility, Reliability and Scale
        </h2>
        <p className=" font-bold text-xl">The Answer is Delhivery</p>
        <div className=" w-16 border-b-4 border-b-rose-500 mt-2"></div>
      </div>
      <div className="">
        <div className=" h-[560px] mx-auto mt-10 mb-5 w-[336px] bg-uproad bg-no-repeat bg-white bg-contain  before:content-road before:mt-[100px] before:m-auto before:absolute">
          <div className="h-full gap-2 pb-8  flex flex-col">
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
            <RoadmapItem />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

function RoadmapItem() {
  return (
    <div className="flex-1 relative before:border-l-4 before:absolute before:top-4 before:h-14 before:ml-1 before:left-0  before:border-l-rose-400 before:content-[''] flex px-6 justify-center items-center roadmap-item">
      <div className="roadmap-item flex gap-3 items-center">
        <div className="roadmap-item-img-wrapper">
          <Road1 />
        </div>
        <div className="roadmap-item-text-wrapper">
          <h3 className=" font-bold text-xl">2.1 Bn+</h3>
          <p className=" text-[11px] text-slate-500">Parcels Shipped since inception</p>
        </div>
      </div>
    </div>
  );
}
