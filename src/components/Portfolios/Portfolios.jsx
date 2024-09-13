import React from "react";
import Tilt from "react-parallax-tilt";
import cerSql from "../img/borntodev-acdem.png";
import htmlCer from "../img/certificate-frontend.jpg";
import javascriptCer from "../img/frontend.jpg";

function Portfolios() {
  return (
    <div className="pb-10 bg-bright max-w-[1980px] h-auto mx-auto overflow-hidden xl:w-full">
      <h3 className="text-4xl font-bold mt-[35px] text-center">Certificates</h3>
      <div className="flex flex-row flex-wrap  justify-center items-center gap-[55px] mt-[50px] sm:grid-cols-1 sm:gap-y-[20px] sm:pt-[20px]   xl:flex xl:flex-rows xl:justify-center xl:items-center">
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={htmlCer}
              alt="Project 2"
              className="w-[350px] h-[300px] rounded-[20px] object-content"
            />
          </Tilt>
          <p className="text-sm font-semibold mt-[18px] text-center">
            HTML CSS Javascript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={cerSql}
              alt="Project 1"
              className="w-[350px] h-[300px] rounded-[20px] object-content"
            />
          </Tilt>
          <p className="text-sm font-semibold mt-[10px] text-center">Certificate SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={javascriptCer}
              alt="Project 3"
              className="w-[350px] h-[300px] rounded-[20px] object-content"
            />
          </Tilt>
          <p className="text-sm font-semibold mt-[10px] text-center">Basic Javascript for Frontend</p>
        </div>
        {/* <div className="flex flex-col items-center">
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2fGVufDB8fDB8fHww"
              alt="Project 4"
              className="w-[300px] h-[300px] rounded-[20px] object-cover"
            />
          </Tilt>
          <p className="text-base mt-[10px] text-center">Project title</p>
        </div> */}
        {/* <div className="flex flex-col items-center">
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
        </div> */}
      </div>
    </div>
  );
}

export default Portfolios;
