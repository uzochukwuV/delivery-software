import { deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { generateRef } from "../constants/utils";

const db = getFirestore(app);

export async function createProductToTrack(update:any) {
  var ref = generateRef()
  
  try {
    const docRef = await addDoc(collection(db, "Product"), {...update, ref: ref});
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
      return docSnap;
    
    } catch (error) {
        
        return {} as any;
    }
    

}


export async function getAllProduct() {
  try {
    const col =  collection(db, "Product");
    const docSnap =await  getDocs(col);
    
    return docSnap;
  
  } catch (error) {
      
      return {} as any;
  }
  

}




export async function updateProduct(id: string, data: any) {
  try {
    const productRef = doc(db, "Product", id);

// Set the "capital" field of the city 'DC'
await updateDoc(productRef,data);
    

  
  } catch (error) {
      
      throw new Error("failed to update")
  }
  

}


export async function delProduct(id: string) {
  try {
    await deleteDoc(doc(db, "Product", id));
  
  } catch (error) {
      
      throw new Error("failed to update")
  }
  

}

