import "./index.css";

const AgentMessage = () => (
  <div className="agent-messanger-container">
    <div className="agent-messanger-content">
      <div className="agent-messanger-tabs-and-button-container">
        <img
          src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733065780/cb7yjl4jszyp1gzxy77r.png"
          alt="tab option tags"
          className="agent-tabs-option-img"
        />
        <button type="button" className="escalate-button">
          Escalate
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733067091/hzdj2oc32sevebctqd1q.png"
        alt="messanger conversation"
        className="messanger-conversion-img"
      />
    </div>
  </div>
);

export default AgentMessage;
