import React from 'react';
import { FaCode,  FaDesktop } from 'react-icons/fa';
import { FaPaintbrush } from "react-icons/fa6";
import { GrConnect } from "react-icons/gr";



function Service() {
  return (
    <div className=" bg-dark flex flex-col  h-full text-center overflow-hidden p-10">
      <h3 className="text-4xl font-bold text-[#0085FF]">My Experience</h3>
      <div className="flex flex-col md:flex-row justify-center items-center mt-[100px]  gap-x-[50px] gap-y-[50px]">
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <GrConnect className="w-[80px] h-[80px] text-[#0085FF] " />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px] w-[650px]">Health Wallet & Paotang</h4>
          <p className='font-medium text-[16px] mt-3 text-white'>is responsible for connecting the hospital's database system with Gateway to send expense information to the "Pao Tang" app.</p>
        </div>
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <FaPaintbrush className="w-[80px] h-[80px] text-[#0085FF]" />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Design UI</h4>
          <p className='font-medium text-[16px] mt-3 text-white'>Use Figma to design mockups in projects received while working, such as Police 4.0 , another </p>
        </div>
        <div className="w-[250px] flex flex-col justify-center items-center ">
          <FaDesktop className="w-[80px] h-[80px] text-[#0085FF]" />
          <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px] w-[650px]">Front-end Consulting</h4>
          <p className='font-medium text-[16px] mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
