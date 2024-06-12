import React, { useState } from 'react';
import './AdPostingData.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    userType: null,
    adType: null,
    saleType: null,
    propertyType: null,
    userName: '',
    userEmail: ''
  });

  const [currentSection, setCurrentSection] = useState('typeOptions');

  const handleOptionSelect = (section, option) => {
    setFormData({ ...formData, [section]: option });
    showNextSection(section);
  };
  const hand=() => {
    window.location.href='./Property';

  };

  const showNextSection = (section) => {
    switch (section) {
      case 'userType':
        setCurrentSection('postOptions');
        break;
      case 'adType':
        setCurrentSection('saleType');
        break;
      case 'saleType':
        setCurrentSection('propertyType');
        break;
      case 'propertyType':
        setCurrentSection('userInfo');
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch('/api/saveForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => alert('Form submitted successfully!'))
      .catch(error => console.error('Error:', error));
  };

  const renderOptions = (section, options) => (
    <div className="options">
      {options.map(option => (
        <button
          key={option}
          className={`option ${formData[section] === option ? 'selected' : ''}`}
          onClick={() => handleOptionSelect(section, option)}
          // onClick={'f1()'}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1>Let's get you started</h1>
        <form id="propertyForm">
          {currentSection === 'typeOptions' && (
            <div className="form-group">
              <label>You're a *</label>
              {renderOptions('userType', ['Owner', 'Broker', 'Builder', 'Flatmates', 'Plot Promoter', 'Promoter'])}
            </div>
          )}
          {currentSection === 'postOptions' && (
            <div className="form-group">
              <label>You're posting Ad for *</label>
              {renderOptions('adType', ['Sell', 'Rent', 'Roommates'])}
            </div>
          )}
          {currentSection === 'saleType' && (
            <div className="form-group">
              <label>Sale Type *</label>
              {renderOptions('saleType', ['New', 'Resale'])}
            </div>
          )}
          {currentSection === 'propertyType' && (
            <div className="form-group">
              <label>And It's a... *</label>
              {renderOptions('propertyType', ['Residential', 'Commercial', 'Plots & Land'])}
            </div>
          )}
          {currentSection === 'userInfo' && (
            <div className="form-group">
              <label>Your Information *</label>
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                value={formData.userName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Email - Optional"
                value={formData.userEmail}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="form-actions">
            <button type="button" className="back-button" onClick={() => setCurrentSection('typeOptions')}>Back</button>
            <button type="button" className="next-button" onClick={hand}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;