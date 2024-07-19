
import menu from "../../assets/menu.png";
import { useDisclosure } from "@mantine/hooks";

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <div className=" " id="nav"  >
     
      
      <div className=" h-[68px]  header-wrapper z-30 ">
      <div className="flex h-full justify-between items-center px-6">
        <div className="logo">
          <h2 className=" text-white text-3xl m-0 font-mono font-extrabold leading-3 text-justify">
            LIVERY
          </h2>
        </div>
        <div className="menu flex items-center">
        
        

      
        
          <div onClick={opened ? close : open}>
            <img src={menu} className="w-[24px]" />
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Navbar;
