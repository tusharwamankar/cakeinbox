import React from "react";
import Reviewbox from "./Reviewbox";

const Review = () => {
  return (
    <div className="bg-slate-200">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="font-bold font-sans">Review : </h1>
        <div className="">
          <Reviewbox />
        </div>
      </div>
    </div>
  );
};

export default Review;
