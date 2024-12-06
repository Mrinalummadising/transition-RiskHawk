import { FaAngleRight } from "react-icons/fa6";

import "./index.css";

const Sidebar = (props) => {
  const { isSidebarOpen } = props;

  return (
    <div
      className="sidebar-main-container"
      style={{ display: isSidebarOpen ? "flex" : "none" }}
    >
      <img
        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733029412/st6ioz8dszikwmmztesy.png"
        alt="risk hawk"
        className="sidebar-risk-hawk-logo-img"
      />
      <ul className="sidebar-options-list-container">
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733040734/xoinwwezutxvohhn7piu.png"
              alt="file search"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Internal Audit</p>
          </div>
          <FaAngleRight className="fa-angle-right-icon-img" />
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733040733/meifsimuqbpp1zjdlqul.png"
              alt="file check"
              className="option-list-icon-img"
            />
            <p className="option-list-text">UAT Testing</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043638/zaa5zjqz9onnkjp2o9rj.png"
              alt="link"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Intract</p>
          </div>
          <FaAngleRight className="fa-angle-right-icon-img" />
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733044083/xzy0kpseztfprt3wx799.png"
              alt="users"
              className="option-list-icon-img"
            />
            <p className="option-list-text queue-item">Queue</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043638/cavqxsbw88o2zx7wt0qa.png"
              alt="site map"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Workflow</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043638/ndgqixszyp459oreud1g.png"
              alt="user"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Admin</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043638/mk5cc0iilojectcdwqru.png"
              alt="box"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Asset</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043638/jpzzzwgoon5dkstxnnco.png"
              alt="users 1"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Parent</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043637/mz3mlpzqcrfqgskkk2q0.png"
              alt="circle off 1"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Option One</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043637/fowddjvhrlztksl7m1ly.png"
              alt="circle off 2"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Option Two</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043637/ua1fgjfmnvvstkjcxm9t.png"
              alt="wrench"
              className="option-list-icon-img"
            />
            <p className="option-list-text">All Accessories</p>
          </div>
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733040734/xoinwwezutxvohhn7piu.png"
              alt="file search 1"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Internal Audit</p>
          </div>
          <FaAngleRight className="fa-angle-right-icon-img" />
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043637/obfbjjnkujt3iulbv9eh.png"
              alt="star"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Decorating</p>
          </div>
          <FaAngleRight className="fa-angle-right-icon-img" />
        </li>
        <li className="option-list-item">
          <div className="option-list-icon-and-text">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733043637/z7byochqwfob88y5uomq.png"
              alt="gift"
              className="option-list-icon-img"
            />
            <p className="option-list-text">Presenting</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
