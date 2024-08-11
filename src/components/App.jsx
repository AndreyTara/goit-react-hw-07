import { useState, useEffect } from "react";
import initialContacts from "../assets/contacts.json";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  return (
    <div className={css.root}>
      <h1>Contacts book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
