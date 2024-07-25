import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { generateRef } from "../constants/utils";

const db = getFirestore(app);

export async function createProductToTrack() {
  var ref = generateRef()
  try {
    const docRef = await addDoc(collection(db, "Product"), {
      sender_name: "Elen Ray",
      sender_email: "elenray@gmail.com",
      sender_phone: "+91293849383",
      sender_location: "CA, USA",
      reciever_name: "Mondrel Gibson",
      reciever_email: "gibsondem@gmail.com",
      reciever_phone: "+9128387337",
      reciever_location: "Missouri, USA",
      product: "Box of Carton ",
      quantity: 1,
      package_weight: "20kg",
      deliver_status: "Transit",
      no_of_package: 1,
      picked_time: new Date(Date.now() - 5* 60 *60*1000).toDateString(),
      transit_time: new Date(Date.now() - 3* 60 *60*1000).toDateString(),
      packing_time: new Date(Date.now() - 2* 60 *60*1000).toDateString(),
      pickup_time: new Date(Date.now() - 1* 60 *60*1000).toDateString(),
      type_of_shipment: "Van Truck",
      ref: ref
    });
    console.log(docRef);
    
    return docRef;

  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error adding doc ")
  }
}


export async function getProduct(id:string) {
    try {
      const docRef = doc(db, "Product", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        
        
        return docSnap;
      } else {
        // docSnap.data() will be undefined in this case
       
        return {} as any;
      }

    
    } catch (error) {
        
        return {} as any;
    }
    

}