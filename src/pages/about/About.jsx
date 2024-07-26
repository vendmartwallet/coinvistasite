import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <div>
        <div className="accType">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
          ABOUT US
          </div>
          <div className="h-[70vh]"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
