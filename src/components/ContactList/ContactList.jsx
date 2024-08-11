import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilter, selectorContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.wrap}>
      <ul className={css.contList}>
        {filteredData.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
