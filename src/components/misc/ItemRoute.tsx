import { ProductInterface } from "../../constants/names";
import { format } from "../../constants/utils";





function ItemRoute({data}:{data:ProductInterface}) {

  
  
  return (
    <div className=" md:flex md:px-8 lg:px-16 md:gap-20 md:pt-20">
      <div className=" flex-1">
        <div className="title text-lg font-semibold text-center py-4">
          Tracking Detail
        </div>
        <div className="ref flex justify-between items-start px-4">
          <div className=" space-y-2">
            <p className=" text-sm font-medium">Reference ID</p>
            <h3 className=" text-3xl font-semibold">#{format(data.ref!)}</h3>
          </div>
          <div className="status">
            <div className="border py-1 px-3 text-sm font-medium rounded-full" >
              In Transit
            </div>
          </div>
        </div>
        <div className="tracker py-6">
          <div className=" flex justify-center items-center">
            <div className="w-4 h-4 rounded-full  bg-indigo-500"></div>
            <div className="flex-1 h-1 rounded-full bg-indigo-500 -ms-1"></div>
            <div className="w-4 h-4 z-10 -ms-1 rounded-full bg-indigo-500"></div>
            <div className="flex-1 h-1 rounded-full bg-indigo-100 -ms-1"></div>
            <div className="w-4 h-4 z-10 -ms-1 rounded-full bg-indigo-100"></div>
            <div className="flex-1 h-1 rounded-full bg-indigo-100 -ms-1"></div>
            <div className="w-4 h-4 z-10 -ms-1 rounded-full bg-indigo-100"></div>
          </div>
        </div>
        <div className="detail grid grid-cols-2 gap-4 px-4">
          <div className="detail-item">
            <p className=" font-semibold">From</p>
            <p className="">{data.sender_location}</p>
            <p className="">R345</p>
          </div>
          <div className="detail-item">
            <p className=" font-semibold">To</p>
            <p className="">{data.reciever_location}</p>
            <p className="">R564</p>
          </div>
          <div className="detail-item">
            <p className=" font-semibold">Dispatch</p>
            <p className="">{data.picked_time}</p>
          </div>
          <div className="detail-item">
            <p className=" font-semibold">ETA</p>
            <p className="">{data.pickup_time}</p>
          </div>
          <div className="detail-item">
            <p className=" font-semibold">Sender</p>
            <p className="">{data.sender_name}</p>
            <p className=" text-xs">{data.sender_email}</p>
          </div>
          <div className="detail-item">
            <p className=" font-semibold">Reciever</p>
            <p className="">{data.reciever_name}</p>
            <p className=" text-xs">{data.reciever_email}</p>
          </div>
        </div>

        {/*  */}

        <div className=" px-4 md:pt-10">
        <div className="title text-lg font-bold  py-4">
          Product / Shipment Details
        </div>
        <div className="  md:grid md:grid-cols-2">
          <div>
            <p className=" font-semibold ">Carrier Reference No:</p>
            <p>LI098171</p>
          </div>
          <div>
            <p className=" font-semibold ">Product</p>
            <p>{data.product}</p>
          </div>
          <div>
            <p className=" font-semibold ">Qty</p>
            <p>{data.quantity}</p>
          </div>
          <div>
            <p className=" font-semibold ">Product Weight</p>
            <p>{data.package_weight}</p>
          </div>
          <div>
            <p className=" font-semibold ">Payment Mode</p>
            <p>Others</p>
          </div>
          <div>
            <p className=" font-semibold ">Shipment history</p>
          </div>
        </div>
      </div>
        {/*  */}
        <div className=" py-6">
          <div className="w-20 h-1 bg-slate-500 rounded-full mx-auto"></div>
        </div>
      </div>
      
      <div className=" flex-1 sm:px-6">
        <div className="title text-lg font-bold  py-4">Live Tracking</div>
        <div className="flex h-[450px] py-6 gap-6">
          {
            data.deliver_status == "packing" ? (<div className=" flex flex-col justify-center items-center h-full">
              <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full  border-indigo-100  -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100 "></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-100 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-100 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100"></div>
              <div className="h-[72px]"></div>
            </div>):"" 
          }
          {
            data.deliver_status == "processing"? (<div className=" flex flex-col justify-center items-center h-full">
              <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-500  -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500 "></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-100 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-100 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100"></div>
              <div className="h-[72px]"></div>
            </div>):""
          }

          {
            data.deliver_status == "transit"? (<div className=" flex flex-col justify-center items-center h-full">
              <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-500 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full bg-indigo-500  -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500 "></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-100 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-100"></div>
              <div className="h-[72px]"></div>
            </div>): ""
          }
          {
            data.deliver_status == "ready"? (<div className=" flex flex-col justify-center items-center h-full">
              <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-500  -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500 "></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-500 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500"></div>
              <div className="flex-1 border-2 border-dashed rounded-full border-indigo-500 -mt-2"></div>
              <div className="w-4 h-4 z-10 -mt-2 rounded-full bg-indigo-500"></div>
              <div className="h-[72px]"></div>
            </div>): ""
          }
          <div className=" flex flex-col flex-1 justify-center  h-full">

          <div className="flex-1 flex gap-2 justify-between">
              <div>
                <p className=" font-semibold text-lg">Packing</p>
                <p>{data.reciever_location}</p>
              </div>
              <div>
                <p>{data.packing_time}</p>
                <p>11:00am</p>
              </div>
            </div>

            <div className="flex-1 flex gap-2 justify-between">
              <div>
                <p className=" font-semibold text-lg">
                  You package is been processed for dispatch..
                </p>
                <p>{data.reciever_location}</p>
              </div>
              <div>
                <p>{ data.picked_time }</p>
                <p>11.00am</p>
              </div>
            </div>

            <div className="flex-1 flex gap-2 justify-between">
              <div>
                <p className=" font-semibold text-lg">In Transit</p>
                <p>{data.reciever_location}</p>
              </div>
              <div>
                <p>{data.transit_time}</p>
                <p>5:00pm</p>
              </div>
            </div>

            

            <div className="flex-1 flex gap-2 justify-between">
              <div>
                <p className=" font-semibold text-lg">Ready for Pickup</p>
                <p>Now</p>
              </div>
              <div>
                <p>{data.pickup_time}</p>
                <p>12:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemRoute;
