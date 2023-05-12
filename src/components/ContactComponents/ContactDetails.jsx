import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col  gap-2">
      <div className="flex justify-between  ">
        <div className="w-[40%] border-b border-[#5FBFF9] p-2 flex justify-between ">
          <p className="bg-[#5FBFF9] text-black px-2  rounded-lg">
            Address :
          </p>
          <p className="text-white">Nairobi, Kenya</p>
        </div>
        <div className="w-[40%] border-b border-white p-2  flex justify-between ">
          <p className="bg-[#5FBFF9] text-black px-2  rounded-lg">
            Address :
          </p>
          <p className="text-white">Nairobi, Kenya</p>
        </div>
      </div>

      <div className="flex justify-between  ">
        <div className="w-[40%] border-b border-white p-2 flex justify-between ">
          <p className="bg-[#5FBFF9] text-black px-2  rounded-lg">
            Address :
          </p>
          <p className="text-white">Nairobi, Kenya</p>
        </div>
        <div className="w-[40%] border-b border-[#5FBFF9] p-2 flex justify-between ">
          <p className="bg-[#5FBFF9] text-black px-2  rounded-lg">
            Address :
          </p>
          <p className="text-white">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
