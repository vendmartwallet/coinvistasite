import React from "react";
import StockImg from "../../assets/stockimg.jpg";

const AbtComp = () => {
  return (
    <>
      <div>
        <div className="abtcomp min-w-full bg-[#062B1F] py-14">
          <div className="title flex flex-col pb-10">
            <div className=" text-[#E9D16F] font-semibold font text-3xl  text-center">
              ABOUT 10XSIGNAL
            </div>
            <div className="bg-[#73818E] mt-2 h-1 w-[25vw] mx-auto"></div>
          </div>

          <div className="div1 grid grid-cols-1 lg:flex items-center justify-center gap-14 lg:h-[50vh] mx-auto">
            <div className=" h-[45vh] lg:w-[35%]">
              <iframe
                height="100%"
                width="100%"
                src="https://www.youtube.com/embed/mrtSAgcpack"
                title="What is Bitcoin Mining for Beginners - Short and Simple"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="px-5 lg:w-[40%] flex flex-col justify-center items-center text-white text-2xl font-light">
              <span className="pb-2 text-[#E9D16F] font-semibold italic text-3xl">
                10XSIGNAL
              </span>
              is a legally operating company. We were one of the first to invest
              in cryptocurrencies. 10XSIGNAL is a leading blockchain investment
              company. Our mission is to act as a catalyst for universal
              adoption and blockchain innovation. We focus only on investing in
              blockchain technologies. Our team has experience in both
              traditional financing and emerging blockchain technology.
            </div>
          </div>

          <div className="div1 mt-10 lg:flex items-center justify-center gap-14 h-lg:[50vh] mx-5 lg:mx-auto">
            <div className="px-5 lg:w-[40%] flex flex-col justify-center items-center text-white text-2xl font-light">
              <span className="pb-2 text-[#E9D16F] font-semibold italic text-3xl">
                Denna Lewis
              </span>{" "}
              It provides a huge variety of investments and great community of
              traders.{" "}
              <span className="pb-2 text-[#E9D16F] font-semibold italic text-3xl">
                Walter Jobs
              </span>{" "}
              Successfull people do what unsuccessful people are not willing to
              do. Don't wish it were easier, wish you were better.
            </div>
            <div className="lg:w-[35%]">
              <img src={StockImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbtComp;
