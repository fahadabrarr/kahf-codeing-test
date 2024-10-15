import React from "react";
import LeftPart from "./LeftPart";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <div className="w-full mb-40">
      <div className="w-full h-[350px] bg-blue-600 relative rounded-b-[40px]">
        <div className="flex items-center justify-between px-5 w-[100%-40px] left-5 right-5 h-14 bg-white rounded-lg absolute top-5 ">
          <button className="test-white border-[#614BC8] border rounded-lg px-5 py-2">
            <Link to="/">Back to Editor</Link>
          </button>
          <button className="test-white bg-[#614BC8] rounded-lg px-5 py-2">
            <Link to="/"> Share Link</Link>
          </button>
        </div>

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] bg-white rounded-lg">
          <LeftPart className={""} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
