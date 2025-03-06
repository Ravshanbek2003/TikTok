import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserFriends,
  faPlus,
  faInbox,
  fa7,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div style={{ height: "calc(100vh - 45px)" }}> {children}</div>
      <div className="bottom-navbar pos">
        <div className="nav-item" onClick={() => navigate("/")}>
          <FontAwesomeIcon
            icon={faHouse}
            className={`icon ${location.pathname === "/" ? "active" : ""}`}
          />
          <span
            className={`icon ${
              location.pathname === "/" ? "item-name active" : "item-name"
            }`}
          >
            Asosiy
          </span>
        </div>
        <div className="nav-item" onClick={() => navigate("/friends")}>
          <FontAwesomeIcon
            icon={faUserFriends}
            className={`icon ${
              location.pathname === "/friends" ? "active" : ""
            }`}
          />
          <span
            className={`icon ${
              location.pathname === "/friends"
                ? "item-name active"
                : "item-name"
            }`}
          >
            Friends
          </span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon
            icon={faPlus}
            className={`icon plus ${
              location.pathname === "/create" ? "active" : ""
            }`}
          />
          <span
            className={`icon ${
              location.pathname === "/create" ? "item-name active" : "item-name"
            }`}
          >
            +
          </span>
        </div>
        <div className="nav-item" onClick={() => navigate("/enter")}>
          {/* <FontAwesomeIcon icon={fa7} className="notification" /> */}
          <FontAwesomeIcon
            icon={faInbox}
            className={`icon ${location.pathname === "/enter" ? "active" : ""}`}
          />
          <span
            className={`icon ${
              location.pathname === "/enter" ? "item-name active" : "item-name"
            }`}
          >
            Kiruvchi
          </span>
        </div>
        <div className="nav-item" onClick={() => navigate("/profile")}>
          <FontAwesomeIcon
            icon={faUser}
            className={`icon ${
              location.pathname === "/profile" ? "active" : ""
            }`}
          />
          <span
            className={`icon ${
              location.pathname === "/profile"
                ? "item-name active"
                : "item-name"
            }`}
          >
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
