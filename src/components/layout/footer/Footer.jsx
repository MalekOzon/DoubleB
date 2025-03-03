import Img from "@/components/common/image/Img";
import White_logo from "../../../assets/images/Frame 79.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer className=" w-full h-[372px] px-[112px] py-[32px] bg-[#5962FE] flex flex-col justify-start items-center">
        <div className="w-max h-max flex flex-col items-center justify-center ">
          <div className="h-12 w-[146px] flex flex-col items-center justify-center cursor-pointer">
            <Img
              src={White_logo?.src}
              alt="white_logo"
              title="white_logo"
              className="h-full w-max object-contain block"
            />
          </div>
          <div className="w-full h-full font-normal text-2xl text-white mt-4">
            Boost your brand with creators!
          </div>
          <div className="w-full h-full mt-8 text-white flex flex-col items-center justify-center gap-4">
            <div className="text-xl font-bold">Contact with us</div>
            <div className="text-base font-medium">info@doubleb.com</div>
            <div className="w-[107px] h-full flex items-center justify-between gap-4">
              <div className="w-[25px] h-[25px] font-bold cursor-pointer">
                <RiInstagramLine size={25} />
              </div>
              <div className="w-[25px] h-[25px] font-bold cursor-pointer">
                <RiFacebookCircleLine size={25} />
              </div>
              <div className="w-[25px] h-[25px] font-bold cursor-pointer">
                <RiLinkedinBoxLine size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 border-2 border-solid border-white "></div>
        <div className="w-full mt-6 text-white flex flex-row justify-between items-center">
          <div className=" font-bold text-center">
            All rights reserved © 2025
          </div>
          <div className=" flex flex-row justify-between items-center gap-12">
            <div className="font-bold text-center cursor-pointer">
              Privacy policy
            </div>
            <div className="font-bold text-center cursor-pointer">
              Terms & conditions
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
