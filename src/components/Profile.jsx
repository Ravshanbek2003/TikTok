import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const Image = ({ src, alt, style }) => (
    <img src={src} alt={alt} style={style} />
  );
  const navigate = useNavigate();
  const fetchMe = async (token) => {
    try {
      const response = await fetch(
        "https://bakery.the-watcher.uz/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Agar server token bilan autentifikatsiyani talab qilsa
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData?.message || `HTTP xatolik! Status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log(data);

      return data; // MeResponse tipidagi ma'lumot
    } catch (error) {
      console.error("Me so'rovida xatolik:", error.message);
      throw error;
    }
  };
  const accessToken = localStorage.getItem("token"); // Tokenni saqlash usulingizga moslang
  const [data, setData] = useState({});
  useEffect(() => {
    if (accessToken) {
      fetchMe(accessToken).then((responseData) => {
        console.log(responseData);

        setData(responseData);
      });
    }
  }, []);
  console.log(data);

  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = null;
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("savedFile", reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  useEffect(() => {
    const savedFile = localStorage.getItem("savedFile");
    if (savedFile) {
      setImagePreview(savedFile);
      fetch(savedFile)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "saved-file", { type: blob.type });

          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          if (inputRef?.current) {
            inputRef.current.files = dataTransfer.files;
          }
        });
    }
  }, []);
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
          <h3 style={{ margin: 0, fontSize: "16px" }}>
            {data?.fullName || "user name"}
          </h3>
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
              border: "1px solid black",
              margin: "0 auto",
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          >
            <label htmlFor="img" style={{ cursor: "pointer" }}>
              <Image
                src={imagePreview || ""}
                alt="profile image"
                style={{
                  border: "1px solid black",
                  margin: "0 auto",
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              />
              <input
                id="img"
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <p style={{ fontSize: "14px", margin: "10px 0", color: "#555" }}>
            {data?.username || "user email"}
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
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
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
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
