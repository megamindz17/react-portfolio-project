import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setToggled] = useState(false);

  function handleToggle() {
    setToggled(!isToggled);
  }

  return (
    <nav>
      <div className="bg-primary relative overflow-hidden px-6">
        <div className="max-w-[1170px] mx-auto flex justify-between items-center h-[60px]">
          <div className="font-bold text-white ">
            <a href="#" className="hover:text-sky-700 hover:bg-transparent ">
              My Profile
            </a>
          </div>

          <ul className="hidden md:flex list-none space-x-8 font-semibold">
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-sky-700 hover:bg-transparent  "
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-sky-700 hover:bg-transparent "
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-sky-700 hover:bg-transparent "
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="hidden md:flex w-[100px] h-[35px] bg-white justify-center items-center rounded-[20px] cursor-pointer transition duration-300 hover:bg-sky-600  hover:shadow-[0_0_20px_0_rgba(0,0,0,0.3)]">
            <a href="#" className="text-[#817e7e] no-underline font-semibold  ">
              About Me
            </a>
          </div>

          <FaBars
            className="text-white md:hidden absolute top-[30px] right-[20px]"
            onClick={handleToggle}
          />
        </div>

        {isToggled && (
          <div className="flex flex-col justify-center items-center">
            <ul className="md:hidden list-none mx-5 mt-4 space-y-4">
              <li className="flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-[22px]  text-white no-underline hover:text-sky-700 hover:bg-transparent   "
                >
                  Skill
                </a>
              </li>
              <li className="flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-[22px] text-white no-underline hover:text-sky-700 hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li className="flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-[22px] text-white no-underline hover:text-sky-700 hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:hidden w-[100px] mx-5 h-[35px] bg-white flex justify-center items-center rounded-[10px] cursor-pointer transition-opacity duration-1000 opacity-100 hover:bg-sky-600 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.3)] mt-3 mb-[20px]">
              <a
                href="#"
                className="text-[#333] font-semibold no-underline hover:text-sky-700"
              >
                About me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
