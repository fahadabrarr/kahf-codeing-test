import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const LeftPart = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full p-5 gap-3">
        <div className="h-[500px] w-[270px] px-5 py-5 rounded-3xl ">
          <div className="flex flex-col h-[270px] border rounded-lg items-center justify-center py-5 ">
            <div className="h-28 w-28 items-center justify-center flex">
              <img
                src="avatar.png"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <p className=" text-xl font-bold mt-5">Ben Stock</p>
            <p className="text-sm ">ben@gmail.com</p>
          </div>

          <div className="flex flex-col w-full py-5 gap-y-3 mt-5 ">
            <div className=" flex items-center  justify-between h-10 w-full px-5 bg-black rounded-lg ">
              <p className="flex items-center justify-start gap-2">
                <FaGithub className={"text-white"} />
                <span className="text-white">GitHub</span>
              </p>
              <p className="flex items-end pl-10">
                <FaArrowRightLong className={"text-white"} />
              </p>
            </div>
            <div className=" flex items-center  justify-between h-10 w-full px-5 bg-red-600 rounded-lg ">
              <p className="flex items-center justify-start gap-2">
                <AiFillYoutube className={"text-white h-6 w-5"} />
                <span className="text-white">YouTube</span>
              </p>
              <p className="flex items-end pl-10">
                <FaArrowRightLong className={"text-white"} />
              </p>
            </div>
            <div className=" flex items-center  justify-between h-10 w-full px-5 bg-blue-600 rounded-lg ">
              <p className="flex items-center justify-start gap-2">
                <FaLinkedin className={"text-white"} />
                <span className="text-white">LinkedIn</span>
              </p>
              <p className="flex items-end pl-10">
                <FaArrowRightLong className={"text-white"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
