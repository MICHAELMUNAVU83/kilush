import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-start p-4 text-white">
        Contact Form
      </h1>
      <p className="h-[1px] bg-red-500 w-[80%]  my-2" />
      <div className="flex justify-between ">
        <input
          type="text"
          placeholder="Name"
          className="w-[45%] border-2 bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
        />
        <input
          type="text"
          placeholder="Name"
          className="w-[45%] border-2 bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
        />
      </div>
      <textarea
        placeholder="Message"
        id=""
        cols="30"
        rows="10"
        className="w-[100%] my-4 border-2 bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
      ></textarea>
      <button className="bg-red-500 text-white p-2 rounded-lg">Send</button>
    </div>
  );
};

export default ContactForm;
