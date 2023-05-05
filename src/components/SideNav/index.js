import React,{useState} from "react";
import dashboard_logo from "../img/dashboard_logo.png"
import { AiFillTrophy } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshake, FaCubes } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri"
import { MdPayments } from "react-icons/md";

import { NavLink } from "react-router-dom";

function SideNav() {
  const [Background, setBackground] = useState("");
  function togglebackground() {
    setBackground("bg-[#fde2e1]");
  }
  return (
    <aside className="bg-[#FFFFFF]  w-60 flex-shrink-0 m-4 rounded-xl">
      <div className="flex items-center justify-start h-16 px-6">
        <img src={dashboard_logo} className="w-20  " alt="Dashboard Logo" />
      </div>
      <div className="flex justify-center items-center  relative">
        <ul className="min-w-full text-[#B5B5B5] flex justify-center flex-col items-center">
          <NavLink className="w-full py-1 " to="/Dashboard">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <MdDashboard />
              </span>{" "}
              Dashboard
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Orders">
            <li className=" hover:bg-[#e7c3c1] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <IoIosCube />
              </span>{" "}
              Orders
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Team Members">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <RiTeamFill />
              </span>{" "}
              Team Members
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Partners">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <FaHandshake />
              </span>{" "}
              Partners
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Products Listing">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <FaCubes />
              </span>{" "}
              Product Listings
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Awards and Honours">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <AiFillTrophy />
              </span>{" "}
              Awards and Honours
            </li>
          </NavLink>
          <NavLink
            onClick={togglebackground}
            className="w-full py-1"
            to="/AboutUs"
            activeClassName="bg-red-500"
          >
            <li
              className={`hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center ${Background} `}
            >
              <span className="px-2">
                <RiMessageFill />
              </span>{" "}
              About Us
            </li>
          </NavLink>
          <NavLink className="w-full py-1" to="/Payment Info">
            <li className=" hover:bg-[#F6C1BD] p-3  rounded-md flex flex-row  items-center">
              <span className="px-2">
                <MdPayments />
              </span>{" "}
              Payment Info
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="max-w-sm p-6 m-4 flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://www.google.com">
          <p className="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">
            Need help ?
          </p>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
          Our support team is at your disposal
        </p>
        <button className="bg-black text-white px-4 rounded-md">
          Get Help
        </button>
      </div>
    </aside>
  );
}

export default SideNav;
