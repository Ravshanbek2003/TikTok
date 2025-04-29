import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserFriends,
  faPlus,
  faInbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Agar hozirgi yo'nalish /login bo'lsa, pastki navigatsiyani yashirish
  const isLoginPage = location.pathname === "/login";

  return (
    <div style={{ height: "100vh" }}>
      {" "}
      {/* To'liq ekran balandligi */}
      <div style={{ height: isLoginPage ? "100vh" : "calc(100vh - 45px)" }}>
        {children}
      </div>
      {!isLoginPage && (
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
                location.pathname === "/create"
                  ? "item-name active"
                  : "item-name"
              }`}
            >
              +
            </span>
          </div>
          <div className="nav-item" onClick={() => navigate("/enter")}>
            {/* <FontAwesomeIcon icon={fa7} className="notification" /> */}
            <FontAwesomeIcon
              icon={faInbox}
              className={`icon ${
                location.pathname === "/enter" ? "active" : ""
              }`}
            />
            <span
              className={`icon ${
                location.pathname === "/enter"
                  ? "item-name active"
                  : "item-name"
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
      )}
    </div>
  );
}

export default Layout;
