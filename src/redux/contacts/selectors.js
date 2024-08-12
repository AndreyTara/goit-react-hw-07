// src/redux/selectors.js

export const selectorContacts = (state) => state.contacts.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.contacts.filter;

export const selectStatusFilter = (state) => state.filter.filter;
