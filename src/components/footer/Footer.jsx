import React from "react";
import BTC from "../../assets/footerbtc.jpg";
import XRP from "../../assets/footerxrp.jpg";
import DOGE from "../../assets/footerdoge.jpg";
import PM from "../../assets/footerm2.jpg";
import ETH from "../../assets/footereth.png";
import LTC from "../../assets/footerltc.jpg";
import TRON from "../../assets/footerpic.jpg";
import LOGO from "../../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#062B1F] text-yellow-50 pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <img
              src={LOGO}
              alt="The Best Trading Service"
              className="mx-auto md:mx-0 mb-4"
            />
            <p>A FIRM FOR CRYPTO CURRENCY INVESTMENT SOLUTION</p>
          </div>
          <div>
            <h3 className="text-xl text-[#F2DA7B] font-bold mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#F2DA7B]">
                  HOME
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-[#F2DA7B]">
                  FAQS
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#F2DA7B]">
                  TERMS
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F2DA7B]">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F2DA7B]">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F2DA7B]">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://yourwebsite.com"
                  className="hover:text-[#F2DA7B]"
                >
                  WEBSITE ADDRESS
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@10xsignal.com"
                  className="hover:text-[#F2DA7B]"
                >
                  EMAIL: info@10xsignal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-center">PAYMENT METHOD</h3>
          <div className="flex justify-center space-x-4">
            <img src={BTC} alt="BTC" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={XRP} alt="XRP" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={DOGE} alt="Doge" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={PM} alt="PM" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={ETH} alt="ETH" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={LTC} alt="LTC" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
            <img src={TRON} alt="Tron" className=" h-10 w-10 lg:h-28 lg:w-28 rounded-sm animate-scale" />
          </div>
        </div>
      </div>
      <div className="bg-[#] py-4 mt-10">
        <p className="text-center text-sm">
          © COPYRIGHT 10xSIGNAL. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
