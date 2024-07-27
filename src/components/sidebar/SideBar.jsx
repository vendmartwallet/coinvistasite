import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FcCustomerSupport } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';

const SideBar = () => {
  return (
    <>
      <div className="w-80 px-2 text-black  overflow-0 bg-[#071332] pt-[30px]">
        <div className="links">
          <FaRegUser size={40}/>
          <div>
            <p>Hi, UserName</p>
            <p>UserEmail@gmail.com</p>
          </div>
        </div>

        <nav className="py-[40px] flex flex-col gap-[15px] bg-[#3D5185] rounded">
          <Link to="/overview" className="links">
            <MdDashboard />
            Dashboard
          </Link>
          <Link to="/profile" className="links">
            <RiLuggageDepositFill />
            Deposit
          </Link>
          <Link to="/facilitator" className="links">
            <BiMoneyWithdraw />
            Withdrawal
          </Link>
          <Link to="/courses" className="links">
            <AiOutlineTransaction />
            Transaction history
          </Link>
          <Link to="/resources" className="links">
            <FcCustomerSupport />
            Customer support
          </Link>
          <Link to="/chat" className="links">
            <HiOutlineLogout />
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
