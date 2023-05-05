import React, { useState, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import formSlice, { formAction } from "../../store/formSlice";
import { marketingFormAction } from "../../store/marketingslice";
import { marketingForm1Action } from "../../store/marketingSlice1";
import { AiOutlineArrowLeft, AiFillTwitterSquare } from "react-icons/ai";
import ContactsUi from "../../components/ContactsUi";
import DynamicForm from "../../components/DymanicForm";
import {
  MdOutlinePermContactCalendar,
  MdLocationPin,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import {
  FaBusinessTime,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import OtherUi from "../../components/OtherUi";
import { MdModeEdit, MdOutlineMailOutline } from "react-icons/md";
import {BsGlobe} from "react-icons/bs"





function Info() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const contactRef = useRef();
  
  const [editClickSales, setEditClickSales] = useState(false);
  const [editClickmarketing, setEditClickmarketing] = useState(false);
  const [editClickmarketing1, setEditClickmarketing1] = useState(false);
  const [editMainClick, seteditMainClick] = useState(false);
 function editHandlerMain(e) {
   e.preventDefault();
   seteditMainClick((prevValue) => !prevValue);
   
 }
  const store = useSelector((state) => {
    return state;
  });
  let salesemailList = store.formreducer.salesemailList;
  const totalEmail = salesemailList.length;
  let contactList = store.formreducer.contactList;
  const totalContacts = contactList.length;
  let storeemailformedit = store.formreducer.uiemail;
  let storedcontactfromedit = store.formreducer.uicontact;

  //marketing
  let marketingemaillist = store.marketingred.marketingemailList;
  let marketingcontactlist = store.marketingred.marketingcontactList;
  let marketingemailformedit = store.marketingred.uimarketingemail;
  let marketingcontactformedit = store.marketingred.uimarketingcontact;

  //marketing1

  let marketingemaillist1 = store.marketingred1.marketing1emailList;
console.log("marketingemaillist1", marketingemaillist1);  
  let marketingcontactlist1 = store.marketingred1.marketing1contactList;
  let marketingemailformedit1 = store.marketingred1.uimarketing1email;
  let marketingcontactformedit1 = store.marketingred1.uimarketing1contact;

  function editHandlercheck(e, buttonId) {
    e.preventDefault();
    setEditClickSales(true);
    dispatch(formAction.emailedit());
    dispatch(formAction.contactedit());
  }
  function deletesalesHoleData(e) {
    dispatch(formAction.deleteAllData());
  }
  function deletemarketingHoleData(e) {
    dispatch(marketingFormAction.deleteAllData());
  }
  function deletemarketing1HoleData(e) {
    dispatch(marketingForm1Action.deleteAllData());
  }


  function editHandlercheckmarketing(e, buttonId) {
    e.preventDefault();
    console.log(buttonId);
    setEditClickmarketing(true);
    dispatch(marketingFormAction.editMarketingEmail());
    dispatch(marketingFormAction.editMarketingContact());
  }
  //1
  function editHandlercheckmarketing1(e, buttonId) {
    e.preventDefault();

    setEditClickmarketing1(true);
    dispatch(marketingForm1Action.editMarketing1Email());
    dispatch(marketingForm1Action.editMarketing1Contact());
  }


  function contactAddHandlermarketing(e) {
    e.preventDefault();
    const newContact = contactRef.current.value;
    if (newContact !== "") {
      dispatch(marketingFormAction.addMarketingContact(newContact));
      contactRef.current.value = "";
    }
  }
  //1
   function contactAddHandlermarketing1(e) {
     e.preventDefault();
     const newContact = contactRef.current.value;
     if (newContact !== "") {
       dispatch(marketingForm1Action.addMarketing1Contact(newContact));
       contactRef.current.value = "";
     }
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
    } else {
      // dispatch(formAction.addEmail());
      // emailRef.current.value = "";
    }
  }

  //
  function emailAddHandlermarketing(e) {
    e.preventDefault();
    const newEmail = emailRef.current.value;
    if (newEmail !== "") {
      dispatch(marketingFormAction.addMarketingEmail(newEmail));
      emailRef.current.value = "";
    } else {
    }
  }
  //1
  function emailAddHandlermarketing1(e) {
    e.preventDefault();
    const newEmail = emailRef.current.value;
    if (newEmail !== "") {
      dispatch(marketingForm1Action.addMarketing1Email(newEmail));
      emailRef.current.value = "";
    } else {
    }
  }

  function formSubmitHandlermarketing(e) {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const contactValue = contactRef.current.value;
    if (emailValue !== "") {
      dispatch(marketingFormAction.onsubmitMarketingEmail(emailValue));
      dispatch(marketingFormAction.addMarketingEmail(emailValue));
      emailRef.current.value = "";
    } else {
      dispatch(marketingFormAction.onsubmitMarketingEmail());
      // contcts doubt
    }
    if (contactValue !== "") {
      dispatch(marketingFormAction.onsubmitMarketingContact(contactValue));
      dispatch(marketingFormAction.addMarketingContact(contactValue));
      contactRef.current.value = "";
    } else {
      dispatch(marketingFormAction.onsubmitMarketingContact());
    }
    setEditClickmarketing(false);
  }
  //1
  function formSubmitHandlermarketing1(e) {
    e.preventDefault();
    const emailValue = emailRef?.current?.value;
    const contactValue = contactRef?.current?.value;
    if (emailValue !== "") {
      dispatch(marketingForm1Action.onsubmitMarketing1Email(emailValue));
      dispatch(marketingForm1Action.addMarketing1Email(emailValue));
      emailRef.current.value = "";
    } else {
      dispatch(marketingForm1Action.onsubmitMarketing1Email());
    }
    if (contactValue !== "" && contactValue !== undefined) {
      dispatch(marketingForm1Action.onsubmitMarketing1Contact(contactValue));
      dispatch(marketingForm1Action.addMarketing1Contact(contactValue));
      contactRef.current.value = "";
    } else {
      dispatch(marketingForm1Action.onsubmitMarketing1Contact());
    }
    setEditClickmarketing1(false);
  }
  //
  

  function formSubmitHandler(e) {
    e.preventDefault();
    const emailValue = emailRef?.current?.value;
    const contactValue = contactRef?.current?.value;
    if (emailValue !== "") {
      dispatch(formAction.onsubitEmail(emailValue));
      dispatch(formAction.addEmail(emailValue));
      emailRef.current.value = "";
    } else {
      dispatch(formAction.onsubitEmail());
    }
    if (contactValue !== "" && contactValue !== undefined) {
      dispatch(formAction.onsubitContact(contactValue));
      dispatch(formAction.addContact(contactValue));
      contactRef.current.value = "";
    } else {
      dispatch(formAction.onsubitContact());
    }
    setEditClickSales(false);
  }

  function deletedatahandlerEmail(e, index) {
    e.preventDefault();
    dispatch(formAction.deleteemaildata(index));
    dispatch(formAction.onsubitEmail());
  }

  //marketingdelete
  function deletedatahandlerEmailmarketing(e, index) {
    e.preventDefault();
    dispatch(marketingFormAction.deleteMarketingEmailData(index));
    dispatch(marketingFormAction.onsubmitMarketingEmail());
  }
  //1
  function deletedatahandlerEmailmarketing1(e, index) {
    e.preventDefault();
    dispatch(marketingForm1Action.deleteMarketing1EmailData(index));
    dispatch(marketingForm1Action.onsubmitMarketing1Email());
  }
  //
  function deletedatahandlerContact(e, index) {
    e.preventDefault();
    dispatch(formAction.deleteContactdata(index));
    dispatch(formAction.onsubitContact());
  }
  //
  function deletedatahandlerContact1(e, index) {
    e.preventDefault();
    dispatch(marketingForm1Action.deleteMarketing1ContactData(index));
    dispatch(marketingForm1Action.onsubmitMarketing1Contact());
  }
  //marketingcontactdelete
  function deletedatahandlerContactmarketing(e, index) {
    e.preventDefault();
    dispatch(marketingFormAction.deleteMarketingContactData(index));
    dispatch(marketingFormAction.onsubmitMarketingContact());
  }
  function deleteSalesData() {
    dispatch(formSlice.deleteAllData());
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 w-full gap-4 h-auto overflow-scroll">
        <div>
          <ContactsUi
            key={Math.random().toString(36).substring(100, 15)}
            mainHeading="Contacts"
            contactsIcons={<RiContactsBook2Fill color="gray" />}
            maineditClick={editHandlerMain}
            emailList={salesemailList}
            ContactsList={contactList}
            TotalContacts={totalContacts}
            TotalEmails={totalEmail}
            contactsMainedit={false}
            otherUi={false}
          />
        </div>
        <div>
          <OtherUi
            Content="c-1 / 351 5 , GIDC Makarapura, vadodara-390010,Gujarat, India."
            icon={<MdLocationPin color="gray" />}
            editIcon={<MdModeEdit />}
            mainContent="Address"
          />
        </div>
        <div>
          <OtherUi
            Content="Monday To Friday -09:00 Am To 06:00 pm"
            icon={<FaBusinessTime style={{ color: "gray" }} />}
            editIcon={<MdModeEdit />}
            mainContent="Hours of Operations"
          />
        </div>
        <div>
          <OtherUi
            icon={<MdOutlineRealEstateAgent style={{ color: "gray" }} />}
            editIcon={<MdModeEdit />}
            mainContent="Social Media & Links"
          >
            <div className="flex m-2 w-full">
              <div className="m-2 text-2xl">
                <BsGlobe color="gray" />
              </div>
              <div className="m-2 text-2xl">
                <FaInstagramSquare color="gray" />
              </div>
              <div className="m-2 text-2xl">
                <FaFacebookSquare color="gray" />
              </div>
              <div className="m-2 text-2xl">
                <AiFillTwitterSquare color="gray" />
              </div>
            </div>
          </OtherUi>
        </div>
        <div>
          <OtherUi
            icon={<MdOutlinePermContactCalendar style={{ color: "gray" }} />}
            editIcon={<MdModeEdit />}
            mainContent="Statement"
            Content="You Think It Will Ink It"
          />
        </div>
      </div>

      {/* Right-Side Layover */}
      {editMainClick && (
        <div
          className="fixed top-0 right-0 h-screen w-4/12 bg-white"
          style={{ boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="my-5 mx-5">
            <div className="flex flex-row gap-2">
              <div
                className=" flex text-center items-center text-2xl "
                onClick={editHandlerMain}
              >
                <AiOutlineArrowLeft />
              </div>
              <div>
                <p className="text-2xl">Contacts</p>
              </div>
            </div>

            <p className="text-gray-400 my-2">
              Please provide company email and password
            </p>

            {[
              {
                mainHeading: "Sales Team",
                contactsIcons: <AiOutlineShoppingCart />,
                maineditClick: editHandlercheck,
                emailList: salesemailList,
                ContactsList: contactList,
                classNames: "w-full",
                contactsMainedit: true,
                deleteHole: deletesalesHoleData,
              },
              {
                mainHeading: "Marketing Team",
                contactsIcons: <AiOutlineShoppingCart />,
                maineditClick: editHandlercheckmarketing,
                emailList: marketingemaillist,
                ContactsList: marketingcontactlist,
                className: "w-full",
                contactsMainedit: true,
                deleteHole: deletemarketingHoleData,
              },
              {
                mainHeading: "Marketing Team",
                contactsIcons: <AiOutlineShoppingCart />,
                maineditClick: editHandlercheckmarketing1,
                emailList: marketingemaillist1,
                ContactsList: marketingcontactlist1,
                className: "w-full",
                contactsMainedit: true,
                deleteHole: deletemarketing1HoleData,
              },
            ].map((item, index) => (
              <ContactsUi
                key={index}
                mainHeading={item.mainHeading}
                contactsIcons={item.contactsIcons}
                maineditClick={item.maineditClick}
                emailList={item.emailList}
                ContactsList={item.ContactsList}
                className={item.className}
                contactsMainedit={item.contactsMainedit}
                deletHole={item.deleteHole}
              />
            ))}
          </div>
        </div>
      )}

      {/* sales */}
      {editClickSales && (
        <DynamicForm
          formSubmitHandler={formSubmitHandler}
          emailRef={emailRef}
          contactRef={contactRef}
          emailAddHandler={emailAddHandler}
          contactAddHandler={contactAddHandler}
          storedEmails={storeemailformedit}
          storedContacts={storedcontactfromedit}
          deleteEmailHandler={deletedatahandlerEmail}
          deleteContactHandler={deletedatahandlerContact}
          buttonText="Add Contact +"
        />
      )}
      {/* marketing */}

      {editClickmarketing && (
        <DynamicForm
          formSubmitHandler={formSubmitHandlermarketing}
          emailRef={emailRef}
          contactRef={contactRef}
          emailAddHandler={emailAddHandlermarketing}
          contactAddHandler={contactAddHandlermarketing}
          storedEmails={marketingemailformedit}
          storedContacts={marketingcontactformedit}
          deleteEmailHandler={deletedatahandlerEmailmarketing}
          deleteContactHandler={deletedatahandlerContactmarketing}
          buttonText="Add Contact +"
        />
      )}

      {/*marketing 1 */}
      {editClickmarketing1 && (
        <DynamicForm
          formSubmitHandler={formSubmitHandlermarketing1}
          emailRef={emailRef}
          contactRef={contactRef}
          emailAddHandler={emailAddHandlermarketing1}
          contactAddHandler={contactAddHandlermarketing1}
          storedEmails={marketingemailformedit1}
          storedContacts={marketingcontactformedit1}
          deleteEmailHandler={deletedatahandlerEmailmarketing1}
          deleteContactHandler={deletedatahandlerContact1}
          buttonText="Add Contact +"
        />
      )}
    </>
  );
}

export default Info;
