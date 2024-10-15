import React from "react";
import { RxImage } from "react-icons/rx";

const Profiles = () => {
  return (
    <div className="w-full">
      <p className=" text-center md:text-left font-bold text-black/70 text-2xl pt-10">
        Profiel Details
      </p>
      <p className="text-center md:text-left text-sm text-black/70 mb-5">
        Add your details to create a personal touch to your profile
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#FAFAFA] gap-3 rounded-md py-5">
        <div className="w-full md:w-[25%] md:h-48 flex items-center justify-center md:justify-start px-5 text-black/50">
          Profile Picture
        </div>

        <div className=" w-full md:w-[70%] flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="w-full sm:w-[60%] h-48 w- flex items-center justify-center relative">
            <img
              src="avatar.png"
              alt=""
              className="w-full h-full rounded-lg absolute z-10"
            />
            <label
              htmlFor="avatar"
              className="absolute h-full w-full rounded-lg text-white z-30 flex flex-col items-center justify-center bg-black bg-opacity-75 cursor-pointer"
            >
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="opacity-0 w-full h-full"
              />
              <p className="text-white absolute top-[30%] flex flex-col items-center justify-center gap-y-2">
                {" "}
                <RxImage className={"h-8 w-8"} />
                <span>Upload Image</span>
              </p>
            </label>
          </div>
          <div className="w-full sm:w-[30%] md:h-48 flex items-center justify-center">
            <p className="text-xs text-black/50 text-center md:text-left ">
              image must be below 1024x1024 px <br /> Use PNG,JPG, or BMP format
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA] mt-10 px-1 rounded-lg py-5 pb-10 mb-10">
        <div className="flex w-full py-1 items-center justify-center px-5 ">
          <p className="text-start w-[40%] text-black/50">First Name</p>
          <input
            type="text"
            placeholder="Ben"
            className="w-full border border-black/5 shadow-sm px-5 py-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex w-full py-1 items-center justify-center px-5">
          <p className="text-start w-[40%] text-black/50">Last Name</p>
          <input
            type="text"
            placeholder="Stock"
            className="w-full border border-black/5 shadow-sm px-5 py-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex w-full py-1 items-center justify-center px-5">
          <p className="text-start w-[40%] text-black/50">Email</p>
          <input
            type="email"
            placeholder="benstock@gmail.com"
            className="w-full border border-black/5 shadow-sm px-5 py-2 rounded-lg outline-none"
          />
        </div>
      </div>

      <hr className="border-black/5 border w-full mt-10 " />

      <div className="flex items-center justify-center md:justify-end px-6 py-5">
        <button className="px-8 py-2 rounded-md bg-[#614BC8] text-white/85">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profiles;
