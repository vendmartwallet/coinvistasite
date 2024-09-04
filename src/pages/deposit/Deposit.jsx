import React, {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import SideBar from '../../components/sidebar/SideBar';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import Footer from '../../components/footer/Footer';
import Usdt from '../../assets/homehero/mobile/Usdtmob.png'
import Usd from '../../assets/homehero/mobile/Btccmob.png'
import Eth from '../../assets/homehero/mobile/Ethmob.png'
import DepositModal from '../../components/depositmodal/DepositModal';

const Deposit = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false)
    }

  return (
    <>
      <div>
        <Navbar />
        <div className="flex gap-[60px] bg-[#3D5185] ">
          <div className="hidden sm:block">
            <SideBar />
          </div>

          <div className="pb-[30px]">
            <div className="flex justify-center sm:justify-start">
              <h1 className="text-white text-center bg-yellow-400 py-[10px] px-[10px] rounded-bl-xl rounded-br-xl font-[Montserrat] w-[50%]">
                Fund your account
              </h1>
            </div>

            <div className="pt-[80px] sm:pt-[80px]">
              <div className="pl-[40px] sm:pl-0">
                <h1 className="text-white text-[40px] font-[Monserrat]">
                  Fund your account
                </h1>
              </div>

              <div className="pl-[40px] sm:pl-0">
                <label className="block text-white text-[25px] font-[Montserrat] pt-[50px] sm:pt-[50px]">
                  Enter Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="input"
                />
              </div>
            </div>

            <div className="pt-[80px] sm:pt-[80px]">
              <h1 className="text-white text-[30px] pb-[10px] text-center sm:text-left pl-[40px] sm:pl-0">
                Choose Payment method
              </h1>

              <div className="flex flex-col justify-center sm:justify-start bg-[#3D5185] shadow-2xl rounded">
                <p className="flex justify-between px-[30px] items-center text-[20px] text-white  text-left  py-[15px] w-[40%]">
                  <img src={Usdt} alt="" className='w-[50px] h-[50px]'/> USDT
                </p>
                <p className="flex justify-between px-[30px] items-center text-[20px] text-white  text-left  py-[15px] w-[40%]">
                <img src={Usd} alt="" className='w-[50px] h-[50px]'/> USD
                </p>
                <p className="flex justify-between px-[30px] items-center text-[20px] text-white text-left py-[15px] w-[40%]">
                <img src={Eth} alt="" className='w-[50px] h-[50px]'/> ETH
                </p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start">
              <button className="mt-[30px] bg-green-600 py-[10px] px-[15px] rounded-xl text-white font-[Montserrat] font-[500] hover:bg-green-500"
              onClick={handleOpenModal}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
       {showModal && (
        <div>
          <DepositModal handleCloseModal={handleCloseModal}/>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Deposit;
