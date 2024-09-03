import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ContactUsComp from "../../components/contactComp/ContactUsComp";

const ContactUs = () => {
  return (
    <>
      <div>
        <div className="contact" data-aos="flip-left">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            CONTACT US
          </div>
          <div className="flex gap-[60px] bg-[#3D5185] pb-[30px]"></div>
          <ContactUsComp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
