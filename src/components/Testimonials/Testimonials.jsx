import React from "react";

function Testimonials() {
  return (
    <div className="flex flex-col h-auto bg-primary text-center  w-full mx-auto overflow-hidden p-10 text-white ">
      <h3 className="mt-[55px] text-[32px] font-bold">Testimonials</h3>
      <div className="flex flex-col justify-center items-center gap-10 mt-[80px] sm:flex-row  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex flex-col justify-center items-center  w-[320px] mx-[30px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full my-[20px]"
          />
          <h4 className="text-[14px] font-bold">John Doe</h4>
          <p className="text-[12px] text-gray-500">Web Developer</p>
        </div>
        <div className="flex flex-col justify-center items-center  w-[320px] mx-[30px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1687187499277-e1c59bd3032f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full my-[20px]"
          />
          <h4 className="text-[14px] font-bold">John Doe</h4>
          <p className="text-[12px] text-gray-500">Web Developer</p>
        </div>
        <div className="flex flex-col justify-center items-center  w-[320px] mx-[30px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
            optio architecto expedita amet possimus laudantium. Magni eaque
            soluta voluptas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full my-[20px]"
          />
          <h4 className="text-[14px] font-bold">John Doe</h4>
          <p className="text-[12px] text-gray-500">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
