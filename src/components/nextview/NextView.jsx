import React from "react";
import TradeChart from "../tradchat/TradeChart";

const NextView = () => {
  return (
    <>
      <div>
        <div className=" bg-[#1D2330] h-[75vh] border-2 border-b-[24px] rounded-md border-[#41871D]">
            <TradeChart />
        </div>
      </div>
    </>
  );
};

export default NextView;