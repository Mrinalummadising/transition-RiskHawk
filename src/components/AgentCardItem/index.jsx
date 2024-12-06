import { GrLocation } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { GoPlusCircle } from "react-icons/go";

import "./index.css";

const AgentCardItem = () => (
  <div className="agent-card-item-container">
    <div className="agent-details-container">
      <p className="agent-profile">CB</p>
      <div className="agent-profile-details">
        <h1 className="agent-name">Hannibal Smith</h1>
        <div className="agent-location-icon-and-address">
          <GrLocation className="agent-location-icon" />
          <p className="agent-address">
            1 Market Street San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
    <div className="agent-detailed-info-container">
      <div className="agent-detailed-info-column">
        <div className="agent-detailed-info-row">
          <p className="agent-label">Customer ID</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">12345</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
        <hr className="agent-row-hr-line" />
        <div className="agent-detailed-info-row">
          <p className="agent-label">Email Address</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">rachel@sample.com</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
        <hr className="agent-row-hr-line" />
        <div className="agent-detailed-info-row">
          <p className="agent-label">Phone Number</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">8051298905</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
      </div>
      <button type="button" className="agent-add-button">
        <GoPlusCircle className="go-pluscircle-icon" />
        Add
      </button>
    </div>

    <div className="agent-detailed-info-container">
      <div className="agent-detailed-info-column">
        <div className="agent-detailed-info-row">
          <p className="agent-label">Loyalty Tier</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">Silver</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
        <hr className="agent-row-hr-line" />
        <div className="agent-detailed-info-row">
          <p className="agent-label">Segment</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">Sleepy Customer</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
      </div>
      <button type="button" className="agent-add-button">
        <GoPlusCircle className="go-pluscircle-icon" />
        Add
      </button>
    </div>

    <div className="agent-detailed-info-container">
      <div className="agent-detailed-info-column">
        <div className="agent-detailed-info-row">
          <p className="agent-label">Lifetime Value</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">$ 1M</p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
        <hr className="agent-row-hr-line" />
        <div className="agent-detailed-info-row">
          <p className="agent-label">Propensity to Purchase</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">
              <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063105/rnx8cvapr1ujwcdirkas.png"
                alt="percentage 1"
              />
            </p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
      </div>
      <button type="button" className="agent-add-button">
        <GoPlusCircle className="go-pluscircle-icon" />
        Add
      </button>
    </div>

    <div className="agent-detailed-info-container">
      <div className="agent-detailed-info-column">
        <div className="agent-detailed-info-row">
          <p className="agent-label">Engagement Score</p>
          <div className="agent-label-value-and-option-icon">
            <p className="agent-label-value">
              <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063105/u7xdnsnquauicnf8d7pf.png"
                alt="percentage 2"
              />
            </p>
            <SlOptionsVertical className="agent-option-icon" />
          </div>
        </div>
      </div>
      <button type="button" className="agent-add-button">
        <GoPlusCircle className="go-pluscircle-icon" />
        Add
      </button>
    </div>

    <button type="button" className="agent-assign-other-agent-btn">
      <img
        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063641/itsvvk94din5ymyf0mdq.png"
        alt="user icon"
        className="agent-user-icon"
      />
      Assign other Agent
    </button>

    <button type="button" className="agent-add-new-widget-btn">
      Add New Widget
    </button>
  </div>
);

export default AgentCardItem;
