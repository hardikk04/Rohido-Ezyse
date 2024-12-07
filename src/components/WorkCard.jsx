import React from "react";

const WorkCard = ({ index }) => {
  return (
    <div
      className={`work-card-${index} h-[50vh] w-full bg-[#F5FCFF] rounded-[1.5vw] p-[2vw] flex justify-between`}
    >
      <div className="work-card-left w-[48%] h-full bg-red-500 rounded-[.7vw] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1732046801426-f32529468176?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="work-card-right w-[48%] h-full">
        <h4 className="font-medium">Item Title</h4>
        <p className="text-[#484848]">
          This is a paragraph area where you can include any information you’d
          like. It’s an opportunity to tell a story about the business or
          describe a special service or product it offers. You can use this
          space to share the company history or highlight a particular feature
          that sets it apart from competitors.
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
