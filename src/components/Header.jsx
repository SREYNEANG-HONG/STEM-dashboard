import React from "react";
import { GoBell } from "react-icons/go";
const Header = () => {
  return(
   <div className="flex justify-between items-center p-4 bg-e1f2fd">
     <div>
        <h1 className="text-xs text-gray-100">Welcome !</h1>
        <p className="text-xl font-semibold text-gray-100">Luy Kanika</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-100 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-100 ">
            <GoBell size={28} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-e1f2fd text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">
              9
            </span>
          </button>
          <img
            className="w-8 h-8 rounded-full border-4 border-gray-100"
            src="./pf5.jpg"
            alt=""
          />
        </div>
      </div>
  </div>
  );
};

export default Header;
