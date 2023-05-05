import React, { useState } from "react";
import { AiTwotoneMail, AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function ContactsUi(props) {
const reduxstore = useSelector((state) => {
  return state;
});
  let salesEmails = reduxstore.formreducer.salesemailList;
  let marketingemails = reduxstore.marketingred.marketingemailList;
  let marketing1emails = reduxstore.marketingred1.marketing1emailList;
  //contactslist
 let salesContacts = reduxstore.formreducer.contactList;
 let marketingContacts = reduxstore.marketingred.marketingcontactList;
 let marketing1Contacts = reduxstore.marketingred1.marketing1contactList;  
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupcontacts, setshowPopupcontacts] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  const handleMouseOvers = () => {
    setshowPopupcontacts(true);
  };

  const handleMouseLeaves = () => {
    setshowPopupcontacts(false);
  };
  return (
    <>
      <div
        className={`grid grid-cols-4 grid-rows-3 ${props.classNames} border border-gray-300 rounded-lg lg:m-2 `}
      >
        <div className=" p-4 col-span-3">
          <div className="flex">
            <div className="flex items-center text-2xl">
              {props.contactsIcons}
            </div>
            <div className="text-xl mx-2">{props.mainHeading}</div>
          </div>
        </div>
        <div className="  col-span-1 row-span-1">
          <div className="flex">
            {!props.contactsMainedit && (
              <div
                className="flex items-center  p-2 hover:cursor-pointer"
                onClick={props.maineditClick}
              >
                <MdModeEdit size={24} color="red" />
              </div>
            )}
            {props.contactsMainedit && (
              <>
                <div className="flex items-center  p-2 hover:cursor-pointer">
                  <div>
                    <AiFillDelete
                      size={24}
                      color="red"
                      onClick={props.deletHole}
                    />
                  </div>
                  <div>
                    <MdModeEdit
                      size={24}
                      color="red"
                      onClick={props.maineditClick}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* 2nd */}
        <div className="  col-span-3 flex p-2">
          <div className=" flex items-start">
            <p className="m-1">
              <AiTwotoneMail color="gray" />
            </p>
          </div>
          <div className="relative">
            <div
              className="max-h-12 overflow-hidden flex flex-wrap relative"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {props.emailList && props.emailList.length > 0 ? (
                props.emailList.map((email, index) => (
                  <div className="p-1 text-xs" key={index}>
                    {email} /{" "}
                  </div>
                ))
              ) : (
                <p>No emails found.</p>
              )}
            </div>
            <div className="absolute w-full start-here">
              {showPopup && (
                <div
                  className="absolute here max-w-screen-80 h-20 z-10 overflow-scroll mx-auto left-0 right-0 bg-gray-900 text-white py-2 px-4 "
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 10px 5px" }}
                >
                  <div className="flex flex-col">
                    <p className="bg-gray-400 rounded-lg p-1">
                      Sales email List
                    </p>
                    <div className="flex flex-wrap">
                      {salesEmails.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                    <p className="bg-gray-400 rounded-lg p-1">
                      Maketing email List{" "}
                    </p>
                    <div className="flex flex-wrap">
                      {marketingemails.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                    <p className="bg-gray-400 rounded-lg p-1">
                      Marketing 1 email List
                    </p>
                    <div className="flex flex-wrap">
                      {marketing1emails.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {!props.contactsMainedit && (
          <div className=" p-4">
            <div className="flex justify-center items-center text-center bg-red-100 rounded-full ">
              +{props.TotalEmails}
            </div>
          </div>
        )}

        {props.contactsMainedit && <div className=" p-4"></div>}
        {/*  */}

        <div className=" p-2 flex col-span-3">
          <div className=" flex items-start">
            <p className="m-1">
              <BsTelephonePlusFill color="gray" />
            </p>
          </div>

          <div className="relative">
            <div
              className="max-h-12 overflow-hidden flex flex-wrap relative"
              onMouseOver={handleMouseOvers}
              onMouseLeave={handleMouseLeaves}
            >
              {props.ContactsList && props.ContactsList.length > 0 ? (
                props.ContactsList.map((email, index) => (
                  <div className="p-1 text-xs" key={index}>
                    {email} /{" "}
                  </div>
                ))
              ) : (
                <p>No Contacts found.</p>
              )}
            </div>
            <div className="absolute w-full start-here">
              {showPopupcontacts && (
                <div
                  className="absolute here max-w-screen-80 h-20  z-10 overflow-scroll mx-auto left-0 right-0 bg-gray-900 text-white py-2 px-4 "
                  onMouseOver={handleMouseOvers}
                  onMouseLeave={handleMouseLeaves}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 10px 5px" }}
                >
                  <div className="flex flex-col">
                    <p className="bg-gray-400 rounded-lg p-1">
                      Sales contacts List
                    </p>
                    <div className="flex flex-wrap">
                      {salesContacts.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                    <p className="bg-gray-400 rounded-lg p-1">
                      Maketing contacts List
                    </p>
                    <div className="flex flex-wrap">
                      {marketingContacts.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                    <p className="bg-gray-400 rounded-lg p-1">Marketing 1 contacts List</p>
                    <div className="flex flex-wrap">
                      {marketing1Contacts.map((data, index) => (
                        <div className="p-1 text-xs" key={index}>
                          {data}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {!props.contactsMainedit && (
          <div className=" p-4 rounded-full ">
            <div className="flex justify-center items-center text-center bg-red-100 rounded-full ">
              +{props.TotalContacts}
            </div>
          </div>
        )}
        {props.contactsMainedit && <div className=" p-4"></div>}
      </div>
    </>
  );
}

export default ContactsUi;
