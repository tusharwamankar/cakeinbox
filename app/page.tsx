import AccountInfo from "@/components/AccountInfo";
import Mainpage from "@/components/Mainpage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-2 my-10 max-w-6xl mx-auto">
      <AccountInfo />
      <Mainpage />
    </div>
  );
}
