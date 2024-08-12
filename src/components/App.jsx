import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import logo from "../assets/redux-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectorContacts,
} from "../redux/selectors";
import { fetchContacts } from "../redux/contactsOps";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.root}>
      <Header>
        <img src={logo} alt="logo" width={32} height={32} />
        <h1>Contacts book</h1>
      </Header>
      <Layout>
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Layout>
    </div>
  );
}

export default App;
