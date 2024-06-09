import React from "react";
import { IoImage } from "react-icons/io5";
import { Button } from "./ui/button";

const Thecard = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-200 m-4 rounded-xl h-fit py-4 mx-auto" >
      <div className="flex justify-center items-center">
        <IoImage size={250} />
      </div>
      <div className="px-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          <h2>Cake Name</h2>
          <p>Price</p>
        </div>
        <p className="text-green-600 my-2 ">In stock</p>
        <div className="mb-4">
            size
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full">Buy Now</Button>
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Thecard;
