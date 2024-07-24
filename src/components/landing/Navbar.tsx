
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { SITE_NAME } from "../../constants/names";

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
 
  
  return (
    <div className=" " id="nav"  >
     
      
      <div className=" h-[68px] md:h-[100px]  header-wrapper z-30 ">
      <div className="flex h-full justify-between items-center px-6">
        <div className="logo">
          <h2 className=" text-white font-logo text-3xl m-0 font-extrabold leading-3 text-justify">
            {SITE_NAME}
          </h2>
        </div>
        <NavModal />
        <div className="menu flex gap-12 items-center">
          <ul role="list" className=" gap-12 hidden md:flex">
            <li className=" text-xl font-semibold">
              <Link to={"/"} className=" text-white" >Services</Link>
            </li>
            <li className=" text-xl font-semibold">
              <Link to={"/"} className=" text-white" >Company</Link>
            </li>
            <li className=" text-xl font-semibold">
              <Link to={"/"} className=" text-white" >Track</Link>
            </li>
            <li className=" text-xl font-semibold">
              <Link to={"/"} className=" text-white" >Support</Link>
            </li>
          </ul>
          <div onClick={opened ? close : open} className="flex items-center gap-6">
            <img src={menu} className="w-[24px] md:hidden "  />
            <div className="hidden md:block">
            <Button bg={"white"} color="green" c={"black"} size="lg"  fz={'md'} className="  text-xl font-semibold ">Ship Now  </Button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );

  function NavModal() {
    return <>
      <section data-modal={opened} id="nav-model" className=" md:hidden translate-y-[100%]  fixed top-0 left-0 right-0 bottom-0 z-50">
        <div className=" modal-wrapper h-full w-full flex flex-col justify-end  ">
            <div onClick={close}  className="flex-1"></div>
            <div data-modal={opened}  className=" h-[40%] rounded-t-md bg-white p-6">
            <ul role="list" className=" h-full gap-5 justify-between md:hidden flex flex-col ">
              <li className=" text-xl font-semibold">
                <Link to={"/"} className=" text-black" >Services</Link>
              </li>
              <li className=" text-xl font-semibold">
                <Link to={"/"} className=" text-black" >Company</Link>
              </li>
              <li className=" text-xl font-semibold">
                <Link to={"/"} className=" text-black" >Ship</Link>
              </li>
              <li className=" text-xl font-semibold">
                <Link to={"/"} className=" text-black" >Support</Link>
              </li>
              <li>
                  <Button fullWidth bg={"black"} c={"white"} size="lg"  >Track</Button>
              </li>
            </ul>
            </div>
        </div>
      </section>
    </>
  }
}

export default Navbar;






