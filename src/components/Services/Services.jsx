import React from 'react'
import {FaCode, FaPaintbrush ,  FaDesktop} from 'react-icons/fa6'

function Service() {
  return (
    <div className="bg-white h-[600px] text-center overflow-hidden mt-10">
    <h3 className="mt-[60px] text-4xl font-bold text-[#0085FF]">My Service</h3>
    <div className="mt-[110px] flex justify-center flex-wrap gap-x-[50px] gap-y-[20px]">
        <div className="w-[250px] flex flex-col items-center">
            <FaCode className="w-[80px] h-[80px] text-[#0085FF]" />
            <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Web Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className="w-[250px] flex flex-col items-center">
            <FaPaintbrush className="w-[80px] h-[80px] text-[#0085FF]" />
            <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px]">Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className="w-[250px] flex flex-col items-center">
            <FaDesktop className="w-[80px] h-[80px] text-[#0085FF]" />
            <h4 className="text-[#0085FF] text-2xl font-bold mt-[25px] w-[350px]  ">Front-end Consulting</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
    </div>
</div>
  )
}

export default Service
