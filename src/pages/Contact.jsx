import React from "react";
import Maps from "../components/ContactComponents/Maps";
import ContactDetails from "../components/ContactComponents/ContactDetails";
import ContactForm from "../components/ContactComponents/ContactForm";
const Contact = () => {
  return (
    <div className="ml-[550px] p-8 bg-[#0F0F0F] h-[80vh] my-[4vh] overflow-y-scroll">
      <Maps />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;
