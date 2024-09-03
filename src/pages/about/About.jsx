import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BtcChart from "../../components/btcchart/BtcChart";
import AbtComp from "../../components/abtComp/AbtComp";

const About = () => {
  return (
    <>
      <div>
        <div className="accType" data-aos="flip-down">
          <Navbar />
          <div
            className="ourplans text-center py-20 text-4xl font-semibold text-white"
            data-aos="fade-right"
          >
            ABOUT US
          </div>
          <AbtComp />
          <div className=" bg-[#]">
            <BtcChart />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
