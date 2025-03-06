import React from "react";

function Enter() {
  return (
    <div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#161616",
          color: "white",
          padding: "10px",
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
          <h2 style={{ margin: 0, fontSize: "18px" }}>Kiruvchi</h2>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>🔍</span>
        </div>

        {/* Shortcut Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 0",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#ddd",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              🔒
            </div>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>Shu kunda</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#ddd",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📊
            </div>
            <p style={{ fontSize: "12px", marginTop: "5px" }}>Vidjet</p>
          </div>
        </div>

        {/* Notifications */}
        <div>
          {[
            {
              icon: "🔔",
              title: "Yangi kuzatuvchilar",
              desc: "Yangi kuzatuvchilaringizni bu yerda ko‘ring.",
            },
            {
              icon: "📢",
              title: "Kampaniya",
              desc: "Bildirishnomalarni bu yerda ko‘ring.",
            },
            {
              icon: "📩",
              title: "Tizim bildirishnomalari",
              desc: "Hisob yangiliklari: Your em...",
              time: "Hozirgina",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "10px" }}>
                {item.icon}
              </span>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "14px" }}>{item.title}</strong>
                <p style={{ fontSize: "12px", margin: "5px 0", color: "#666" }}>
                  {item.desc}
                </p>
              </div>
              {item.time && (
                <span style={{ fontSize: "12px", color: "#999" }}>
                  {item.time}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Suggested Users */}
        <div>
          {[
            { name: "Sunnat___", action: "Obuna qilish" },
            { name: "Kuvonchbek", action: "Obuna qilish" },
            { name: "88", action: "Obuna qilish" },
          ].map((user, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "14px" }}>{user.name}</strong>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  {user.name} bilan salomlashing
                </p>
              </div>
              <button
                style={{
                  padding: "5px 10px",
                  fontSize: "12px",
                  backgroundColor: "#ff3366",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {user.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Enter;
