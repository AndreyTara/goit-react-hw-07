import { createSelector } from "@reduxjs/toolkit";

// src/redux/selectors.js
export const selectorContacts = (state) => state.contacts.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.contacts.filter;

export const selectStatusFilter = (state) => state.filter.filter;

export const selectFilteredContactsMemo = createSelector(
  [selectorContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
