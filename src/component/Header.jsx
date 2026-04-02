import React from "react";
import dicor1 from "../assets/dicor1.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import diocor2 from "../assets/dicor.png" 
import diocor3 from "../assets/dicor3.png" 
class Header extends React.Component {
  render() {
    return (
      <header className="sm:max-w-[1440px] w-full m-auto px-4 pb-10">
        <img src={diocor2} className="absolute -z-20 w-[900px] right-0 top-0 opacity-50"  alt="" />
        <img src={diocor3} className="absolute -z-20 w-[200px] right-0 "  alt="" />
        <div className="text-center mt-10 mb-16 relative">
          <h1 className="sm:text-[96px] text-[52px] font-bold leading-tight">
            Combine 
            <span className="text-orange-700 hidden sm:inline"> fine </span> 
            <span className="text-orange-700 sm:hidden inline"> Cool </span>
            images
          </h1>
          <img src={dicor1} className="hidden lg:block absolute top-[35%] left-[660px] -z-10 w-[180px]" alt="" />
          <p className="sm:text-[64px] text-[40px] font-black hidden sm:block">To represent a product</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-[1100px] mx-auto auto-rows-[220px] overflow-auto max-h-[80vh] sm:max-h-none pr-2">
          
          <div className="sm:row-span-3 bg-black text-white rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <p className="text-[18px] leading-6 mb-2">We aimed to deliver HQ templates for Figma</p>
              <span className="text-[14px] opacity-50">Used by 123 people</span>
            </div>
            <img src={img2} className="w-full h-[160px] object-cover rounded-2xl" alt="" />
            <button className="bg-[#6C63FF] text-white py-3 rounded-full font-medium">Learn more</button>
          </div>

          <div className="sm:col-span-2 sm:row-span-1 rounded-[32px] overflow-hidden relative">
            <img src={img1} className="w-full h-full object-cover" alt="" />
            <h2 className="absolute bottom-6 left-6 text-white text-[28px] font-bold">Consider it done!</h2>
          </div>

          <div className="sm:col-span-1 sm:row-span-1 flex items-start text-[14px] text-gray-400 p-2">
            This is multipurpose grid, it fits for portfolio, services or agency web site
          </div>

          <div className="sm:col-span-1 sm:row-span-1 rounded-[28px] overflow-hidden">
            <img src={img3} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="sm:col-span-1 sm:row-span-2 rounded-[32px] overflow-hidden">
            <img src={img4} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="sm:col-span-1 sm:row-span-1 flex gap-3">
            <div className="w-1/2 bg-[#F2F2F2] rounded-[24px] flex items-center justify-center">
              <img src={img5} className="w-10" alt="" />
            </div>
            <div className="w-1/2 bg-[#2F80ED] rounded-[24px] flex items-center justify-center">
              <img src={img6} className="w-10" alt="" />
            </div>
          </div>

          <div className="sm:col-span-1 sm:row-span-1 rounded-[28px] overflow-hidden">
            <img src={img7} className="w-full h-full object-cover" alt="" />
          </div>

        </section>
      </header>
    );
  }
}

export default Header;