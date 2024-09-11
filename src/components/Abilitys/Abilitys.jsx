import React from "react";
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from "react-icons/fa6";

function Abilitys() {
  return (
    <div className="bg-red-400 h-[300px] text-white text-center overflow-hidden">
    <h3 className="mt-[40px] text-4xl font-bold text-white">My Skill Set</h3>
    <ul className="flex flex-wrap justify-center list-none mt-[70px]">
        <li className="mx-[20px] my-[10px]">
            <FaSquareJs className="w-[80px] h-[80px]" />
        </li>
        <li className="mx-[20px] my-[10px]">
            <FaReact className="w-[80px] h-[80px]" />
        </li>
        <li className="mx-[20px] my-[10px]">
            <FaSass className="w-[80px] h-[80px]" />
        </li>
        <li className="mx-[20px] my-[10px]">
            <FaGitAlt className="w-[80px] h-[80px]" />
        </li>
        <li className="mx-[20px] my-[10px]">
            <FaNode className="w-[80px] h-[80px]" />
        </li>
    </ul>
</div>


  );
}

export default Abilitys;
