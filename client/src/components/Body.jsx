import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Profiles from "./Profiles";
import LeftPart from "./LeftPart";
import Links from "./Links";
import Preview from "./Preview";

const Body = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl px-10 flex flex-col md:flex-row items-center justify-center mx-auto mt-5 gap-3">
        {/* left portion */}

        <div className=" flex items-center justify-center mx-auto w-full md:w-[40%] order-2 md:order-1 bg-white rounded-lg md:h-[700px]">
          <LeftPart />
        </div>

        {/* right portion */}
        <div className="w-full md:w-[55%] bg-white order-1 rounded-lg px-6 py-2">
          <Links />
          <Profiles />
        </div>
      </div>

      <Preview />
    </div>
  );
};

export default Body;
