import Image from "next/image";
import { Inter } from "next/font/google";
import Slidertwo from "@/components/landing-page/Slidertwo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Slidertwo />
    </>
  );
}
