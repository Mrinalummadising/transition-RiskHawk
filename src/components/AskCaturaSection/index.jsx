import { LuMail } from "react-icons/lu";
import { IoCaretDown, IoEyeOutline } from "react-icons/io5";
import { BiCopy } from "react-icons/bi";

import "./index.css";

const AskCaturaSection = () => (
  <div className="ask-catura-section-container">
    <div className="ask-catura-section-header">
      <h1 className="ask-catura-section-heading">Ask Catura</h1>
      <div className="ask-catura-social-container">
        <LuMail className="ask-catura-mail-icon" />
        <p className="ask-catura-text">WhatsApp</p>
        <IoCaretDown className="ask-catura-care-down-icon" />
      </div>
      <div className="ask-catura-social-container">
        <LuMail className="ask-catura-mail-icon" />
        <p className="ask-catura-text">Greetings</p>
        <IoCaretDown className="ask-catura-care-down-icon" />
      </div>
    </div>
    <hr className="ask-catura-hr-line" />
    <div className="ask-catura-section-body">
      <div className="ask-catura-section-bg-container">
        <h2 className="ask-catura-greeting-template">Greeting Template</h2>
        <div className="ask-catura-buttons-container">
          <button type="button" className="ask-copy-top-send-btn">
            <BiCopy /> Copy to Send
          </button>
          <button type="button" className="ask-copy-top-send-btn">
            <IoEyeOutline /> Preview
          </button>
        </div>
      </div>
      <div className="input-and-send-button-container">
        <input
          type="text"
          className="ask-input-element"
          placeholder="Type a message..."
        />
        <button type="button" className="ask-send-fast-button">
          <img
            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733073186/cy6li7dxbnjwc6kebxop.png"
            alt="send fast icon"
            className="send-fast-icon-img"
          />
        </button>
      </div>
    </div>
  </div>
);

export default AskCaturaSection;
