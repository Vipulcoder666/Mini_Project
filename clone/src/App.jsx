import React from 'react'
import Login from './components/login'
import SignupPage from './components/Signup'
import {Routes,Route} from"react-router-dom";
import LandingPage from './components/LandingPage';
import DonatePage from './components/DonateNow';
import PaymentGateway from './components/Payment';
import ThankYouPage from './components/ThankYou';

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
      </Routes>
      
    </>
  )
}

export default App