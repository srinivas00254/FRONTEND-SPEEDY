import React from 'react';
import './UserDashboard.css';

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className='account-info'>
      <div className="header">
        <h1>My Account Settings</h1>
      </div>
      
      <div className="section">
        <h2>Public Info <span>(Will be shown in public profile and all community posts)</span></h2>
        <div className="item">
          <label>Name</label>
          <span>Gangavarapu Srinivasulu Reddy</span>
        </div>
        <div className="item">
          <label>Short Bio</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>About me</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>My Website</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>Profile Photo</label>
          <div className="profile-photo">
            <p>
              <p></p>
            </p>
            <a href="#">Update</a>
          </div>
          
        </div>
      </div>
      
      <div className="section">
        <h2>Private Info <span>(You can login with either your email(s) or mobile number)</span></h2>
        <div className="item">
          <label>Email</label>
          <span>srinivas00524@gmail.com (Primary) <a href="#">Verify now</a></span>
        </div>
        <div className="item">
          <label>Mobile</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>Gender</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>Date of Birth</label>
          <a href="#">Update</a>
        </div>
      </div>
      
      <div className="section">
        <h2>Location</h2>
        <div className="item">
          <label>City</label>
          <a href="#">Update</a>
        </div>
        <div className="item">
          <label>Locality</label>
          <a href="#">Update</a>
        </div>
      </div>
      
      <div className="section">
        <h2>Sync Accounts</h2>
        <div className="item">
          <label>Primary Account</label>
          <span>srinivas00524@gmail.com (Speedy)</span>
        </div>
        <div className="item">
          <label>Synched Account</label>
          <span>Speedy</span>
        </div>
        <div className="item">
          <label>Publish to</label>
          <span>Speedy</span>
        </div>
      </div>
      
      <div className="section">
        <h2>Change Password</h2>
        <div className="item">
          <a href="#">Update</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AccountSettings;