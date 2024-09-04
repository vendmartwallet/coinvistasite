import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TradingServices from "../../components/tradeservice/TradingServices";
import SideBar from "../../components/sidebar/SideBar";

const Transactions = () => {
  const TransactionHistory = () => {
    const [activeTab, setActiveTab] = useState("deposits");

    return (
      <div className=" bg-gray-900 p-8">
        <h2 className="text-3xl text-[#F6A415] mb-8">
          Transactions on your account
        </h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-600">
            <button
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === "deposits"
                  ? "text-gray-900 bg-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("deposits")}
            >
              Deposits
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === "withdrawals"
                  ? "text-gray-900 bg-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("withdrawals")}
            >
              Withdrawals
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === "others"
                  ? "text-gray-900 bg-white"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("others")}
            >
              Others
            </button>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-400">
                Show{" "}
                <select className="bg-gray-900 text-white border border-gray-600 rounded p-1">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>{" "}
                entries
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-900 text-white border border-gray-600 rounded p-2"
                />
              </div>
            </div>

            <table className="min-w-full text-white text-left">
              <thead>
                <tr>
                  <th className="p-3 border-b border-gray-600">Amount</th>
                  <th className="p-3 border-b border-gray-600">Payment mode</th>
                  <th className="p-3 border-b border-gray-600">Status</th>
                  <th className="p-3 border-b border-gray-600">Date created</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-400">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-gray-400">
              <div>Showing 0 to 0 of 0 entries</div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 px-3 py-1 rounded">
                  Previous
                </button>
                <button className="bg-gray-700 px-3 py-1 rounded">Next</button>
              </div>
            </div>
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
            TRANSACTION HISTORY
          </div>
          <div className="flex gap-[60px] bg-[#3D5185] pb-[30px]">
            <div className="hidden sm:block">
              <SideBar />
            </div>

            <div className="flex flex-col gap-[30px] bg-[#081332] lg:mr-8 w-full mt-8 lg:px-12 py-8 rounded-2xl shadow-md">
              <TransactionHistory />
            </div>
          </div>
          <TradingServices />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Transactions;
