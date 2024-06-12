import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landingpage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import AdPosting from './pages/PostingAdd/AdPosting';
import VerifyOtp from './pages/PostingAdd/VerifyOtp';
import AdpostingData from './pages/PostingAdd/AdPostingData';
import Property from './pages/PostingAdd/Property';
import UserDashBoard from './components/User/UserDashboard';
const routes = () => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path='/AdPosting' element={<AdPosting/>} />
        <Route path='/VerifyOtp' element={<VerifyOtp/>}/>
        <Route path='/AdPostingData' element={<AdpostingData/>}/>
        <Route path='/Property' element={<Property/>}/>
        <Route path="/UserDashboard" element={<UserDashBoard />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default routes
