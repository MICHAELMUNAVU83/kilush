import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
const ContactForm = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-start my-4 text-white">
        Contact Form
      </h1>
      <p className="h-[1px] bg-[#5FBFF9] w-[80%]  my-4" />
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
      <p className="text-gray-500 uppercase font-bold  transition-all ease-in-out duration-500 cursor-pointer items-center gap-2 flex">
        Send Message
        <BiArrowFromLeft className="text-[#5FBFF9] text-xl " />
      </p>
    </div>
  );
};

export default ContactForm;
