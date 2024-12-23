import {Hero} from "./components/hero/hero";
import { LogoSection } from "./components/logosection/logosection";
import NewArrival from "./components/newarrival/newarrival";
import TopSeller from "./components/topsell/topsell";
 
import Customer from "./components/customer/customer";
import Footer from "./components/footer/footer";



import TopHeader from "./components/topheader/topheader";
import Navbar from "./components/navbar/navbar";




export default function Home() {
  return (
  <div className="max-w-full h-full flex-grow justify-start items-center">
    <TopHeader/>
    <Navbar/>
    <Hero/>
    <LogoSection/>
    
    <NewArrival/>
    <TopSeller/>
    
    <Customer/>
    
    
    
    <Footer/>
    
  </div>
  );
}