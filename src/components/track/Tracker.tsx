import { Divider, Loader } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import ItemRoute from "../misc/ItemRoute";
import { getProduct } from "../../db/actions";



export async function loader( {params} :any) {
  var data = await getProduct(params.trackId)
  var doc= data.data();
  return { data:doc, id: data.id };
  //NAxwMfkDGJappSHB9pSqP25OI
}


export default function Tracker() {
  const {data, id}: any = useLoaderData();

  if(!id) return <Loader />

  return (
    <div id={id} className=" bg-white min-h-[100vh] flex flex-col pt-20 px-4">
        <Divider />
        <div className="flex-1">
          <ItemRoute data={data} />
        </div>
        <Divider />
    </div>
  )
}

