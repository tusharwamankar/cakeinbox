import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
      <div className="text-white p-4 mx-4">Logo</div>
      <div className=" flex items-center gap-8 text-white">
        <h3 className="text-gray-400 cursor-pointer hover:text-teal-50">
          Home
        </h3>
        <h3 className="text-gray-400 cursor-pointer hover:text-teal-50">
          Cakes
        </h3>
        <h3 className="text-gray-400 cursor-pointer hover:text-teal-50">
          Pastries
        </h3>
        <h3 className="text-gray-400 cursor-pointer hover:text-teal-50">
          About Us
        </h3>
      </div>
      <Button>Login/SignUp</Button>
    </div>
  );
};

export default Navbar;
