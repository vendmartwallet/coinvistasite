import { React, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import AccountType from './pages/accountType/AccountType';
import Terms from './pages/terms/Terms';
import Faq from './pages/faq/Faq';
import About from './pages/about/About';
import ContactUs from './pages/contact/ContactUs';
import Dashboard from './pages/dashboard/Dashboard';
import Deposit from './pages/deposit/Deposit';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import CustomerSupport from './components/customerSupport/CustomerSupport';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserProfile from './pages/userProfile/UserProfile';
import Withdrawal from './pages/withdrawal/Withdrawal';
import Transactions from './pages/transactions/Transactions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './components/context/authContext';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration and other settings as needed
  }, []);
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/accountType" element={<AccountType />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/customer" element={<CustomerSupport />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
