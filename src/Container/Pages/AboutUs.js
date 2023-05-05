import React,{useState} from 'react'
import aboutus from "../../components/img/aboutus.png"
import BaseLayout from '../App/BaseLayout';
import { Link, Outlet } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
function AboutUs() {
  const [Background, setBackground] = useState("");
  function togglebackground() {
    setBackground("border-red-900 border-t-3 border-b");
  }
  return (
    <>
      <BaseLayout>
        <div className="px-4 py-2 m-4 ">
          <b className="text-2xl">About Us</b>
          <img className="my-10 w-80" src={aboutus} alt="About Us logo" />
          <div className="flex flex-row">
            <div>
              <p className="text-gray-400">
                lorem ipsum dolor sit amet, consectetur elit.etiam eu turpis
                molestie, dictum est a,
                <br />
                mattis tellus.
              </p>
            </div>
            <div>
              <MdModeEdit size={24} color="red" />
            </div>
          </div>
        </div>
        <div className=" text-[#B5B5B5] ">
          <ul className="flex flex-row border-b border-p ">
            <Link className=" mx-8" to="info" onClick={togglebackground}>
              <li className={`${Background}`}>INFO</li>
            </Link>
            <Link className="mx-10 " to="FAQ">
              <li className="">FAQ</li>
            </Link>
            <Link className="mx-10 " to="/Complaints and Feedback">
              <li className="">Complaints and Feedback</li>
            </Link>
            <Link className="mx-10 " to="/Privacy Policy">
              <li className="">Privacy Policy</li>
            </Link>
            <Link className="mx-10 " to="/Terms & Conditions">
              <li className="">Terms & Conditions</li>
            </Link>
          </ul>
        </div>
        <Outlet />
      </BaseLayout>
    </>
  );
}

export default AboutUs