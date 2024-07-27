import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home/Home";
import AccountType from "./pages/accountType/AccountType";
import Terms from "./pages/terms/Terms";
import Faq from "./pages/faq/Faq";
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactUs";
import Dashboard from "./pages/dashboard/Dashboard";
import Deposit from "./pages/deposit/Deposit";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/accountType' element={<AccountType />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
