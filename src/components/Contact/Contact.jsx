import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className=" w-full h-auto bg-red-400 text-white p-5   xl:gap-10  xl:w-1/2  2xl:w-full 2xl:px-20  ">
      <div className="flex flex-col gap-5 xl:flex-row xl:gap-10 2xl:w-full">
        <div className="flex flex-col gap-5 xl:w-1/2">
          <h3 className="text-2xl xl:text-3xl font-bold">Get in touch</h3>
          <p className="text-sm xl:text-base xl:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius
            eligendi in laboriosam delectus ipsum inventore alias dolorem
            ducimus aliquid.
          </p>
          <p className="text-sm xl:text-base">
            134/296 The Pleno Suksawat 30, <br />
            Bang Pakok Sub-district, Rat Burana District, Bangkok 10140
          </p>
          <p className="text-sm xl:text-base">
            <FaPhone className="inline mr-2" />
            (+66)92-934-3730
          </p>
          <p className="text-sm xl:text-base">
            <FaEnvelope className="inline mr-2" />
            sikarin.spk@gmail.com
          </p>
        </div>

        <div className="flex flex-col xl:w-1/2">
          <form action="" className="flex flex-col gap-3 xl:gap-4">
            <div className="flex flex-col gap-5 xl:flex-row xl:gap-3">
              <div className="flex flex-col xl:w-1/2">
                <label
                  className="block  text-sm xl:text-base mt-2 mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full h-10 rounded text-black border-none px-3 xl:h-12 xl:w-[350px]"
                  type="text"
                  placeholder="eg. John"
                  id="first-name"
                />
              </div>
              <div className="flex flex-col xl:w-1/2">
                <label
                  className="block text-sm xl:text-base mt-2 mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="w-full h-10 rounded text-black border-none px-3 xl:h-12 xl:w-[350px]"
                  type="text"
                  placeholder="eg. John"
                  id="last-name"
                />
              </div>
            </div>
            <label
              className="block text-sm xl:text-base "
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              className="w-full h-40 rounded text-black border-none p-3 xl:h-[80px] xl:w-[350px]"
              id="message"
              cols="30"
              rows="10"
              placeholder="Type here"
            ></textarea>
            <button
              className="text-blue-500 bg-white rounded-md w-[100px] h-10 mt-4 xl:h-12 xl:w-40 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
