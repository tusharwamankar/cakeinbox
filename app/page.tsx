import AccountInfo from "@/components/AccountInfo";
import Footer from "@/components/Footer";
import Mainpage from "@/components/Mainpage";
import Review from "@/components/Review";
import Showcase from "@/components/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 my-10">
      <Mainpage />
      <Showcase />
      <Review />
      <Footer />
    </div>
  );
}
