"use client";
import { useRef } from "react";

function Tabs({ item }) {
  const clickRef = useRef();

  return (
    <div ref={clickRef} className=" relative h-full w-max">
      <div
        className={`relative h-full font-bold flex justify-center items-center gap-4 leading-[16px] text-[#3a3a3a] hover:text-[#F501A8] hover:drop-shadow cursor-pointer duration-300`}
      >
        {item?.name}
      </div>
    </div>
  );
}

export default Tabs;
