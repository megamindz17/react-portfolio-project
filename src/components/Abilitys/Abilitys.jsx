import React from "react";
import { FaSquareJs, FaReact, FaGitAlt, FaNode } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";


function Abilitys() {
  return (
    <div className=" bg-primary w-auto py-10 text-white text-center overflow-hidden xs:flex xs:flex-col xs:justify-center xs:items-center">
      <div className="xs:w-full h-full flex flex-col justify-center items-center">
        <h3 className="mt-[40px] text-4xl font-bold text-white">
          My Skill Set
        </h3>
      
          <ul className="flex flex-col sm:flex-row md:flex-row gap-12 list-none mt-[70px] ">
            <li className="mx-[20px] my-[10px]">
              <FaSquareJs className="w-[80px] h-[80px]" />
            </li>
            <li className="mx-[20px] my-[10px]">
              <FaReact className="w-[80px] h-[80px]" />
            </li>
            <li className="mx-[20px] my-[10px]">
              <SiTailwindcss className="w-[80px] h-[80px]" />
            </li>
            <li className="mx-[20px] my-[10px]">
              <FaGitAlt className="w-[80px] h-[80px]" />
            </li>
            <li className="mx-[20px] my-[10px]">
              <FaNode className="w-[80px] h-[80px]" />
            </li>
          </ul>
    
      </div>
    </div>
  );
}

export default Abilitys;
