import React from "react";
import Tilt from "react-parallax-tilt";

function Portfolios() {
  return (
    <div className="max-w-[1170px] h-auto mx-auto overflow-hidden">
      <h3 className="text-4xl font-bold mt-[35px] text-center">Portfolios</h3>
      <div className="flex flex-row flex-wrap justify-center items-center gap-[55px] mt-[50px] sm:grid-cols-1 sm:gap-y-[20px] sm:pt-[20px]">
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 1"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 2"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 3"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 4"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 5"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 6"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolios;
