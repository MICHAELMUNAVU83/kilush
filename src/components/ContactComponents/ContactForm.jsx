import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
const ContactForm = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold libre text-start my-4 text-white">
        Get In Touch
      </h1>
      <p className="h-[1px] bg-[#5FBFF9] w-[80%]  my-4" />
      <div className="flex md:flex-row flex-col gap-4 justify-between mplus ">
        <input
          type="text"
          placeholder="Name"
          className="md:w-[45%] border-2  outline-none bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
        />
        <input
          type="text"
          placeholder="Subject"
          className="md:w-[45%] border-2 outline-none bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
        />
      </div>
      <textarea
        placeholder="Message"
        id=""
        cols="30"
        rows="10"
        className="w-[100%]  outline-none my-4 border-2 bg-[#0F0F0F] border-gray-400  p-2 flex justify-between "
      ></textarea>
      <button className="text-gray-500 libre uppercase font-bold  cursor-pointer items-center gap-2 flex">
        Send Message
        <BiArrowFromLeft className="text-[#5FBFF9] text-xl " />
      </button>
    </div>
  );
};

export default ContactForm;
