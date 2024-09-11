import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!isToggled); 
  }

  return (
    <nav>
      <div className="bg-red-400 relative overflow-hidden">
        <div className="max-w-[1170px] mx-auto flex justify-between items-center h-[60px]">
          <div className="font-bold text-white">
            <a href="#">My Profile</a>
          </div>

          <ul className="hidden md:flex list-none space-x-8 font-semibold">
            <li>
              <a href="#" className="text-white no-underline ">
                Skill
              </a>
            </li>
            <li>
              <a href="#" className="text-white no-underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-white no-underline">
                Contact
              </a>
            </li>
          </ul>

          <div className="hidden md:flex w-[100px] h-[35px] bg-white justify-center items-center rounded-[20px] cursor-pointer transition duration-300 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]">
            <a href="#" className="text-[#333] no-underline">
              About Me
            </a>
          </div>

          <FaBars
            className="text-white md:hidden absolute top-[30px] right-[20px]"
            onClick={handleToggle}
          />
        </div>

        {/* Mobile menu */}
        {isToggled && (
          <>
            <ul className="md:hidden list-none mt-4 space-y-4">
              <li>
                <a href="#" className="text-white no-underline">
                  Skill
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:hidden w-[100px] h-[35px] bg-white flex justify-center items-center rounded-[20px] cursor-pointer transition duration-300 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] mx-[30px] mb-[20px]">
              <a href="#" className="text-[#333] no-underline">
                Click me
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
