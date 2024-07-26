import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { MdOutlineAdd } from "react-icons/md";

const Faq = () => {
  const Faq = (props) => {
    return (
      <>
        <div className=" bg-[#1B334D] rounded-md py-3 px-5 flex justify-between items-center">
          <div className=" text-base text-[#EFD778]">{props.text}</div>
          <div>
            <MdOutlineAdd color="#EFD778" size="30" />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="faq">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="min-h-[100vh] px-5 py-20">
            <div className="lg:w-[70%] mx-auto flex flex-col gap-1">
              <Faq text="Is 10XSIGNAL legit?" />
              <Faq text="Who may be a client of 10XSIGNAL?" />
              <Faq text="How may I become a client of 10XSIGNAL?" />
              <Faq text="Is it free of charge to open an account?" />
              <Faq text="I have trouble during registering. What shall I do?" />
              <Faq text="How long does it take to make my client account active?" />
              <Faq text="How may I access my account?" />
              <Faq text="How can I control my account?" />
              <Faq text="May I change my login data?" />
              <Faq text="How secure user accounts and personal data?" />
              <Faq text="What if I can't log into my account because I forgot my password?" />
              <Faq text="How many accounts can I open on the site?" />
              <Faq text="How may I make a deposit?" />
              <Faq text="When the deposit should be activated?" />
              <Faq text="Does the profit include my initial deposit?" />
              <Faq text="May I have several deposits at the same time?" />
              <Faq text="Which electronic currencies do you accept at the moment?" />
              <Faq text="How soon after the withdrawal of the request will appear money on my payment account?" />
              <Faq text="I requested for a withdrawal some time ago, but money haven't come yet." />
              <Faq text="Do you have any withdrawal limits?" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Faq;
