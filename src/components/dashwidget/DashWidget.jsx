import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Remove any existing script
      const existingScript = containerRef.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"]');
      if (existingScript) {
        containerRef.current.removeChild(existingScript);
      }

      // Append the new script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: 400,
        currencies: [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "CNY",
        ],
        isTransparent: false,
        colorTheme: "dark",
        locale: "en",
        backgroundColor: "#000000",
      });
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
