import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Numbers() {
  return (
    <div className=" h-auto bg-red-400  flex flex-col justify-center items-center text-center gap-10 py-[120px] sm:flex-row flex-wrap md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="text-white mx-[50px]">
        <h3 className="text-[48px] font-bold">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={100} duration={5} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p className="text-[24px] font-bold">Project Delivered</p>
      </div>
      <div className="text-white mx-[50px]">
        <h3 className="text-[48px] font-bold">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p className="text-[24px] font-bold">Companies Helped</p>
      </div>
      <div className="text-white mx-[50px]">
        <h3 className="text-[48px] font-bold">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={1} duration={5} /> : null}+
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p className="text-[24px] font-bold">Years of experience</p>
      </div>
      <div className="text-white mx-[50px]">
        <h3 className="text-[48px] font-bold">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <CountUp start={0} end={100} duration={5} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p className="text-[24px] font-bold">Happy Clients</p>
      </div>
    </div>
  );
}

export default Numbers;
