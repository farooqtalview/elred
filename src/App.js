
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import React, { useRef } from "react";
import { formAction } from "./store/formSlice"
import BaseLayout from "./Container/App/BaseLayout";
import AboutUs from "./Container/Pages/AboutUs";
import Info from "./Container/Pages/Info";
import NoPageFound from "./Container/Pages/NoPageFound";


function App() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const contactRef = useRef();
  const [editClick, setEditClick] = useState(false);

  const store = useSelector((state) => {
    return state;
  });
  let emailList = store.emailList;
  let contactList = store.contactList;
  let storeemailformedit = store.uiemail
  function editHandler(e) {
    e.preventDefault();
    setEditClick(true);
dispatch(formAction.emailedit()) 
  }
  function contactAddHandler(e) {
    e.preventDefault();
    const newContact = contactRef.current.value;
    if (newContact !== "") {
      dispatch(formAction.addContact(newContact));
      contactRef.current.value = "";
    }
  }
  function emailAddHandler(e) {
    e.preventDefault();
    const newEmail = emailRef.current.value;
    if (newEmail !== "") {
      dispatch(formAction.addEmail(newEmail));
      emailRef.current.value = "";
    }
  }
   function formSubmitHandler(e) {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const contactValue = contactRef.current.value;
    if (emailValue !== "") {
      dispatch(formAction.onsubitEmail(emailValue));
      dispatch(formAction.addEmail(emailValue));
      emailRef.current.value = "";
    } else {
      dispatch(formAction.onsubitEmail());
    }
    if (contactValue !== "") {
      dispatch(formAction.onsubitContact(contactValue));
      contactRef.current.value = "";
    }
  }
  function deletedatahandlerEmail(e, index) {
    e.preventDefault();
    dispatch(formAction.deleteemaildata(index));
    dispatch(formAction.onsubitEmail());
  }
  function deletedatahandlerContact(index) {
    dispatch(formAction.deleteContactdata(index));
  }
  return (
    <>
      
      <Routes>
        <Route path="/" element={<BaseLayout />}></Route>
        <Route path="AboutUs" element={<AboutUs />}>
          <Route path="info" element={<Info />}></Route>
        </Route>
        <Route path="*" element={<NoPageFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
