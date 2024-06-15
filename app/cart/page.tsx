import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex gap-4 max-w-5xl mx-auto ">
      <div className="max-w-3xl">
        <div className="flex items-center bg-gray-50 justify-between p-3 my-4 border rounded-md shadow-lg">
          <h1 className="text-sm flex gap-2">
            Deliver to : <p className="font-semibold">Place - 000000</p>
          </h1>
          <Button variant="secondary">Change</Button>
        </div>
        <div className="flex p-10 bg-gray-50 border rounded-lg shadow-lg">
          <Image
            className="border rounded-lg"
            src="/Images/one.jpg"
            height={150}
            width={150}
            alt=""
          ></Image>
          <div className="mx-4 my-2 flex flex-col">
            <div className="flex items-center justify-between gap-20">
              <h1>Name of the Cake</h1>
              <p className="text-sm">Delivered By : Tomorrow</p>
            </div>
            <p className="text-sm text-gray-600 my-1">Variety : Pure Veg</p>
            <div className=" flex items-center font-semibold my-4">
              <FaRupeeSign />
              499
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Add To Wishlist</Button>
              <Button variant="outline">Remove</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end bg-gray-50 border p-2 my-2 rounded-lg shadow-lg">
          <Button variant="secondary">Place Order</Button>
        </div>
      </div>
      <div className="max-w-2xl my-4 border rounded-lg bg-gray-50">
        <h1 className="text-gray-700 font-semibold border-b m-6">
          PRICE DETAILS
        </h1>
        <div className="flex flex-col gap-6 px-14 font-mono">
          <div className="flex items-center gap-40 ">
            <p>Price</p>
            <div className="flex items-center font-semibold text-gray-800">
              <FaRupeeSign />
              499
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Extra</p>
            <div className="flex items-center font-semibold text-gray-800">
              <FaRupeeSign />0
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery Charges</p>
            <div className="flex items-center font-semibold text-gray-800">
              <FaRupeeSign />0
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 my-4 py-4 border border-dotted">
          <h1 className="font-bold">Total Amount</h1>
          <div className="flex items-center font-semibold text-gray-800">
            <FaRupeeSign />
            499
          </div>
        </div>
        <h1 className="my-4 font-semibold text-green-700 ml-10">
          Hope You Will Like It!
        </h1>
        <div className="text-xs flex justify-end gap-1 px-4">
          <p>Need Help?</p>
          <p className="text-blue-600 cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default page;
