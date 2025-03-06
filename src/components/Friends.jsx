import { faSearch, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Friends() {
  return (
    <div>
      <div
        className="top-navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            background: "#435682",
            color: "#fff",
          }}
        >
          D
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
        >
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
          Postlarni ko‘rish uchun tanishlarga ulang
        </h2>
        <button
          style={{
            width: "80%",
            maxWidth: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Facebookdagi tanishlarga ulanish
        </button>
        <button
          style={{
            width: "80%",
            maxWidth: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Tanishlarni taklif qilish
        </button>
      </div>
    </div>
  );
}

export default Friends;
