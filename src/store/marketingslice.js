import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketingemailList: [
    "john@gmail.com",
    "jane@gmail.com",
   
  ],
  marketingcontactList: ["7019262835", "5026282582", "3062727272"],
  uimarketingemail: [],
  uimarketingcontact: [],
};

const marketingFormSlice = createSlice({
  name: "marketingForm",
  initialState,
  reducers: {
    addMarketingEmail(state, action) {
      state.uimarketingemail = [...state.uimarketingemail, action.payload];
    },
    addMarketingContact(state, action) {
      state.uimarketingcontact = [...state.uimarketingcontact, action.payload];
    },
    onsubmitMarketingEmail(state, action) {
      if (action.payload !== undefined) {
        state.marketingemailList = [...state.uimarketingemail, action.payload];
      } else {
        state.marketingemailList = [...state.uimarketingemail];
      }
    },
    onsubmitMarketingContact(state, action) {
      if (action.payload !== undefined) {
        state.marketingcontactList = [
          ...state.uimarketingcontact,
          action.payload,
        ];
      } else {
        state.marketingcontactList = [...state.uimarketingcontact];
      }
    },
    deleteMarketingEmailData(state, action) {
      const updatedMarketingEmailList = [...state.uimarketingemail];
      updatedMarketingEmailList.splice(action.payload, 1);
      state.uimarketingemail = updatedMarketingEmailList;
    },
    deleteMarketingContactData(state, action) {
      const updatedMarketingContactList = [...state.uimarketingcontact];
      updatedMarketingContactList.splice(action.payload, 1);
      state.uimarketingcontact = updatedMarketingContactList;
    },
    editMarketingEmail(state, action) {
      state.uimarketingemail = [...state.marketingemailList];
    },
    editMarketingContact(state, action) {
      state.uimarketingcontact = [...state.marketingcontactList];
    },
    deleteAllData(state) {
      state.uimarketingemail = [];
      state.uimarketingcontact = [];
      state.marketingemailList = [];
      state.marketingcontactList = [];
    },
  },
});


export const marketingFormAction = marketingFormSlice.actions;

export default marketingFormSlice.reducer;
