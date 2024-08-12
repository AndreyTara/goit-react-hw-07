import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import logo from "../../public/redux-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectorContacts,
} from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/contactsOps";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.root}>
      {console.log(contacts)}
      <Header>
        <img src={logo} alt="logo" width={32} height={32} />
        <h1>Contacts book</h1>
      </Header>
      <Layout>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </div>
  );
}

export default App;
