import React from "react";

const ContactDets = ({ title, para, ic }) => {
  return (
    <div class="flex items-center p-4 bg-[#E5F4FC] rounded-[.7vw]">
      <div class="flex items-center justify-center w-[3.5vw] h-[3.5vw] bg-[#6CBCDE] rounded-full">
        <i className={`text-white text-4xl ${ic}`}></i>
      </div>
      <div class="ml-4">
        <p class="font-medium">{title}</p>
        <p class="text-[#484848]">{para}</p>
      </div>
    </div>
  );
};

export default ContactDets;
