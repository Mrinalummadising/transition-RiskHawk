import { FaAngleRight } from "react-icons/fa6";

import "./index.css";

const AgentTopHeader = () => (
  <div className="agents-top-header-container">
    <ul className="agents-top-header-list-container">
      <li className="agents-top-header-list-item">
        <p className="agents-list-item-profile">CB</p>
        <h1 className="agents-list-item-name">Cheyenne Bergson</h1>
      </li>
      <li className="agents-top-header-list-item">
        <p className="agents-list-item-profile darkblue-color">CB</p>
        <h1 className="agents-list-item-name">Jonathan Higgins</h1>
      </li>
      <li className="agents-top-header-list-item">
        <p className="agents-list-item-profile darkblue-color">CB</p>
        <h1 className="agents-list-item-name">Capt. Trunk</h1>
      </li>
      <li className="agents-top-header-list-item selected-agent-list">
        <p className="agents-list-item-profile darkblue-color">CB</p>
        <h1 className="agents-list-item-name selected-agent">Hannibal Smith</h1>
      </li>
      <li className="agents-top-header-list-item">
        <p className="agents-list-item-profile darkblue-color">CB</p>
        <h1 className="agents-list-item-name">Capt. Trunk</h1>
      </li>
      <li className="agents-top-header-list-item">
        <p className="agents-list-item-profile darkblue-color">CB</p>
        <h1 className="agents-list-item-name">Hannibal Smith</h1>
      </li>
      <li className="agents-messaging-list-item">
        <p className="agents-messaging-list-item-profile">
          <img
            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733049951/fuwtgqxxzbxzhsmzxupm.png"
            alt="message icon"
            className="message-icon"
          />
        </p>
        <h1 className="agents-messaging-list-item-name">Messaging</h1>
        <FaAngleRight className="agents-messaging-angle-right-arrow" />
      </li>
    </ul>
  </div>
);

export default AgentTopHeader;
