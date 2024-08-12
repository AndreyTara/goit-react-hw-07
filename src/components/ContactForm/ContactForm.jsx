import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from "@reduxjs/toolkit";
import Button from "../Button/Button";
import { addContact } from "../../redux/contacts/contactsOps";

function ContactForm() {
  const dispatch = useDispatch();

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Name consist from min 3 chars")
      .max(50, "Name consist from max 50 chars"),
    number: Yup.string()
      .required("This field is required!")
      .matches(/^\d{3}-\d{3}-\d{4}$/, "This field is required (698-340-6567)"),
  });
  // /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
  // /^\d{3}-\d{2}-\d{2}$/ -- 123-45-67
  // ^\d{3}-\d{3}-\d{4}$ --698-340-6567
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, actions) => {
    const createdAt = new Date().toISOString();
    dispatch(addContact({ ...data, createdAt }));
    // actions.resetForm();
  };

  return (
    <div className={css.wrapForm}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </label>
          <Button type="submit">
            <p className={css.textBtn}>Add contact</p>
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
