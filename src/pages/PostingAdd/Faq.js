import React, { useState } from 'react';
import './Faq.css';

const PropertyListing = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="property-listing">
      <h2 onClick={toggleExpansion} className="faq-subquestion">
        What categories of properties can be listed for sale or rent?
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}></span>
      </h2>
      {isExpanded && (
        <p className="faq-subanswer">
          Owners, agents, and builders have the flexibility to list a diverse range of residential and commercial properties for rent, lease, or sale. Whether it's flats, houses, plots, office spaces, shops, showrooms, warehouses, commercial land, or agricultural land, millions of individuals actively search for various property types.
          When it comes to swiftly selling or renting out your property, Speedy Properties stands out as the premier property portal!
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-item">
              <div className="faq-question" onClick={toggleAnswer}>
                  <h3>What's the process for advertising a property on Speedy Properties?</h3>
                  <span className={`arrow $ {isOpen ? 'open' : ''}`}>&#9662;</span>
          </div>
          {isOpen && (
              <div className="faq-answer">
                  <p>If you're looking to post an ad for buy/sell/rent your property on Speedy Properties, simply head to their website, and follow these straightforward steps:</p>
                  <ol>
                      <li>Kick off the process by entering your mobile number for quick Sign-In/Up, then click on Start.</li>
                      <li>Next up, pick your profile type - whether you're a Broker, Owner, Builder, or Flatmate.</li>
                      <li>Dive into the details: Specify your property type, exact location, price, upload photos, and provide comprehensive information about the property features.</li>
                      <li>Boost your listing's appeal: The more information you provide, the better your chances of getting a quick response to sell or rent your property.</li>
                      <li>Seal the deal: After loading up on details, take advantage of the "Post an Property Ad for FREE" feature.</li>
                  </ol>
                  <p>Remember, the more accurate and detailed your listing, the faster you're likely to connect with potential buyers or renters.</p>
              </div>
          )}
      </div><PropertyListing />
    </section>
  );
};

export default Faq;