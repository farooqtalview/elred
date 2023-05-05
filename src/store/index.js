

import { configureStore } from "@reduxjs/toolkit";

import contactsLogic from "./formSlice"

import formReducer from "./formSlice"
import marketingreducer from "./marketingslice";
import marketing1reducer from "./marketingSlice1"




const store = configureStore({
  reducer: {
    formreducer: formReducer,
    marketingred1: marketing1reducer,
    marketingred: marketingreducer,
  },
});

export default store;


