import React from "react";
import { FaLink } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { GrFormView } from "react-icons/gr";

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#FFFFFF]">
      <div className="flex flex-row max-w-screen-2xl mx-auto px-5 py-3 items-center justify-around gap-3 w-full h-full">
        <div className="flex items-center justify-center gap-1 cursor-pointer shadow-sm px-6 py-2">
          <span className="bg-[#6138FF] px-1 py-1 rounded-md">
            <FaLink className={"text-white rotate-45 "} />
          </span>

          <span className="font-extrabold text-black/55 opacity-90 hidden sm:inline-flex">
            devlinks
          </span>
        </div>
        <div className="flex gap-1 sm:gap-6  items-center justify-center">
          <p className="flex gap-1 items-center justify-center px-3 py-2 cursor-pointer font-extrabold text-black/55 hover:bg-[#EFECFF] rounded-md shadow-sm ">
            <span className="border-[1px] border-[#685CA7] rounded-md h-7 w-8 items-center justify-center flex sm:border-none">
              <RxAvatar className={"font-extrabold"} />
            </span>

            <span className="font-extrabold text-black/55 hidden sm:inline-flex">
              Profile
            </span>
          </p>
          <p className="flex gap-1 items-center justify-center px-3 py-2 cursor-pointer font-extrabold text-black/55 hover:bg-[#EFECFF] rounded-md shadow-sm ">
            <span className="border-[1px] border-[#685CA7] rounded-md h-7 w-8 items-center justify-center flex sm:border-none">
              <FaLink className={"font-extrabold rounded-md"} />
            </span>
            <span className="hidden sm:inline-flex"> Link</span>
          </p>
        </div>
        <div className=" flex gap-1 px-3 py-2 rounded-lg  border-[#685CA7] cursor-pointer font-extrabold hover:bg-[#EFECFF] shadow-sm text-black/55 hover:text-[#7D63EF] text-shad items-center justify-center">
          <span>
            <GrFormView
              className={
                "h-7 w-8 border-[#AC97FF] border-[1px] rounded-md  sm:hidden"
              }
            />
          </span>
          <span className="hidden sm:inline-flex"> Preview</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
