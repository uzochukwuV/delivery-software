import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Divider } from "@mantine/core";
import { Modal } from "@mantine/core";

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className=" h-[68px] bg-black header-wrapper ">
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
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={false}
          fullScreen
          overlayProps={{
            backgroundOpacity: 0.35,
            blur: 3,
          }}
        >
          <div className="h-[100vh] flex items-end">
            <div className="w-full bg-white rounded-t-2xl shadow-lg h-[50vh]">
                <div className="modal-header modal-header-text-color flex justify-between p-6">
                    <div className="header-text">
                        <h3 className=" text-2xl font-medium leading-tight">Our Company</h3>
                    </div>
                    <div className="header-icon">

                    </div>
                </div>
                <div className="border-b"></div>
                <div className="flex p-3">
                    
                </div>

            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
