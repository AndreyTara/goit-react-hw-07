import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/contactsSlice";

function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <div className={css.wrapItem}>
      <div className={css.box}>
        <div className={css.item}>
          <FaUser className={css.person} />
          <p>{name}</p>
        </div>
        <div className={css.item}>
          <FaPhoneAlt className={css.person} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
