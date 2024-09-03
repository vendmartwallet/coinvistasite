import React from "react";
import TradingViewWidget from "../dashwidget/DashWidget";

const DashLoad = () => {
  return (
    <>
      <div>
        <div className="dashLoad mt-6" data-aos="flip-right">
          <TradingViewWidget />
        </div>
      </div>
    </>
  );
};

export default DashLoad;
