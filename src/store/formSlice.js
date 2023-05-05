import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salesemailList: [
    "shaik.farooq@gmail.com",
    "shaiknizam@gmail.com",
    "vaishnav@gmail.com",
    "tharun@gmail.com",
    "ghousia@gmail.com",
  ],
  contactList: ["9090090990", "9090090990", "9090090990"],
  uiemail: [],
  uicontact: [],
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addEmail(state, action) {
      state.uiemail = [...state.uiemail, action.payload];
    },
    addContact(state, action) {
      state.uicontact = [...state.uicontact, action.payload];
    },
    onsubitEmail(state, action) {
      if (action.payload !== undefined) {
        state.salesemailList = [...state.uiemail, action.payload];
      } else {
        state.salesemailList = [...state.uiemail];
      }
    },
    onsubitContact(state, action) {
      if (action.payload !== undefined) {
        state.contactList = [...state.uicontact, action.payload];
      } else {
        state.contactList = [...state.uicontact];
      }
    },
    deleteemaildata(state, action) {
      const updatedEmailList = [...state.uiemail];
      updatedEmailList.splice(action.payload, 1);
      state.uiemail = updatedEmailList;
    },
    deleteContactdata(state, action) {
      const updatedContactList = [...state.uicontact];
      updatedContactList.splice(action.payload, 1);
      state.uicontact = updatedContactList;
    },

    emailedit(state, action) {
      state.uiemail = [...state.salesemailList];
    },
    contactedit(state, action) {
      state.uicontact = [...state.contactList];
    },
    deleteAllData(state) {
      state.salesemailList = [];
      state.contactList = [];
      state.uiemail = [];
      state.uicontact = [];
    },
  },
});
export const formAction = formSlice.actions;
export default formSlice.reducer;
