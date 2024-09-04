import React, { useState } from 'react';
import { MdAttachEmail } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import { IoPersonAdd } from 'react-icons/io5';
import Logo from '../../assets/coinwealth.jpg';
import TradingViewPrices from '../tradingViewPrices/TradingViewPrices';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { HiOutlineLogout } from 'react-icons/hi';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!showModal);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const { userLoggedIn } = useAuth();
  return (
    <>
      <div>
        <div className="emailAuth bg-[#166E4C] flex h-12 text-white items-center justify-around">
          <div className="email flex hover:cursor-pointer gap-1 items-center">
            <span>
              <MdAttachEmail size="25" color="black" />
            </span>{' '}
            info@10xsignal.com
          </div>

          <div className="auths flex gap-5 font-semibold items-center">
            {userLoggedIn ? (
              <>
              </>
            ) : (
              <>
                <div className="login text-sm hover:cursor-pointer flex gap-1 items-center">
                  <span>
                    <PiSignInBold size="20" />
                  </span>{' '}
                  <Link to="/login">SIGN IN</Link>
                </div>
                <div className="signup text-sm hover:cursor-pointer flex gap-1 items-center">
                  <span>
                    <IoPersonAdd size="20" />
                  </span>{' '}
                  <Link to="/register">SIGN UP</Link>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="logonavs flex justify-between items-center pr-5 lg:px-36 text-white font-light bg-[#062B1F] lg:py-[3.3rem]">
          <div className="logo">
            <img src={Logo} alt="" width="100px" />
          </div>
          <div className="navs hidden lg:block">
            <ul className="flex items-center gap-12">
              <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/">HOME</Link>
              </li>
              <li className=" text-base hover:text-[#a08411] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/accountType">ACCOUNT TYPE</Link>
              </li>
              <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/faq">FAQs</Link>
              </li>
              <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/terms">TERMS</Link>
              </li>
              <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/contactUs">CONTACT US</Link>
              </li>
              <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                <Link to="/about">ABOUT US</Link>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden" onClick={toggleNav}>
            <IoMenuOutline size="35" />
          </div>
        </div>
        <div className="coinprices" data-aos="fade-up">
          <TradingViewPrices />
        </div>

        {isNavOpen && (
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            className={`fixed sidebar bg-[#062B1F] px-3 lg:hidden overflow-scroll z-[99999] inset-y-0 left-0 w-64 transition-transform border-none duration-300 ease-in-out transform ${
              isNavOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            data-aos="fade-right"
          >
            <div className=" flex justify-between items-center pt-5">
              <div className="text-[#EFD777] font-bold">CoinVistaWealth</div>
              <div>
                <button
                  onClick={closeNav}
                  className=" focus:outline-none rounded"
                >
                  <IoClose size="30" color="white" />
                </button>
              </div>
            </div>

            <div className="navs pt-10">
              <ul className="text-white items-center gap-12">
                <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/">HOME</Link>
                </li>
                <li className=" text-base hover:text-[#a08411] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/accountType">ACCOUNT TYPE</Link>
                </li>
                <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/terms">TERMS</Link>
                </li>
                <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/contactUs">CONTACT US</Link>
                </li>
                <li className=" text-base hover:text-[#EFD777] hover:border-b-4 border-[#E9D16F] pb-4 hover:cursor-pointer">
                  <Link to="/about">ABOUT US</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
