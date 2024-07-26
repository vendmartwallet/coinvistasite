import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AccountType = () => {
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
      <div>
        <div className="accType">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            OUR PLANS
          </div>
          <div className="min-h-[100vh] py-20">
            <div className="px-5">
              <div className="title text-3xl lg:text-5xl font-medium text-[#EFD778] text-center ">
                OUR TRADING ACCOUNT TYPES
              </div>
              <div className="txt text-[#1B334D] text-center lg:mx-auto lg:w-[40vw] pt-5 pb-16 text-lg">
                Our market offers clients different options when opening an
                account. Depending on the trader type, there are various
                accounts that may best suit your needs. If you open a premium
                account with us today, you can receive many valuable bonus
                features and services that will definitely enhance your
                experience trading with us.
              </div>
            </div>

            <div className=" lg:flex grid grid-cols-1 justify-center gap-6 lg:gap-0 items-center">
              <Plan
                planName="Plan A"
                planTitle1="MINI"
                planTitle2="PLAN"
                interestRate="35"
                minAmount="500"
                maxAmount="5000"
                buttonText="INVEST"
              />

              <Plan
                planName="Plan B"
                planTitle1="SILVER"
                planTitle2="PLAN"
                interestRate="35"
                minAmount="500"
                maxAmount="5000"
                buttonText="INVEST"
              />

              <Plan
                planName="Plan C"
                planTitle1="GOLD"
                planTitle2="PLAN"
                interestRate="35"
                minAmount="500"
                maxAmount="5000"
                buttonText="INVEST"
              />

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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AccountType;
