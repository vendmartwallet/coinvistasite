import React, { useEffect } from "react";

const TradingViewPrices = () => {
  useEffect(() => {
    const widgetId = "tradingview-widget-script";
    const existingScript = document.getElementById(widgetId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = widgetId;
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          { proName: "COINBASE:USDTUSD", title: "Tether" },
          { proName: "BINANCE:BNBUSDT", title: "Binance Coin" },
          { proName: "BINANCE:ADAUSDT", title: "Cardano" },
        ],
        colorTheme: "dark",
        isTransparent: false,
        displayMode: "regular",
        locale: "en",
      });
      document.getElementById("tradingview-widget").appendChild(script);
    }

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget"></div>
    </div>
  );
};

export default TradingViewPrices;
