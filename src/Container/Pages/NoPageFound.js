import React from 'react'
import { Link } from "react-router-dom"

function NoPageFound() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-full">
      <div className=" border bg-[#060b26] bg-opacity-70  text-white p-4 m-2 rounded-2xl">
El red has asked to work on only about us ,please click on about us and info tab inorder to view the workflow
      </div>
      <div className="m-2">
        <Link to="/">
          <span
            style={{ cursor: "pointer" }}
            rel="noopener noreferrer"
            className="px-8 py-3 font-semibold rounded bg-[#F2A900] text-gray-900"
          >
MAIN PAGE
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NoPageFound