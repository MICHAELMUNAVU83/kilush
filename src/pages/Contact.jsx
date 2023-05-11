import React from "react";
import Maps from "../components/ContactComponents/Maps";
import ContactDetails from "../components/ContactComponents/ContactDetails";
import ContactForm from "../components/ContactComponents/ContactForm";
const Contact = () => {
  return (
    <div className="p-8">
      <Maps />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;
