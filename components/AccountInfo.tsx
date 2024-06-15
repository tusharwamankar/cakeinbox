import React from "react";
import { CgProfile } from "react-icons/cg";
import { Button } from "./ui/button";

const AccountInfo = () => {
  return (
    <div className="flex flex-col gap-6 justify-start h-fit w-fit text-[#bbbcbd] bg-[#1b1f23] max-w-2xl rounded-xl border border-[#373a3d] p-4 mx-auto" >
      <div className="border-b py-4">
        <CgProfile className="mx-auto border rounded-full p-2 mb-4" size={50} />
        <p>Customer Name</p>
        <p>Open Profile</p>
      </div>
      <div className="border-b py-4">
        <p>Profile viewers</p>
        <p>Profile viewers once again</p>
      </div>
      <div className="py-2 gap-2 flex flex-col">
        <Button>GO TO CART</Button>
        <Button>WISHLIST</Button>
      </div>
    </div>
  );
};

export default AccountInfo;
