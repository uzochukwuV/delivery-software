import { Button, Divider,  TextInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../db/actions";


function TrackOrder() {
  const [active, useActive] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [ref, useref] = useState("");
  const [orderId, setorderId] = useState("")
  

  var dataInput;
  if(active == 1){
    dataInput = <TextInput
    onChange={(e)=> useref(e.target.value)}
    value={ref}
    maxLength={30}
    width={"100%"}
    className=" border"
    variant="outlined"
    placeholder="Enter Reference ID"
    size="lg"
  />;
  } else if(active == 2){
    {
      dataInput = <TextInput
      width={"100%"}
      className=" border"
      variant="outlined"
      placeholder="Enter AWB number"
      size="lg"
    />;
    }
  }else if(active == 3){
    {
      dataInput = <TextInput
      width={"100%"}
      className=" border"
      variant="outlined"
      onChange={(e)=> setorderId(e.target.value)}
      value={orderId}
      placeholder="Enter Order Id"
      size="lg"
    />;
    }
  }else {
    {
      dataInput = <TextInput
      width={"100%"}
      className=" border"
      variant="outlined"
      placeholder="Enter LRN"
      size="lg"
    />;
    }
  }

  const changeActive=(num:number)=>{
    useActive(num);
  }
  return (
    <div className=" py-6 space-y-4 z-10 ">
      <div>
        <h2 className=" font-medium text-xl">
          {" "}
          <span className=" font-bold">Track</span> your order through
        </h2>
      </div>
      {/* <SegmentedControl p={0} color='red' h={60} flex={1}  fullWidth data={['React', 'Angular', 'Svelte', 'Vue']} /> */}
      <div>
        <div className="border rounded-lg flex">
          <div onClick={()=>changeActive(1)} data-active={active==1}  className="mobile border-r  rounded-l-lg flex-1  text-slate-400 md:font-medium py-2 text-center md:text-lg">
            Ref
          </div>
          <div onClick={()=>changeActive(2)} data-active={active==2} className={ "awb border-r  flex-1  text-slate-400 md:font-medium py-2 text-center md:text-lg "}>
            AWB
          </div>
          <div onClick={()=>changeActive(3)} data-active={active==3} className="orderid border-r  flex-1  text-slate-400 md:font-medium py-2 text-center md:text-lg">
            Order Id
          </div>
          <div onClick={()=>changeActive(4)} data-active={active==4} className="lnr border-r  flex-1 rounded-r-lg  text-slate-400 md:font-medium py-2 text-center md:text-lg">
            LNR
          </div>
        </div>
      </div>
      <div className="inputmode">
        {dataInput}
        {
          error.length > 1 ? <p className=" text-red-500">{error}</p>: ""
        }
      </div>
      <div>
        
        <Button  fullWidth variant="filled" size="lg" color="black" onClick={async()=>{
          //yiDhsgk5oYF7QaMaqIeu
          //NAxwMfkDGJappSHB9pSq
          
          var data = await getProduct(ref);
          console.log(data.id);
          
          if(data.id){
            navigate(`track/${data.id}`)
          }else{
            setError("No tracking code or product found")
          }
          
        }}>
          Track now
        </Button>
        
        
      </div>
      <Divider color="#d2d2d2" />
      <div>
        <p className=" font-medium text-xs text-slate-400 text-center">Live tracking updates & extra support from our app</p>
      </div>
    </div>
  );
}

export default TrackOrder;
