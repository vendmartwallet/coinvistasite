import React, { useState } from 'react';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import { FaRegUser } from 'react-icons/fa';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import Footer from '../../components/footer/Footer';
import NextView from '../../components/nextview/NextView';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-[60px] bg-[#3D5185]">
        <div className="hidden sm:block">
          <SideBar />
        </div>

        <div className="w-[80%] sm:w-[65%] pt-[80px] sm:pt-[50px]">
          {/* <div className="block sm:hidden bg-[#071332] mb-[10px] ml-[40px] w-[100%] py-[10px]">
            <div className="flex items-center justify-between px-[15px]">
              <BsFillMenuButtonWideFill
                size={30}
                color="gold"
                className="my-[10px] ml-[]"
                onClick={handleOpenModal}
              />
            </div>
          </div> */}
          <div className="bg-[#071332] flex justify-between items-center text-white py-[20px] px-[3vw] rounded ml-[40px] sm:ml-0 w-[100%]">
            <p className="text-[30px] text-gray-400">
              Total Balance <span className="block text-[20px]">0.00USD</span>
            </p>
            <HiMiniCurrencyDollar size={40} color="gold" />
          </div>
          <div className="flex flex-col sm:flex-row gap-[50px] pt-[40px]">
            <div className="bg-[#071332] w-[100%] sm:w-[50%] flex items-center justify-between rounded ml-[40px] sm:ml-0">
              <p className="bg-[#071332] text-gray-400 py-[20px] px-[3vw] rounded text-[30px]">
                Deposit <span className="block text-[20px]">0.00USD</span>
              </p>
              <HiMiniCurrencyDollar
                size={40}
                color="gold"
                className="mr-[30px]"
              />
            </div>

            <div className="bg-[#071332] w-[100%] sm:w-[50%] flex items-center justify-between rounded ml-[40px] sm:ml-0">
              <p className="bg-[#071332] text-gray-400 py-[20px] px-[3vw] rounded text-[30px]">
                Profit <span className="block text-[20px]">0.00USD</span>
              </p>
              <HiMiniCurrencyDollar
                size={40}
                color="gold"
                className="mr-[30px]"
              />
            </div>
          </div>

          <div className="bg-[#071332] w-[100%] mt-[40px] h-[40%] rounded mb-[30px] ml-[40px] sm:ml-0">
            <NextView/>
          </div>
        </div>
      </div>

      {/* {showModal && (
        <div>
          <Modal handleCloseModal={handleCloseModal} />
        </div>
      )} */}
      <Footer/>
    </>
  );
};

export default Dashboard;
