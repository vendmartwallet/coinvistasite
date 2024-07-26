import React, { useEffect, useRef } from "react";

const Bitcoinchat = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BTCUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_btc_chart",
      });
    };
    if (chartContainerRef.current) {
      chartContainerRef.current.appendChild(script);
    }

    // Cleanup script if the component is unmounted
    return () => {
      if (chartContainerRef.current) {
        chartContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ height: "60vh" }}>
      <div id="tradingview_btc_chart" style={{ height: "100%" }}></div>
    </div>
  );
};

export default Bitcoinchat;
