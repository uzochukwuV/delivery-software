import { useLoaderData } from "react-router-dom";
import { getAllProduct } from "../../db/actions";

import ListView from "./components/listview";
import { useLocalStorage, usePageLeave, useTimeout } from "@mantine/hooks";

import { Button,  Checkbox,  Divider,  Loader, PasswordInput, Space, Text } from "@mantine/core";
import { TextInput } from '@mantine/core';
import { useState } from "react";


export async function loader() {
  var data = await getAllProduct();
  

  return { data: data.docs };
  //NAxwMfkDGJappSHB9pSqP25OI
}

const EMAIL = "admin@2"
const PASSWORD = "visualz"

function Admin() {
  const { data }: any = useLoaderData();
  const [value, setStorage] = useLocalStorage({
    key: "X-a-auth",
    defaultValue: "false",
  });
  const [loading, setLoading] = useState(false)
  const {start, clear} = useTimeout(()=>{setStorage(`${EMAIL}${PASSWORD}`); setLoading(false)},4000)
  const [logged, setlogged] = useState(false)
  

  const login = (user:string, password:string)=> {
    console.log(logged);
    
    setLoading(true)
    if(user==EMAIL && password==PASSWORD){
      
      start()
     
    }else{
      setLoading(false)
    }
    
   
  }

  usePageLeave(() => {
    if(!logged){
      setStorage("false")
    }
  });

  

  if (value == `${EMAIL}${PASSWORD}`)
    return (
      <div>
        <h2 className=" p-4">Welcome Admin!</h2>

        <ListView data={data} />
      </div>
    );

  return <div className="pt-24">
    <div className="h-full flex justify-center items-center flex flex-col gap-5">
    <Space h={24} />
        <Text size="xl" fw={700} c={"grape"}>Login to Admin</Text>
        <Divider />
        <Space h={16} />
        <AdminForm login={login} loading={loading} setlogged={setlogged} logged={logged} />
        <div onClick={clear}></div>
    </div>
  </div>
}

export default Admin;




function AdminForm({login, loading, setlogged, logged}: any) {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  

  console.log(logged);
  
  
  return (
    <div className=" w-full max-w-md flex flex-col gap-5">
      <TextInput
        leftSectionPointerEvents="none"
        // leftSection={icon}
        value={user}
        label="Your email"
        placeholder="Your email"
        onChange={(event) => setUser(event.currentTarget.value)}
        
      />
      <PasswordInput
        mt="md"
        rightSectionPointerEvents="none"
        // rightSection={icon}
        value={password}
        label="Password"
        placeholder="Password"
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Checkbox size="md" value={logged}  onChange={() => setlogged((prev:boolean)=> !prev)} /> <Text>Keep me logged in</Text>
      <Button size="md" onClick={()=>login(user, password)}> {loading? <Loader h={24} color="white" />:"Login" } </Button>
    </div>
  );
}



