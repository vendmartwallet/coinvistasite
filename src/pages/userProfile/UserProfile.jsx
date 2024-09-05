import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TradingServices from "../../components/tradeservice/TradingServices";
import SideBar from "../../components/sidebar/SideBar";
import { useAuth } from "../../components/context/authContext";

const UserProfile = () => {
  const UserProfileMain = () => {

    const { currentUser } = useAuth();

    function getUserNameFromEmail(email) {
      const userName = email.match(/^[a-zA-Z]+/);
      return userName ? userName[0] : '';
    }
    
    let UpperName = ''; 
    
    if (currentUser && currentUser.email) {
      const email = currentUser.email; 
      const userName = getUserNameFromEmail(email);
      UpperName = userName.charAt(0).toUpperCase() + userName.slice(1); 
    }

    return (
      <div className="">
        <div className=" rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">{UpperName}</h2>
            <p className="text-gray-400">{currentUser?.email}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-red-600 bg-red-200 rounded-full">
              Not verified
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-4">
              Change Username
            </h3>
            <input
              type="text"
              className="-2xlw-full p-3 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              // value={UpperName}
              placeholder={UpperName}
            />
            <button className="mt-4 w-full bg-[#1FAEEE] hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition duration-200">
              Save name
            </button>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Change password
            </h3>
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Current password"
            />
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New password"
            />
            <input
              type="password"
              className="w-full p-3 mb-4 rounded-2xl bg-[#18191D] border border-[#353945] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm password"
            />
            <button className="w-full bg-[#1FAEEE] hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition duration-200">
              Save password
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="contact" data-aos="flip-right">
          <Navbar />
          <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            USER PROFILE
          </div>
          <div className="flex gap-[60px] bg-[#3D5185] pb-[30px]">
            <div className="hidden sm:block">
              <SideBar />
            </div>

            <div className="flex flex-col gap-[30px] bg-[#081332] mt-8 lg:px-12 py-8 rounded-2xl shadow-md">
              <UserProfileMain />
            </div>
          </div>
          <TradingServices />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
