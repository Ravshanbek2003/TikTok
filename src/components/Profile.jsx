import React from "react";

export default function Profile() {
  return (
    <div style={{ backgroundColor: "#161616", color: "white" }}>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#161616",
          color: "white",
          padding: "10px",
          textAlign: "center",
          height: "calc(100vh - 45px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "16px" }}>Allanazarov Daler</h3>
          <div>
            <span
              style={{
                fontSize: "20px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              🔗
            </span>
            <span style={{ fontSize: "20px", cursor: "pointer" }}>☰</span>
          </div>
        </div>

        {/* Profile Info */}
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <span style={{ fontSize: "24px", color: "#555" }}>D</span>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#00aaff",
                borderRadius: "50%",
                position: "absolute",
                bottom: "0",
                right: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              +
            </div>
          </div>
          <p style={{ fontSize: "14px", margin: "10px 0", color: "#555" }}>
            allanazarovdaler87@mail.com
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            <span>100 Kuzatilmoqda</span>
            <span>23 Kuzatuvchi</span>
            <span>2000 Layklar</span>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                padding: "8px 15px",
                fontSize: "14px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              Profilni tahrirlash
            </button>
            <button
              style={{
                padding: "8px 15px",
                fontSize: "14px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              Profilni ulashish
            </button>
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "#00aaff",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            + Tavsif kiritish
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
            marginTop: "10px",
          }}
        >
          <span style={{ fontSize: "18px", cursor: "pointer" }}>📌</span>
          <span style={{ fontSize: "18px", cursor: "pointer" }}>🔒</span>
          <span style={{ fontSize: "18px", cursor: "pointer" }}>📷</span>
          <span style={{ fontSize: "18px", cursor: "pointer" }}>🚫</span>
        </div>

        {/* Video Upload Section */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3 style={{ fontSize: "16px", color: "#333" }}>
            Retro video ulashing
          </h3>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: "#ff3366",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Yuklash
          </button>
        </div>
      </div>
    </div>
  );
}
