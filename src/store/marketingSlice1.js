import { createSlice } from "@reduxjs/toolkit";
const initialState1 = {
  marketing1emailList: [
    "sara@gmail.com",
    "susan@gmail.com",
    "sam@gmail.com",
    "steve@gmail.com",
    "stacy@gmail.com",
  ],
  marketing1contactList: ["120878267323", "1106786788", "1001232852"],
  uimarketing1email: [],
  uimarketing1contact: [],
};

const marketingForm1Slice = createSlice({
  name: "marketingForm1",
  initialState: initialState1,
  reducers: {
    addMarketing1Email(state, action) {
      state.uimarketing1email = [...state.uimarketing1email, action.payload];
    },
    addMarketing1Contact(state, action) {
      state.uimarketing1contact = [
        ...state.uimarketing1contact,
        action.payload,
      ];
    },
    onsubmitMarketing1Email(state, action) {
      if (action.payload !== undefined) {
        state.marketing1emailList = [
          ...state.uimarketing1email,
          action.payload,
        ];
      } else {
        state.marketing1emailList = [...state.uimarketing1email];
      }
    },
    onsubmitMarketing1Contact(state, action) {
      if (action.payload !== undefined) {
        state.marketing1contactList = [
          ...state.uimarketing1contact,
          action.payload,
        ];
      } else {
        state.marketing1contactList = [...state.uimarketing1contact];
      }
    },
    deleteMarketing1EmailData(state, action) {
      const updatedMarketing1EmailList = [...state.uimarketing1email];
      updatedMarketing1EmailList.splice(action.payload, 1);
      state.uimarketing1email = updatedMarketing1EmailList;
    },
    deleteMarketing1ContactData(state, action) {
      const updatedMarketing1ContactList = [...state.uimarketing1contact];
      updatedMarketing1ContactList.splice(action.payload, 1);
      state.uimarketing1contact = updatedMarketing1ContactList;
    },
    editMarketing1Email(state, action) {
      state.uimarketing1email = [...state.marketing1emailList];
    },
    editMarketing1Contact(state, action) {
      state.uimarketing1contact = [...state.marketing1contactList];
    },
    deleteAllData(state) {
      state.uimarketing1email = [];
      state.uimarketing1contact = [];
      state.marketing1emailList = [];
      state.marketing1contactList = [];
    },
  },
});

export const marketingForm1Action = marketingForm1Slice.actions;

export default marketingForm1Slice.reducer;
