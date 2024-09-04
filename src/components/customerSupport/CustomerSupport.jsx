import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TradingServices from '../../components/tradeservice/TradingServices';
import SideBar from '../../components/sidebar/SideBar';

const CustomerSupport = () => {
  return (
    <>
      <div>
        <div className="contact" data-aos="flip-right">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            CUSTOMER SUPPORT
          </div>
          <div className="flex gap-[60px] bg-[#3D5185] pb-[30px]">
            <div className="hidden sm:block">
              <SideBar />
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[5px] pt-[80px] px-[10px] sm:px-0  sm:text-left text-center">
                <h1 className="text-white text-[40px] sm:text-left text-center">
                  10xSignal Support
                </h1>
                <h1 className="text-white text-[20px]">
                  For inquiries, suggestions or complains. Mail us
                </h1>
                <h1 className="text-green-500 text-[30px] ">
                  info@10xsignal.com
                </h1>
              </div>

              <div className="pl-[5px] sm:pl-0">
                <label className="block text-white text-[20px]">
                  Message<span className="text-red-400">*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="bg-[#3D5185] border border-white w-[23rem] sm:w-[36rem] rounded"
                />
                <button className="block mt-[30px] bg-green-600 py-[10px] px-[15px] rounded-xl text-white text-[20px] font-[Montserrat] font-[500]  w-[23rem] sm:w-[36rem] hover:bg-green-500">
                  Send
                </button>
              </div>
            </div>
          </div>
          <TradingServices />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
