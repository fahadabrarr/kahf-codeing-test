import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Profiles from "./Profiles";
import LeftPart from "./LeftPart";
import Links from "./Links";

const Body = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl px-10 flex flex-col md:flex-row items-center justify-center mx-auto mt-5 gap-3">
        {/* left portion */}

        <div className=" flex items-center justify-center mx-auto w-full md:w-[40%] order-2 md:order-1 bg-white rounded-lg md:h-[700px]">
          <LeftPart />

          {/* <div>
            <div className="flex items-center justify-center w-full p-5 gap-3">
              <div className="h-[500px] w-[270px] px-5 py-5 rounded-3xl ">
                <div className="flex flex-col border items-center justify-center py-5 ">
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
                      <FaGithub className={"text-white"} />
                      <span className="text-white">YouTube</span>
                    </p>
                    <p className="flex items-end pl-10">
                      <FaArrowRightLong className={"text-white"} />
                    </p>
                  </div>
                  <div className=" flex items-center  justify-between h-10 w-full px-5 bg-blue-600 rounded-lg ">
                    <p className="flex items-center justify-start gap-2">
                      <FaGithub className={"text-white"} />
                      <span className="text-white">LinkedIn</span>
                    </p>
                    <p className="flex items-end pl-10">
                      <FaArrowRightLong className={"text-white"} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* right portion */}
        <div className="w-full md:w-[55%] bg-white order-1 rounded-lg px-6 py-2">
          <Links />
          <Profiles />

          {/* <div>
            <p className="text-left font-bold text-black/70 text-2xl pt-10">
              Profiel Details
            </p>
            <p className="text-left text-sm text-black/70 mb-5">
              Add your details to create a personal touch to your profile
            </p>

            <div className="flex items-center justify-between w-full bg-[#FAFAFA] gap-2 rounded-md py-5">
              <div className="w-full sm:w-[30%] h-40 flex items-center justify-start px-5">
                Profile Picture
              </div>
              <div className="w-full sm:w-[30%] h-40 flex items-center justify-center">
                image
              </div>
              <div className="w-full sm:w-[30%] h-40 flex items-center justify-center">
                <p className="text-xs text-black/55">
                  image must be below 1024x1024 px <br /> Use PNG,JPG, or BMP
                  format
                </p>
              </div>
            </div>

            <div className="w-full bg-[#FAFAFA] mt-10 px-1 rounded-lg py-5">
              <div className="flex w-full py-1 items-center justify-center px-5 ">
                <p className="text-start w-[40%]">First Name</p>
                <input
                  type="text"
                  placeholder="Ben |"
                  className="w-full border border-black/20 px-5 py-1 rounded-lg"
                />
              </div>
              <div className="flex w-full py-1 items-center justify-center px-5">
                <p className="text-start w-[40%]">Last Name</p>
                <input
                  type="text"
                  placeholder="Stock"
                  className="w-full border border-black/20 px-5 py-1 rounded-lg"
                />
              </div>
              <div className="flex w-full py-1 items-center justify-center px-5">
                <p className="text-start w-[40%]">Email</p>
                <input
                  type="email"
                  placeholder="ben@gmail.com"
                  className="w-full border border-black/20 px-5 py-1 rounded-lg"
                />
              </div>
            </div>

            <hr className="border-black/15 border w-full mt-10 sm:mt-20" />

            <div className="flex items-center justify-end px-6 py-5">
              <button className="px-5 py-1 rounded-md bg-blue-500">Save</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
