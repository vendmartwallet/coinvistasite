import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div className="hero h-[80vh] lg:h-[100vh] flex flex-col pt-20 lg:justify-center items-center">
          <div className=" text-white leading-[76px] text-center font-medium text-3xl lg:text-6xl ">
            CRYPTOCURRENCY/FOREX <br />
            INVESTMENT
          </div>

          <div className=" text-[#8DC63F] font-semibold lg:font-light text-[20px] my-4 lg:w-[700px] text-center">
            By enabling this easy and secure way to invest in Bitcoin and ether
            we hope to have eliminated the boundaries that earlier prevented
            individuals and companies.
          </div>

          <div className="btns flex items-center gap-16">
            <button className=" bg-[#8DC63F] px-8 font-normal hover:bg-black text-white py-3 border-none rounded">
              SIGN UP
            </button>
            <button className=" bg-white px-7 py-3 font-normal hover:text-[#EFD778] hover:bg-white border-none rounded">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
