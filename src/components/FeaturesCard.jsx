import React from "react";

const FeaturesCard = () => {
  return (
    <div className="features-card w-[30%] flex flex-col justify-center items-center">
      <div
        className="h-[3vw] w-[3vw] overflow-hidden bg-red-50 rounded-full
            "
      >
        <img
          className="h-full w-full object-cover"
          src="/images/team.png"
          alt=""
        />
      </div>
      <h5 className="font-medium text-[#50A2C4]">Meeting Room Amenities</h5>
      <p className="text-[#484848]">
        Empower employees to choose the meeting rooms that have the required
        amenities
      </p>
    </div>
  );
};

export default FeaturesCard;
