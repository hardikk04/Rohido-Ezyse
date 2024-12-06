import React from "react";

const Button = ({ title, bg = true,c="" }) => {
  return (
    <button
      className={`px-[1.5vw] py-[.3vw] ${!bg ? `border-[#6CBCDE] border-2 text-[#6CBCDE] bg-[#F6FCFF]` : `text-white bg-[#6cbcde]`} font-bold  rounded-full ${c}`}
    >
      {title}
    </button>
  );
};

export default Button;
