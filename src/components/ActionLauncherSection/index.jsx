import { IoSearch } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";

import "./index.css";

const ActionLauncherSection = () => (
  <div className="action-launcher-section-container">
    <div className="action-launcher-section-header">
      <h1 className="action-launcher-heading">Action Launcher</h1>
    </div>
    <hr className="action-launcher-hr-line" />
    <div className="action-launcher-section-body">
      <div className="action-launcher-search-and-input-container">
        <IoSearch className="action-launcher-search-icon" />
        <input
          type="search"
          className="action-launcher-input"
          placeholder="Search actions..."
        />
      </div>
      <div className="action-launcher-searched-suggestions-container">
        <button type="button" className="add-action-button">
          <GoPlusCircle size={18} /> Add Action
        </button>
        <p className="action-launcher-searched-suggestion">Fee Reversal</p>
        <p className="action-launcher-searched-suggestion">Retail Onboarding</p>
        <p className="action-launcher-searched-suggestion">Address Update</p>
      </div>
    </div>
  </div>
);

export default ActionLauncherSection;
