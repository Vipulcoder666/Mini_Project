import React from 'react'
import Login from './components/login'
import SignupPage from './components/Signup'
import {Routes,Route} from"react-router-dom";
import LandingPage from './components/LandingPage';
import DonatePage from './components/DonateNow';
import PaymentGateway from './components/Payment';
import ThankYouPage from './components/ThankYou';
import WhatWeDo from './components/WhatWeDo';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Login/>}></Route>
        <Route path="/SignupPage" element = {<SignupPage/>}></Route>
        <Route path="/DonatePage" element = {<DonatePage/>}></Route>
        <Route path="/LandingPage" element = {<LandingPage/>}></Route>
        <Route path="/Payment" element = {<PaymentGateway/>}></Route>
        <Route path="/Thanks" element = {<ThankYouPage/>}></Route>
        <Route path="/WhatWeDo" element = {<WhatWeDo/>}></Route>
        <Route path="/AboutUs" element = {<AboutUs/>}></Route>
        <Route path="/ContactUs" element = {<ContactUs/>}></Route>
      </Routes>
      
    </>
  )
}

export default App