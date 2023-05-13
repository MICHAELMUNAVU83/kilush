import React from "react";
import Maps from "../components/ContactComponents/Maps";
import ContactDetails from "../components/ContactComponents/ContactDetails";
import ContactForm from "../components/ContactComponents/ContactForm";
const Contact = () => {
  return (
    <div className="md:ml-[550px] p-8 bg-[#0B0612] h-[80vh] md:my-[4vh] overflow-y-scroll"
    style={{
      boxShadow: "0px 0px 10px 0px #5FBFF9",
    }}
    
    >
      <Maps />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;
