import React from "react";
import { useHistory } from "react-router-dom";

// import { FaSignOutAlt } from "react-icons/fa";
import ICON from "../../assets/logotrans.png";
import SEARCH from "../../assets/search.png";
import INBOX from "../../assets/inbox.png";
import NOTIF from "../../assets/notification.png";
import PROFILE from "../../assets/profile.png";
import "./navbar.css";

export default function Navbar({ user, setUser }) {
  let history = useHistory();

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };

  return (
    <div className="navbar-container">
      {/* Left */}
      <div className="nav-container">
        <img src={ICON} className="navbar-logo" alt="navbar-logo" />
      </div>

      {/* Right */}
      <div>
        {user ? (
          <div>
            <div className="chat-head-item-navbar">
              <div className="nav-search-container-input-bar">
                <img id="searching" src={SEARCH} alt="navbar-search" />
                <input className="nav-search-text" placeholder="Search" />
              </div>
              <div className="nav-search-container menu-buttons">
                <img className="menu-button" src={INBOX} alt="navbar-inbox" />
                <img className="menu-button" src={NOTIF} alt="navbar-notif" />
              </div>
              <div className="user-profile-pic-container">
                <img className="profile-img" src={PROFILE} alt="" />
              </div>
              <div>
                {/* <p className="user-name">{user.email}</p> */}
                <div className="log-out-button" onClick={logout}>
                  {/* <FaSignOutAlt />
                  Log out */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="navbar-text">Login to use chat.</p>
          </div>
        )}
      </div>
    </div>
  );
}
