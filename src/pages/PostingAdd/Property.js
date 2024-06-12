import './Property.css';
import React, { useState } from 'react';

const Property = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [propertyType, setPropertyType] = useState('Apartments/Flats');
  const [propertySubType, setPropertySubType] = useState('Residential Apartment');
  const [city, setCity] = useState('Bangalore');
  const [location, setLocation] = useState('Dr. Ambedkar Veedhi, Bangalore');

  const [formData, setFormData] = useState({
    bhkType: '1 BHK',
    bathrooms: 1,
    balconies: 1,
    rooms: [],
    builtUpArea: 250,
    furnishingStatus: 'Fully Furnished',
    additionalFurnishing: [],
    carParking: 'Yes',
    twoWheelerParking: 'Yes',
    twoWheelerParkingCount: 1,
    totalTowers: 1,
    totalFloors: 1,
    propertyTowerNo: 1,
    propertyFloorNo: 1,
    ageOfConstruction: '1-3 Years',
    availabilityStatus: '1 Month'
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked ? 'Yes' : 'No'
    });
  };

  const handleRoomsChange = (room) => {
    setFormData((prevState) => ({
      ...prevState,
      rooms: prevState.rooms.includes(room)
        ? prevState.rooms.filter((r) => r !== room)
        : [...prevState.rooms, room]
    }));
  };

  const handleAdditionalFurnishingChange = (item) => {
    setFormData((prevState) => ({
      ...prevState,
      additionalFurnishing: prevState.additionalFurnishing.includes(item)
        ? prevState.additionalFurnishing.filter((i) => i !== item)
        : [...prevState.additionalFurnishing, item]
    }));
  };

  const [amenities, setAmenities] = useState([]);
  const [boundaryWallConstructed, setBoundaryWallConstructed] = useState(null);
  const [gatedCommunity, setGatedCommunity] = useState(null);
  const [petFriendly, setPetFriendly] = useState(null);
  const [privateTerrace, setPrivateTerrace] = useState(null);
  const [propertyFacing, setPropertyFacing] = useState(null);
  const [propertyView, setPropertyView] = useState([]);
  const [flooringType, setFlooringType] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [bankApprovals, setBankApprovals] = useState([]);
  const [locationAdvantages, setLocationAdvantages] = useState([]);
  const [contactHours, setContactHours] = useState(null);
  
  const [priceType, setPriceType] = useState('Overall price');
  const [ownershipType, setOwnershipType] = useState('Freehold');
  const [uploadViaWhatsApp, setUploadViaWhatsApp] = useState(false);

  return (
    <div className="post-property-container">
      <div className="post-property">
        <h2>Post Property</h2>
        <div className="steps">
          <div className={`tab ${currentStep === 1 ? 'active' : ''}`}>1 Property & Location Details</div>
          <div className={`tab ${currentStep === 2 ? 'active' : ''}`}>2 Property Profile</div>
          <div className={`tab ${currentStep === 3 ? 'active' : ''}`}>3 Pricing & Photos Details</div>
          <div className={`tab ${currentStep === 4 ? 'active' : ''}`}>4 Amenities & Features</div>
        </div>

        {currentStep === 1 && (
          <>
            <h3>Property & Location Details</h3>
            <div className="form-group">
              <label>Property Type *</label>
              <div className="options">
                {['Apartments/Flats', 'Independent Houses/Villas', 'Row House'].map((type) => (
                  <button
                    key={type}
                    className={propertyType === type ? 'selected' : ''}
                    onClick={() => setPropertyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Property Sub Type *</label>
              <div className="options">
                {['Residential Apartment', 'Duplex Apartment', 'High Rise Apartment', 'Studio Apartment', 'Penthouse Apartment', 'Condos', 'Builder Floor'].map((subType) => (
                  <button
                    key={subType}
                    className={propertySubType === subType ? 'selected' : ''}
                    onClick={() => setPropertySubType(subType)}
                  >
                    {subType}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Property City & Location *</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <div className="map">
                <iframe
                  src={`https://www.google.com/maps?q=${location}&output=embed`}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h3>Property Profile</h3>
            <form>
              <div className="form-group">
                <label>BHK Type *</label>
                <div className="options">
                  {['1 BHK', '2 BHK', '3 BHK', '4+ BHK', '1 RK', '2 RK', '1 HALL'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, bhkType: type })}
                      className={formData.bhkType === type ? 'selected' : ''}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>No of Bathrooms *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, bathrooms: Math.max(1, formData.bathrooms - 1) })}>-</button>
                  <input type="number" value={formData.bathrooms} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, bathrooms: formData.bathrooms + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>No of Balconies *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, balconies: Math.max(1, formData.balconies - 1) })}>-</button>
                  <input type="number" value={formData.balconies} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, balconies: formData.balconies + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>Other Rooms</label>
                <div className="options">
                  {['Pooja Room', 'Study Room', 'Servant Room', 'Patio', 'In House Garden', 'Kids Room', 'Store Room'].map((room) => (
                    <button
                      type="button"
                      key={room}
                      onClick={() => handleRoomsChange(room)}
                      className={formData.rooms.includes(room) ? 'selected' : ''}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Add Area Details *</label>
                <div className="sub-group">
                  <label>Built Up Area *</label>
                  <div className="counter">
                    <button type="button" onClick={() => setFormData({ ...formData, builtUpArea: Math.max(0, formData.builtUpArea - 10) })}>-</button>
                    <input type="number" value={formData.builtUpArea} readOnly />
                    <button type="button" onClick={() => setFormData({ ...formData, builtUpArea: formData.builtUpArea + 10 })}>+</button>
                  </div>
                  <span>sq.ft</span>
                </div>
              </div>

              <div className="form-group">
                <label>Furnishing Status *</label>
                <div className="options">
                  {['Fully Furnished', 'Semi Furnished', 'Unfurnished'].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() => setFormData({ ...formData, furnishingStatus: status })}
                      className={formData.furnishingStatus === status ? 'selected' : ''}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Additional Furnishing</label>
                <div className="options">
                  {['Air Conditioner', 'Bed', 'Wardrobe', 'TV', 'Fridge', 'Water Purifier', 'Sofa', 'Washing Machine'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleAdditionalFurnishingChange(item)}
                      className={formData.additionalFurnishing.includes(item) ? 'selected' : ''}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Parking *</label>
                <div className="sub-group">
                  <label>Car Parking</label>
                  <input
                    type="checkbox"
                    name="carParking"
                    checked={formData.carParking === 'Yes'}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="sub-group">
                  <label>Two Wheeler Parking</label>
                  <input
                    type="checkbox"
                    name="twoWheelerParking"
                    checked={formData.twoWheelerParking === 'Yes'}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className="sub-group">
                  <label>No of Two Wheeler Parking</label>
                  <div className="counter">
                    <button type="button" onClick={() => setFormData({ ...formData, twoWheelerParkingCount: Math.max(0, formData.twoWheelerParkingCount - 1) })}>-</button>
                    <input type="number" value={formData.twoWheelerParkingCount} readOnly />
                    <button type="button" onClick={() => setFormData({ ...formData, twoWheelerParkingCount: formData.twoWheelerParkingCount + 1 })}>+</button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Total No of Towers *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, totalTowers: Math.max(0, formData.totalTowers - 1) })}>-</button>
                  <input type="number" value={formData.totalTowers} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, totalTowers: formData.totalTowers + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>Total No of Floors *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, totalFloors: Math.max(0, formData.totalFloors - 1) })}>-</button>
                  <input type="number" value={formData.totalFloors} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, totalFloors: formData.totalFloors + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>Property Tower No *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, propertyTowerNo: Math.max(0, formData.propertyTowerNo - 1) })}>-</button>
                  <input type="number" value={formData.propertyTowerNo} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, propertyTowerNo: formData.propertyTowerNo + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>Property Floor No *</label>
                <div className="counter">
                  <button type="button" onClick={() => setFormData({ ...formData, propertyFloorNo: Math.max(0, formData.propertyFloorNo - 1) })}>-</button>
                  <input type="number" value={formData.propertyFloorNo} readOnly />
                  <button type="button" onClick={() => setFormData({ ...formData, propertyFloorNo: formData.propertyFloorNo + 1 })}>+</button>
                </div>
              </div>

              <div className="form-group">
                <label>Age of Construction *</label>
                <div className="options">
                  {['New Construction', '1-3 Years', '4-7 Years', '8-10 Years', '10+ Years'].map((age) => (
                    <button
                      type="button"
                      key={age}
                      onClick={() => setFormData({ ...formData, ageOfConstruction: age })}
                      className={formData.ageOfConstruction === age ? 'selected' : ''}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Availability Status *</label>
                <div className="options">
                  {['Immediate', '1 Month', '2 Month', '3 Month'].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() => setFormData({ ...formData, availabilityStatus: status })}
                      className={formData.availabilityStatus === status ? 'selected' : ''}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </form>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h3>Pricing & Photos Details</h3>
            <form>
              <div className="form-group">
                <label>Price Type *</label>
                <div className="options">
                  {['Overall price', 'Price per sq.ft'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPriceType(type)}
                      className={priceType === type ? 'selected' : ''}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Ownership Type *</label>
                <div className="options">
                  {['Freehold', 'Leasehold', 'Cooperative Society', 'Power of Attorney'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setOwnershipType(type)}
                      className={ownershipType === type ? 'selected' : ''}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Upload Property Photos *</label>
                <div className="upload-buttons">
                  <input type="file" multiple />
                </div>
              </div>

              <div className="form-group">
                <label>Upload via WhatsApp</label>
                <input
                  type="checkbox"
                  checked={uploadViaWhatsApp}
                  onChange={() => setUploadViaWhatsApp(!uploadViaWhatsApp)}
                />
              </div>
            </form>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {currentStep === 4 && (
          <>
            <h3>Amenities & Features</h3>
            <form>
              <div className="form-group">
                <label>Amenities *</label>
                <div className="options">
                  {['Power Backup', 'Lift', 'Swimming Pool', 'Gym', 'Park', 'Reserved Parking', 'Security', 'Water Storage', 'Visitor Parking', 'Intercom Facility', 'Maintenance Staff', 'Waste Disposal', 'Rain Water Harvesting', 'Cafeteria/Food Court', 'Club House', 'Golf Course', 'Jogging and Strolling Track', 'Outdoor Tennis Courts', 'Cycling and Jogging Track', 'Water softening plant', 'Conference Room', 'Banquet Hall', 'Piped Gas'].map((amenity) => (
                    <button
                      type="button"
                      key={amenity}
                      onClick={() => setAmenities((prevAmenities) =>
                        prevAmenities.includes(amenity)
                          ? prevAmenities.filter((a) => a !== amenity)
                          : [...prevAmenities, amenity]
                      )}
                      className={amenities.includes(amenity) ? 'selected' : ''}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Boundary Wall Constructed *</label>
                <div className="options">
                  <button
                    type="button"
                    onClick={() => setBoundaryWallConstructed(true)}
                    className={boundaryWallConstructed ? 'selected' : ''}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setBoundaryWallConstructed(false)}
                    className={!boundaryWallConstructed ? 'selected' : ''}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Gated Community *</label>
                <div className="options">
                  <button
                    type="button"
                    onClick={() => setGatedCommunity(true)}
                    className={gatedCommunity ? 'selected' : ''}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setGatedCommunity(false)}
                    className={!gatedCommunity ? 'selected' : ''}
                  >
                    No
                  </button>
                </div>
              </div>
            </form>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {currentStep === 5 && (
          <>
            <h3>Review & Submit</h3>
            <div className="review-section">
              <div className="review-item">
                <strong>Property Type:</strong> {formData.propertyType}
              </div>
              <div className="review-item">
                <strong>Property Location:</strong> {formData.propertyLocation}
              </div>
              <div className="review-item">
                <strong>Price Type:</strong> {priceType}
              </div>
              <div className="review-item">
                <strong>Ownership Type:</strong> {ownershipType}
              </div>
              <div className="review-item">
                <strong>Amenities:</strong> {amenities.join(', ')}
              </div>
              <div className="review-item">
                <strong>Boundary Wall Constructed:</strong> {boundaryWallConstructed ? 'Yes' : 'No'}
              </div>
              <div className="review-item">
                <strong>Gated Community:</strong> {gatedCommunity ? 'Yes' : 'No'}
              </div>
              <div className="review-item">
                <strong>Furnishing Status:</strong> {formData.furnishingStatus}
              </div>
              <div className="review-item">
                <strong>Additional Furnishing:</strong> {formData.additionalFurnishing.join(', ')}
              </div>
              <div className="review-item">
                <strong>Car Parking:</strong> {formData.carParking === 'Yes' ? 'Yes' : 'No'}
              </div>
              <div className="review-item">
                <strong>Two Wheeler Parking:</strong> {formData.twoWheelerParking === 'Yes' ? 'Yes' : 'No'}
              </div>
              <div className="review-item">
                <strong>No of Two Wheeler Parking:</strong> {formData.twoWheelerParkingCount}
              </div>
              <div className="review-item">
                <strong>Total No of Towers:</strong> {formData.totalTowers}
              </div>
              <div className="review-item">
                <strong>Total No of Floors:</strong> {formData.totalFloors}
              </div>
              <div className="review-item">
                <strong>Property Tower No:</strong> {formData.propertyTowerNo}
              </div>
              <div className="review-item">
                <strong>Property Floor No:</strong> {formData.propertyFloorNo}
              </div>
              <div className="review-item">
                <strong>Age of Construction:</strong> {formData.ageOfConstruction}
              </div>
              <div className="review-item">
                <strong>Availability Status:</strong> {formData.availabilityStatus}
              </div>
            </div>
            <button className="submit-button" >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Property;