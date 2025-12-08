import Image from "next/image";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Domain from "@/app/components/domain";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    
    <div >
      <Header/>
      <Hero/>
      <About/>
      <Domain/>
      <Footer/>
    </div>
  );
}
