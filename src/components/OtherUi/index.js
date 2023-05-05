import React from 'react'
import {
  MdOutlinePermContactCalendar,
  MdLocationPin,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { MdModeEdit, MdOutlineMailOutline } from "react-icons/md";


function OtherUi(props) {
  return (
    <>
      <div 
        className={`grid grid-cols-4 grid-rows-3  border border-gray-300 rounded-lg  lg:m-2 text-sm`}
      >
        <div className=" p-4 col-span-3 ">
          <div className="flex">
            <div className="flex items-center text-2xl">{props.icon}</div>
            <div className="text-xl mx-2 ">{props.mainContent}</div>
          </div>
        </div>
        <div className="  col-span-1 row-span-1">
          <div className="flex ">
            <div className="flex items-center  p-2 hover:cursor-pointer">
              <MdModeEdit size={24} color="red" />
              {/* <MdModeEdit size={24} color="red" /> */}
            </div>
          </div>
        </div>
        {/* 2nd */}
        {props.fullwidth && (
          <div className="  col-span-3 row-span-2 flex p-2 ">
            {props.Content}
          </div>
        )}
        {!props.fullwidth && (
                  <div className="  col-span-4 row-span-3 flex p-2  ">
                      {!props.Content ? props.children : props.Content}       
          </div>
              )}
              

        {/*  */}
      </div>
    </>
  );
}

export default OtherUi