import React from "react";
import { CgProfile } from "react-icons/cg";

const AccountInfo = () => {
  return (
    <div className="flex flex-col gap-6 justify-center text-[#bbbcbd] bg-[#1b1f23] max-w-[15%] rounded-xl border border-[#373a3d] mx-6 p-4">
      <div className="border-b py-4">
        <CgProfile className="mx-auto border rounded-full p-2 mb-4" size={50} />
        <p>Tushar Wamankar</p>
        <p>MCA'24 | NIT Kurukshetra</p>
      </div>
      <div className="border-b py-4">
        <p>Profile viewers</p>
        <p>Profile viewers once again</p>
      </div>
      <div className="py-4">
        <p>Go to cart</p>
        <p>Wishlist</p>
      </div>
    </div>
  );
};

export default AccountInfo;
