import React from "react";
import Bitcoinchat from "../bitcoinchart/Bitcoinchat";

const BtcChart = () => {
  return (
    <>
      <div>
        <div className="tcChart lg:flex flex-col lg:flex-row items-center lg:min-h-[80vh] px-5 lg:px-20">
          <div className=" lg:w-[50%] text-center">
            <div className="title pb-5 text-3xl lg:text-4xl font-bold">
              BITCON PRICE CHART
            </div>
            <Bitcoinchat />
          </div>
          <div className=" lg:w-[50%] text-center">
            <div className="title py-5 text-3xl lg:text-4xl font-bold">
              COMPANY INFORMATION
            </div>
            <div className=" mx-5 lg:mx-10 gap-6 lg:flex justify-center">
              <div className="cert lg:w-[70%] h-[60vh]"></div>
              <div className="border-l-[15px] text-start pl-2 border-l-[#041E37] w-[60%] h-[35vh]">
                <span className="text-[#041E37] font-semibold text-lg">
                  Company Name
                </span>{" "}
                <br />
                <br />
                <span className="text-[#041E37] font-bold text-2xl">
                  COINVISTAWEALTH
                </span>{" "}
                <br />
                <span className="text-[#041E37] font-bold text-2xl">LTD</span>
                <br />
                <br />
                <br />
                <span className="text-[#041E37] font-semibold text-lg">
                  Company Number
                </span>{" "}
                <span className="text-[#041E37] font-bold text-2xl">
                  #11445991
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtcChart;
