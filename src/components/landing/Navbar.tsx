
import menu from "../../assets/menu.png";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ModalContent } from "@mantine/core";
import CancelIcon from "../../components/misc/CancelIcon";

import { createPortal } from "react-dom";
function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <div className=" " id="nav"  >
     
      
      <div className=" h-[68px]  header-wrapper z-10 ">
      <div className="flex h-full justify-between items-center px-6">
        <div className="logo">
          <h2 className=" text-white text-3xl m-0 font-mono font-extrabold leading-3 text-justify">
            LIVERY
          </h2>
        </div>
        <div className="menu flex items-center">
        {opened && createPortal(
        <Modal
        
        className="fixed top-16  border-0 z-50 right-0 left-0 bottom-0 outline-none"
            opened={opened}
            onClose={close}
            withCloseButton={false}
            
            overlayProps={{
              backgroundOpacity: 0.35,
              blur: 3,
              zIndex: 20,
            }}
          >
            <ModalContent>
            <div className="h-[100vh] w-full flex items-end">
              <div className="w-full bg-white rounded-t-2xl shadow-lg h-[55vh]">
                  <div className="modal-header modal-header-text-color flex justify-between p-6">
                      <div className="header-text">
                          <h3 className=" text-2xl font-medium leading-tight">Our Company</h3>
                      </div>
                      <div className="header-icon">
                      <CancelIcon />
                      </div>
                  </div>
                  <div className="border-b"></div>
                  <div className="flex p-3">
                      
                  </div>
  
              </div>
            </div>
            </ModalContent>
          </Modal>,
        document.getElementById("nav")!
      )}

      
        
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
