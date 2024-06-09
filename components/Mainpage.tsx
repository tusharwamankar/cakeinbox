import React from "react";
import Card from "./Card";
import Thecard from "./Thecard";

const Mainpage = () => {
  return (
    <div className="flex flex-wrap bg-[#1b1f23] rounded-xl border border-[#373a3d] max-w-4xl mx-auto w-fit">
      {/* <Card /> */}
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
      <Thecard />
    </div>
  );
};

export default Mainpage;
