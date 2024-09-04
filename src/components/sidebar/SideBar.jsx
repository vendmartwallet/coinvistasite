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
      <div className="w-80 px-2 text-black  overflow-0 bg-[#071332] py-[30px]">
        <Link to = "/userProfile">
        <div className="links">
          <FaRegUser size={40}/>
          <div>
            <p>Hi, UserName</p>
            <p>UserEmail@gmail.com</p>
          </div>
        </div>
        </Link>

        <nav className="py-[40px] flex flex-col gap-[15px] bg-[#3D5185] rounded">
          <Link to="/dashboard" className="links">
            <MdDashboard />
            Dashboard
          </Link>
          <Link to="/deposit" className="links">
            <RiLuggageDepositFill />
            Deposit
          </Link>
          <Link to="/withdrawal" className="links">
            <BiMoneyWithdraw />
            Withdrawal
          </Link>
          <Link to="/transactions" className="links">
            <AiOutlineTransaction />
            Transaction history
          </Link>
          <Link to="/customer" className="links">
            <FcCustomerSupport />
            Customer support
          </Link>
          <Link to="/logout" className="links">
            <HiOutlineLogout />
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
