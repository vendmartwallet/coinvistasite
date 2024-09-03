import React from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.png";

const TradingServices = () => {
  const Services = (props) => {
    return (
      <>
        <div className="text-center flex flex-col items-center gap-7">
          <div className="img">
            <img src={props.img} alt="" />
          </div>
          <div className="title text-2xl lg:text-3xl font-semibold">
            {props.title}
          </div>
          <div className=" lg:px-12 text-[#3D4C58] items-center font-light">
            {props.text}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="tradeservices">
          <div className="line h-2 bg-[#394151] rounded-md"></div>
          <div className="main py-24 text-center px-8 lg:px-24">
            <div className="title text-4xl pb-10" data-aos="fade-up">
              OUR TRADING SERVICES
            </div>

            <div
              className="para text-lg lg:w-[680px] mx-auto text-[#3D4C58] items-center font-light"
              data-aos="fade-down"
            >
              We are Professional Traders & Portfolio Managers who return profit
              to investors, guaranteed and Regulated by the Securities and
              Exchange Commission. We offer optimum trading service that is
              capable of delivering profit of up to 18% of invested funds every
              week. We Trade on a Wide Range of Assets, Cryptos, Fx Options &
              Commodities.
            </div>
          </div>
        </div>

        <div className="services grid grid-cols-1 lg:grid-cols-3 pb-14 mx-24">
          <div data-aos="fade-left">
          <Services
            img={Img1}
            title="Trusted Company"
            text="Trusted by thousands of people all over the world. Good reviews on all social channels."
          />
          </div>
          <div data-aos="fade-right">
          <Services
            img={Img2}
            title="Secured"
            text="TSecured blockchain transactions , Secured investors data and personal information. Top level ssl certification."
          />
          </div>
          <div data-aos="fade-left">
          <Services
            img={Img3}
            title="Privacy"
            text="All private information remains private. 10XSIGNAL never shares Private information to any third party."
          /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingServices;
