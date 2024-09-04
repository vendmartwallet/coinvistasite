import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TradingServices from "../../components/tradeservice/TradingServices";
import SideBar from "../../components/sidebar/SideBar";

const Withdrawal = () => {
  const WithdrawalRequest = () => {
    return (
      <div className=" w-[50vw] flex items-center ">
        <div className="w-full p-8 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-4xl text-[#F6A415] mb-6">
            Request for Withdrawal
          </h2>
          <div className="bg-white rounded-md p-4 mb-6">
            <p className="text-lg">
              Your Payment Method is{" "}
              <span className="font-semibold text-[#FFAD47]">Bitcoin</span>
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm text-white mb-2">
                Enter Withdrawal Address
              </label>
              <input
                type="text"
                id="amount"
                placeholder="Enter Address..."
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm text-white mb-2">
                Enter Amount to withdraw($)
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter Amount"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Complete Request
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="contact" data-aos="flip-right">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            WITHDRAWAL
          </div>
          <div className="flex gap-[60px] bg-[#3D5185] pb-[30px]">
            <div className="hidden sm:block">
              <SideBar />
            </div>

            <div className="flex flex-col gap-[30px] bg-[#081332] mt-8 lg:px-12 py-8 rounded-2xl shadow-md">
              <WithdrawalRequest />
            </div>
          </div>
          <TradingServices />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
