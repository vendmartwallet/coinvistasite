import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Ratings from "../../components/ratings/Ratings";
import Plans from "../../components/plans/Plans";
import NextView from "../../components/nextview/NextView";
import DashLoad from "../../components/dashLoad/DashLoad";
import TradingServices from "../../components/tradeservice/TradingServices";
import Footer from "../../components/footer/Footer";
import Dashboard from "../../components/dashtrasaction/Dashboard";
import AbtComp from "../../components/abtComp/AbtComp";
import BtcChart from "../../components/btcchart/BtcChart";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <Hero />
        <Ratings />
        <Plans />
        <NextView />
        <DashLoad />
        <TradingServices />
        <AbtComp />
        <BtcChart />
        <Dashboard />
        <Footer />
      </div>
    </>
  );
};

export default Home;
