import React from 'react'
import { AiFillDelete } from "react-icons/ai";

function DynamicForm({
  formSubmitHandler,
  emailRef,
  contactRef,
  emailAddHandler,
  storedEmails,
  storedContacts,
  deleteEmailHandler,
  deleteContactHandler,
  buttonText,
  contactAddHandler,
}) {
  return (
    <>
      <div className="fixed top-0 right-0 h-screen w-2/6 bg-white  shadow-xg">
        <div className="m-5  h-full rounded-full flex flex-col">    
          <p className="text-2xl">Contacts</p>
          <p className="text-xs my-2">
            Please provide company email and password
          </p>
          <form onSubmit={formSubmitHandler} className="my-10">
            {storedEmails.length > 0 && (
              <div className="grid grid-cols-2 gap-1 overflow-scroll h-20">
                {storedEmails.map((email, index) => (
                  <div
                    className="flex items-center justify-between bg-gray-400 p-1 "
                    key={index}
                  >
                    <span className="overflow-scroll">{email}</span>
                    <button onClick={(e) => deleteEmailHandler(e, index)}>
                      <AiFillDelete />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="w-full">
              <label htmlFor="email" className="w-full">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="  w-full  border text-black my-input bg-gray-200 rounded-md h-10 p-2"
                ref={emailRef}
                id="email"
              />
            </div>

            <div className="my-6 text-red-600">
              <button
                className="bg-red-100 w-full h-8"
                onClick={emailAddHandler}
              >
                emails +
              </button>
            </div>
            <div className="overflow-scroll">
              {storedContacts.length > 0 && (
                <div className="grid grid-cols-2 gap-1 overflow-scroll h-20">
                  {storedContacts.map((email, index) => (
                    <div
                      className="flex items-center justify-between bg-gray-400 p-1 text-white"
                      key={index}
                    >
                      <span className="overflow-scroll">{email}</span>
                      <button onClick={(e) => deleteContactHandler(e, index)}>
                        <AiFillDelete />
                        <span className="sr-only">Delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="contact" className="w-full">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                placeholder="contact"
                className="w-full  border text-black my-input bg-gray-400 rounded-md h-10 p-2"
                ref={contactRef}
              />
            </div>
            <button
              className="bg-red-100 w-full  my-8 text-red-600 h-10"
              onClick={contactAddHandler}
            >
              {buttonText}
            </button>
            <div>
              <button className="bg-red-700 p-2  text-white w-full at-end">save</button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DynamicForm