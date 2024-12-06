import { IoMenu, IoClose } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { FiSettings, FiLogOut } from "react-icons/fi";

import "./index.css";
import { useState } from "react";

const Header = (props) => {
  const { onClickToggleSidebar } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <h1 className="nav-website-heading">Chat / Feed Chat</h1>
        <div className="nav-mobile-container">
          <p className="nav-side-menu-bar" onClick={onClickToggleSidebar}>
            Side Menu Bar
          </p>
          <IoMenu className="hamburger-menu" onClick={onClickToggleMenu} />
        </div>
        <div className="nav-desktop-container">
          <HiOutlineHome className="nav-home-icon-img" />
          <p className="processor-owner-hod-text">Process Owner HOD</p>
          <button type="button" className="admin-button">
            Admin
          </button>
          <h1 className="profile-name">Palak Bansal</h1>
          <img
            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733030613/cgdn7yt7wm3moq5wyhmh.png"
            alt="profile pic"
            className="profile-pic-img"
          />
          <FiSettings className="nav-settings-icon-img" />
          <button type="button" className="logout-button">
            <FiLogOut className="nav-logout-icon-img" />
            <p className="logout-text">Logout</p>
          </button>
        </div>

        {/* is menu open */}
        {isMenuOpen && (
          <div
            className={`menu-bar-container ${isMenuOpen ? "open" : "closed"}`}
          >
            <IoClose className="close-icon-img" onClick={onClickToggleMenu} />
            <div className="menu-bar-details-container">
              <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733030613/cgdn7yt7wm3moq5wyhmh.png"
                alt="profile pic"
                className="menu-profile-pic-img"
              />
              <h1 className="profile-name">Palak Bansal</h1>
              <hr className="menu-hr-line" />
              <div className="menu-list-items-container">
                <div className="menu-icon-and-text">
                  <HiOutlineHome className="menu-icon-img" />
                  <h2 className="menu-item-text">Home</h2>
                </div>
                <div className="menu-icon-and-text">
                  <FiSettings className="menu-icon-img" />
                  <h2 className="menu-item-text">Settings</h2>
                </div>
                <button type="button" className="menu-logout-button">
                  <FiLogOut className="menu-icon-img" />
                  <p className="menu-item-text">Logout</p>
                </button>
                <button type="button" className="admin-button">
                  Admin
                </button>
                <p className="processor-owner-hod-text">Process Owner HOD</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
