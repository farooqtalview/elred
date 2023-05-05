import React from 'react'
import SideNav from '../../components/SideNav'
import MainHeader from '../../components/MainHeader.js';
import AboutUs from '../Pages/AboutUs';
import logo from "../../components/img/logo.png"


function BaseLayout(props) {
  return (
    <>
      <div className="flex flex-col h-screen bg-[#EFF2F8]">
        <MainHeader logo={logo} />
        <div className="flex flex-1">
          <SideNav />
          <main className="flex-grow bg-[#FFFFFF]  my-4 rounded-xl m-2">
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
}

export default BaseLayout