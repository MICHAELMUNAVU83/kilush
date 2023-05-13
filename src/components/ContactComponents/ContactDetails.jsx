import React from "react";

const ContactDetails = () => {
  const contactDetails = [
    {
      id: 2,
      title: "Phone",

      content: "0713456785",
    },
    {
      id: 1,
      title: "Gmail",
      content: "amos@gmail.com",
    },
    {
      id: 3,
      title: "Location",
      content: "Nairobi, Kenya",
    },
    {
      id: 4,
      title: "Linkedin",
      content: "Amos Kibet",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {contactDetails.map((detail) => (
        <div className={detail.id % 2 === 0 ? "border-b border-[#5FBFF9] p-2 flex justify-between place-items-start" : "border-b border-white p-2 flex justify-between place-items-start"}>
          <p className="bg-[#5FBFF9] text-black px-2  rounded-lg">{detail.title}</p>
          <p className="text-white">{detail.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
