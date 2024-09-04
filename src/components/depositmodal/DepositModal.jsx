import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FcCustomerSupport } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import Usdt from '../../assets/homehero/mobile/Usdtmob.png';

const DepositModal = ({ handleCloseModal }) => {
  const selectedTokenName = 'Selected Token Name';
  const selectedToken = 'Selected Token Address';
  const selectedTokenLogo = { Usdt };

  return (
    <>
      <div className="modal-overlay">
        <FaTimes
          size={24}
          color="gold"
          className="close-icon"
          onClick={handleCloseModal}
        />
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[80%] bg-[#071332] text-black px-2 overflow-0 pt-[30px] rounded-lg">
          <div className="flex items-center justify-between px-4 py-2"></div>
          <div className="text-white px-4">
            <h1>Make your Payment</h1>
          </div>
          <div className="py-[40px] flex flex-col gap-[15px] bg-[#3D5185] rounded mt-4 px-4">
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-white ">
                You are to make payment of ${} using your selected payment
                method.{' '}
                <span className="block">
                  Screenshot and upload the proof of payment
                </span>
              </h1>

              <p className="text-white">
                Copy address:{' '}
                <span>{selectedToken} 0xlkjhgfdsdfgghjhkjjmhgfdggh657</span>
              </p>
              <p className="flex items-center text-white text-[20px]">
                {' '}
                <img src={Usdt} alt="" /> {selectedTokenName}{' '}
              </p>
            </div>

            <div>
              <ul className="text-white">
                <li className="list-disc">HOW TO BUY CRYPTO</li>
                <ul>
                  <li className="list-decimal">
                    Copy the address of the desired crypto payment method
                  </li>
                  <li className="list-decimal">
                    Visit www.moonpay.com;
                  </li>
                  <li className="list-decimal">
                    Click on buy Crypto
                  </li>
                  <li className="list-decimal">
                    Select the type of Crypto
                  </li>
                  <li className="list-decimal">
                    Enter and Continue
                  </li>
                  <li className="list-decimal">
                    Paste the copied Crypto address and Continue
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositModal;
