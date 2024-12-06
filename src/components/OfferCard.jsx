import { useEffect, useState } from "react";

const OfferCard = ({ img, title, para, absolute = true, c = "" }) => {
  return (
    <div
      className={`w-full h-[60vh] bg-green-100 ${
        absolute ? "absolute top-full" : "relative"
      } rounded-[2vw] p-[2vw] flex gap-[2vw] ${c}`}
    >
      <div className="offer-left h-full w-[40%] bg-white rounded-[1vw] overflow-hidden p-[1vw]">
        <img
          className="h-full w-full object-cover rounded-[.5vw]"
          src={img}
          alt=""
        />
      </div>
      <div className="offer-right w-[60%] h-full flex flex-col justify-center">
        <div className="w-[90%]">
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-[#484848] leading-[1.4] mt-[1vw]">{para}</p>
      </div>
    </div>
  );
};

export default OfferCard;
