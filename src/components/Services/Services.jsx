import React from 'react';
import { FaCode,  FaDesktop } from 'react-icons/fa';
import { FaPaintbrush } from "react-icons/fa6";


function Service() {
  return (
    <div className="flex flex-col   h-full text-center overflow-hidden mt-10 py-10 ">
      <h3 className="mt-[60px] text-4xl font-bold text-[#0085FF]">My Service</h3>
      <div className="flex flex-col md:flex-row justify-center items-center mt-[100px]  gap-x-[50px] gap-y-[50px]">
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <FaCode className="w-[80px] h-[80px] text-[#0085FF] " />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Web Development</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <FaPaintbrush className="w-[80px] h-[80px] text-[#0085FF]" />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Web Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <FaDesktop className="w-[80px] h-[80px] text-[#0085FF]" />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Front-end Consulting</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
