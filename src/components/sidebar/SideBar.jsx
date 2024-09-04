import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FcCustomerSupport } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';
import { useAuth } from '../context/authContext';
import { toSignOut } from '../firebase/Auth';

const SideBar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <>
      <div className="w-80 px-2 text-black  overflow-0 bg-[#071332] py-[30px]">
        <Link to = "/userProfile">
        <div className="links">
          <FaRegUser size={40} />
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
          {userLoggedIn ? (
            <>
              <button onClick={() => {
                toSignOut().then(() => {
                  navigate('/')
                })
              }} className="links">
                <HiOutlineLogout />
                Logout
              </button>
              {/* <div style={{ position: 'relative' }}>
                <button onClick={toggleDropdown}>
                  <FaRegUser size={25} />
                </button>
                {isProfileOpen && <UserDropdown />}
              </div> */}
            </>
          ) : (
            <>
              {/* <Link
                to="/signup"
                className="hover:cursor-pointer bg-[#1FAEEE] rounded-2xl text-white hover:bg-blue-800 px-5 py-2 hover:border-2 hover:border-[#41444bbb] whitespace-nowrap"
              >
                Sign up
              </Link>
              <Link
                to="/signin"
                className="hover:cursor-pointer border-2 border-[#787E90] rounded-2xl text-white hover:bg-white hover:text-black hover:border-none px-5 py-2"
              >
                Login
              </Link> */}
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default SideBar;
