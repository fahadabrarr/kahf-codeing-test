import LeftPart from "../components/LeftPart";
import Profiles from "../components/Profiles";
import Links from "../components/Links";

import { useSelector } from "react-redux";

const Home = () => {
  const navbar = useSelector((state) => state.navbar.value);

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl px-10 flex flex-col md:flex-row items-center justify-center mx-auto mt-5 gap-3">
        {/* left portion */}

        <div className=" flex items-center justify-center mx-auto w-full md:w-[40%] order-2 md:order-1 bg-white rounded-lg md:min-h-screen">
          <LeftPart />
        </div>

        {/* right portion */}
        <div className=" flex items-center justify-center w-full md:w-[60%] bg-white order-1 rounded-lg px-6 py-2 md:min-h-screen">
          {navbar === "profile" ? <Profiles /> : null}
          {navbar === "link" ? <Links /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
