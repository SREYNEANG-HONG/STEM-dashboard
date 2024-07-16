import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { GrArticle } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
    const SIDEBAR_LINKS = [
        { id: 1, path: "/", name: "Dashboard", icon: RxDashboard },
        { id: 2, path: "/article", name: "Article", icon: GrArticle },
        { id: 3, path: "/setting", name: "Setting", icon: IoSettingsOutline },
        { id: 4, path: "/logout", name: "Logout", icon: TbLogout2 },
        
      ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white">
       {/* logo */}
       <div className="mb-8">
        <img src="./stem.png" alt="logo" className="w-28 hidden md:flex" />
        <img src="./stem.png" alt="logo" className="w-8 flex md:hidden" />
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {
        SIDEBAR_LINKS.map((link, index) => (
          <li key={index}
          className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}>

            <Link to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={()=>handleLinkClick(index)}
            >

            <span>{link.icon()}</span>
            <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

    </div>
  );
}

export default Sidebar;
