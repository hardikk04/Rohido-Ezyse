import React from "react";

const AboutCard = ({bg}) => {
  return (
    <div className={`w-[30vw] h-fit ${bg} relative z-[1] rounded-xl p-[1.5vw] py-[1vw]`}>
      <div className="review">
        <p>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
      </div>
      <div className="client-name mt-[1vw]">
        <h6 className="font-medium">Hardik Sisodiya</h6>
        <p className="text-[1vw]">Bhopal, India</p>
      </div>
    </div>
  );
};

export default AboutCard;
