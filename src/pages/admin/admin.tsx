import { useLoaderData } from "react-router-dom";
import { getAllProduct } from "../../db/actions";

import ListView from "./components/listview";

export async function loader() {
  var data = await getAllProduct();
  console.log(data.docs);

  return { data: data.docs };
  //NAxwMfkDGJappSHB9pSqP25OI
}

function Admin() {
  const { data }: any = useLoaderData();
  return (
    <div>
        <h2 className=" p-4">Welcome Admin!</h2>
      

      <ListView data={data} />
    </div>
  );
}

export default Admin;
