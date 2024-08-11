import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "./../../assets/contacts.json";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
