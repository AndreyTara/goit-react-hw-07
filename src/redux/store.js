import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice.js";
import { filterReducer } from "./contacts/filtersSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
