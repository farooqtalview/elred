import React,{useState} from "react";
import Input from "../Input";
import Button from "../Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
const initialValues = {
  Search: "",
};
function MainHeader(props) {
const [values, setValues] = useState(initialValues);
     const handleInputChange = (e) => {

       const { name, value } = e.target;
       setValues({
         ...values,
         [name]: value,
       });
     };
  return (
    <>
      <header className="bg-[#FFFFFF]  px-4 py-4 flex flex-row">
        <div className="flex justify-between w-screen px-10">
          <div className="flex flex-row">
            <div className="w-64  ">
              <img src={props.logo} className="w-20" />
            </div>
            <div className=" w-80">
              <Input
                name="Search"
                value={values.Search}
                placeholder="Search"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className=" mx-10 hover:cursor-auto">
              <button className="bg-[#000000] text-white flex px-1 py-2 rounded-md  justify-center items-center">
                <AiOutlineShoppingCart /> Checkout (600)
              </button>
            </div>
            <div className=" flex justify-center items-center hover:cursor-auto">
              <div className="  hover:cursor-auto">
                <FaUserCircle />
              </div>
              <div className="flex items-center mx-2">User Admin</div>
              <div className="flex items-center justify-center">^</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
