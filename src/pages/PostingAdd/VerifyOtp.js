import React, { useState } from 'react';
import axios from 'axios';
import './VerifyOtp.css';

const VerifyOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/send-otp', { phoneNumber });
      setGeneratedOtp(response.data.otp);
      alert('OTP sent successfully!');
    } catch (error) {
      alert('Error sending OTP');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      setIsVerified(true);
      alert('OTP verified successfully!');
      window.location='./AdPostingData'
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="verification-container">
      {!isVerified ? (
        <div className='a'>
          <h1>Verify Mobile Number</h1>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSendOtp} className='b1'>Send OTP</button>
          <div className="otp-inputs">
            <input
              type="text"
              maxLength="1"
              value={otp[0] || ''}
              onChange={(e) => setOtp(otp.substring(0, 0) + e.target.value + otp.substring(1))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[1] || ''}
              onChange={(e) => setOtp(otp.substring(0, 1) + e.target.value + otp.substring(2))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[2] || ''}
              onChange={(e) => setOtp(otp.substring(0, 2) + e.target.value + otp.substring(3))}
            />
            <input
              type="text"
              maxLength="1"
              value={otp[3] || ''}
              onChange={(e) => setOtp(otp.substring(0, 3) + e.target.value)}
            />
          </div>
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      ) : (
        <h1>Mobile number verified successfully!</h1>
      )}
    </div>
  );
};

export default VerifyOtp;