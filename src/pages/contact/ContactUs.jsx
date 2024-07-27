import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import TradingServices from '../../components/tradeservice/TradingServices'

const ContactUs = () => {
  return (
    <>
    <div>
      <div className="contact">
        <Navbar />
        <div className="ourplans text-center py-20 text-4xl font-semibold text-white">
            CONTACT US
          </div>
        <div className='h-[70vh]'></div>
        <TradingServices/>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default ContactUs