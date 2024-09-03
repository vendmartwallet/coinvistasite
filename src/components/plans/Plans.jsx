import React from "react";
import VisaCard from "../../assets/visavest.png";

const Plans = () => {
  const Plan = ({
    planName,
    planTitle1,
    planTitle2,
    interestRate,
    minAmount,
    maxAmount,
    buttonText,
  }) => {
    return (
      <>
        <div>
          <div className="bg-[#062B1F] text-[#E9D16F] mx-10 lg:w-[18vw] pt-8 rounded-2xl shadow-lg flex flex-col items-center">
            <h3 className="text-lg">{planName}</h3>
            <h1 className="text-5xl font-normal my-4">
              {planTitle1} <br /> <span>{planTitle2}</span>
            </h1>
            <p className="text-xl mb-4">
              {interestRate}%<hr className="pt-[1px] bg-[#E9D16F]" />
            </p>
            <div className="text-center text-lg text-white mb-4">
              <p>Minimum : ${minAmount}</p>
              <p>Maximum : ${maxAmount}</p>
            </div>
            <button className="bg-[#E9D16F] font-semibold text-1xl text-[#041E37] py-3 px-12 rounded-md mt-auto">
              {buttonText}
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="plans">
        <div className="title flex flex-col py-14">
          <div
            className=" text-[#E9D16F] font-semibold font text-5xl  text-center"
            data-aos="fade-up"
          >
            OUR PLANS
          </div>
          <div className="bg-[#E9D16F] mt-2 h-1 w-[9.7vw] mx-auto"></div>
        </div>
        <div
          className=" lg:flex grid grid-cols-1 justify-center gap-6 lg:gap-0 items-center"
        >
          <div data-aos="flip-up">
          <Plan
            planName="Plan A"
            planTitle1="MINI"
            planTitle2="PLAN"
            interestRate="35"
            minAmount="500"
            maxAmount="5000"
            buttonText="INVEST"
          />
          </div>

          <div data-aos="flip-up">
          <Plan
            planName="Plan B"
            planTitle1="SILVER"
            planTitle2="PLAN"
            interestRate="35"
            minAmount="500"
            maxAmount="5000"
            buttonText="INVEST"
          />
          </div>

          <div data-aos="flip-up">
          <Plan
            planName="Plan C"
            planTitle1="GOLD"
            planTitle2="PLAN"
            interestRate="35"
            minAmount="500"
            maxAmount="5000"
            buttonText="INVEST"
          />
          </div>

          <div data-aos="flip-up">
          <Plan
            planName="Plan D"
            planTitle1="PLATINUM"
            planTitle2="PLAN"
            interestRate="35"
            minAmount="500"
            maxAmount="5000"
            buttonText="INVEST"
          />
          </div>
        </div>

        <div className="third lg:flex justify-around px-5 lg:px-20 text-white w-full py-8 lg:py-20">
          <div className="texts lg:w-[50%]" data-aos="fade-left">
            <div className="text-4xl font-medium pb-3">10XSIGNAL CARDS</div>
            <div className="text-base">
              The site is owned by 10XSIGNAL LTD. a registered company for
              cryptocurrency investments solution. We give a chance to new,
              dynamilcally developing ICO projects that bring huge profits in an
              amazing short time. Join Us by choosing one of our plans today...
            </div>
            <button className=" bg-[#E9D16F] text-black font-medium py-2 px-3 text-lg lg:text-2xl  rounded-md mb-8 lg:mb-0 mt-10">
              KNOW MORE
            </button>
          </div>

          <div className="imgview" data-aos="fade-right">
            <img src={VisaCard} alt="" width="90%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
