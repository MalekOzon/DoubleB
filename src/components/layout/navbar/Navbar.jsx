import Img from "../../common/image/Img";
import logo from "../../../assets/images/Frame 1.png";
import TABS from "../../../utils/TABS";
import Tabs from "./Tabs";

function Navbar() {
  console.log(TABS);
  return (
    <>
      <div className="w-full h-[80px] px-20 shadow-lg overflow-auto">
        <div className="flex items-center justify-between h-full w-full bg-mainColor  ">
          <div className="w-full h-full flex justify-center items-center gap-16">
            {/* logo */}
            <div className=" w-[146px] h-[48px] flex items-center justify-center rounded-sm overflow-hidden cursor-pointer">
              <Img
                src={logo?.src}
                alt={"logo_DoubleB"}
                title={"logo_DoubleB"}
                className="h-full w-full object-contain block"
              />
            </div>
            {/* navbar tabs */}
            <nav
              className={"flex-1 h-full flex items-center justify-center gap-8"}
            >
              {TABS?.map((item, index) => {
                return <Tabs key={index} item={item} />;
              })}
            </nav>
          </div>
          <div className="w-full h-full flex items-center justify-end gap-4">
            <div className="w-[96px] h-[48px] text-sm font-bold px-[27px] py-[15px] border-solid border-2 border-[#F501A8] bg-[#F501A8] hover:text-[#F501A8] hover:bg-transparent text-white duration-200 cursor-pointer rounded-[8px] flex items-center justify-center drop-shadow-lg">
              Login
            </div>
            <div className="w-[96px] h-[48px] text-sm font-bold flex-nowrap px-2 py-[15px] border-solid border-2 border-[#5962FE] bg-[#5962FE] hover:text-[#5962FE] hover:bg-transparent text-white duration-200 cursor-pointer rounded-[8px] flex items-center justify-center drop-shadow-lg">
              Start Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
