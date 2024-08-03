import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createProductToTrack, getProduct, updateProduct } from "../../../db/actions";
import {  useState } from "react";
import { ProductInterface } from "../../../constants/names";

export async function loader( {params} :any) {
    try {
        var data = await getProduct(params.productId)
        var doc= data.data();
        return { data:doc, id: data.id };
    } catch (error) {
        return null;
    }
    //NAxwMfkDGJappSHB9pSqP25OI
  }

  const defaultState = {
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    sender_location: "",
    reciever_name: "",
    reciever_email: "",
    reciever_phone: "+91",
    reciever_location: "",
    product: " ",
    quantity: 1,
    package_weight: "",
    deliver_status: "In Transit",
    no_of_package: 1,
    picked_time: new Date(Date.now() - 5).toDateString(),
    transit_time: new Date(Date.now() - 3).toDateString(),
    packing_time: new Date(Date.now() - 2).toDateString(),
    pickup_time: new Date(Date.now() - 1).toDateString(),
    type_of_shipment: "Van , Truck",
    ref: "ref"
  }


  export async function action({ request }:any) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const r =await createProductToTrack(updates);
    console.log(r);
    
    return redirect(`/main/admin/`);
  }
  

function CreateProductForm() {
    const loader:any = useLoaderData();
    const navigate = useNavigate()
    const [data, setData] = useState<ProductInterface|null|any>(loader?.data|| defaultState);
    
    const updateData= async (e:any)=> {
      e.preventDefault();

      await updateProduct(loader?.id, data);
      alert("Data updated")
     navigate(""); 
    }

   const handleChange = (e: any)=> {
    var {name, value} = e.target;

    console.log(name, value);
    
    setData({...data, [name]: value})
    
   }





  return (
    <>
    
<div className="min-h-screen mt-12 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto md:max-w-4xl">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Create an Transit</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">Create a pickup tracking data</p>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <Form  method="post">
          <div className="flex gap-6 flex-col sm:flex-row">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Sender Name</label>
              <input required  value={data?.sender_name} name="sender_name" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Sender Email</label>
              <input required  value={data?.sender_email} name="sender_email" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Sender Phone</label>
              <input required value={(data as ProductInterface).sender_phone} name="sender_phone" onChange={handleChange}  type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Sender Location</label>
              <input required value={(data as ProductInterface).sender_location} name="sender_location" onChange={handleChange}  type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Product</label>
              <input required value={(data as ProductInterface).product} name="product" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Packing Time</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input required value={(data as ProductInterface).packing_time} name="packing_time" onChange={handleChange} type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Pickup time</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input required value={(data as ProductInterface).pickup_time} name="pickup_time" onChange={handleChange} type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Delivery Status</label>
              <input required value={(data as ProductInterface).deliver_status} name="deliver_status" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
            </div>
          </div>
          {/*  */}

          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Reciever Name</label>
              <input required value={(data as ProductInterface).reciever_name} name="reciever_name" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Reciever Email</label>
              <input required value={(data as ProductInterface).reciever_email} name="reciever_email" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Reciever Phone</label>
              <input required value={(data as ProductInterface).reciever_phone} name="reciever_phone" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Reciever Location</label>
              <input required value={(data as ProductInterface).reciever_location} name="reciever_location" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Quantity</label>
              <input required value={(data as ProductInterface).quantity} name="quantity" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Picked Time</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input required value={(data as ProductInterface).picked_time} name="picked_time" onChange={handleChange} type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Transit Time</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input required value={(data as ProductInterface).transit_time} name="transit_time" onChange={handleChange} type="date" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Type of Shipment</label>
              <input required value={(data as ProductInterface).type_of_shipment} name="type_of_shipment" onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
            </div>
          </div>
          </div>
          <div className="pt-4 flex items-center space-x-4">
              <button role="log" onClick={updateData} className="flex justify-center items-center w-full text-gray-300 px-4 py-3 rounded-md focus:outline-none">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 30"></path></svg> Update
              </button>
              <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
          </div>
          </Form>
         
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CreateProductForm