import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Full Name:", fullname);
    console.log("Username:", username);
    console.log("Email:", email);
    // Bu yerda login qilish logikasini amalga oshirishingiz mumkin
    try {
      const response = await fetch("https://bakery.the-watcher.uz/user/login", {
        // Serverdagi login endpointi
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Tizimga muvaffaqiyatli kirdingiz!");
        navigate("/");
        localStorage.setItem("token", `Bearer ${data.token}`);
        // Login muvaffaqiyatli bo'ldi
        console.log("Login muvaffaqiyatli:", data);

        // Bu yerda foydalanuvchini keyingi sahifaga yo'naltirish yoki state'ni yangilash kabi amallarni bajarishingiz mumkin
      } else {
        // Loginda xatolik yuz berdi
        // setError(data.message || "Loginda xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Tarmoq xatoligi:", error);
      // setError("Tarmoq xatoligi yuz berdi");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div
      style={{
        zIndex: 1000,
        backgroundColor: "#161616",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "8px",
          width: "350px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "25px", color: "#eee" }}
        >
          Kirish
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="fullname"
              style={{ display: "block", marginBottom: "5px", color: "#bbb" }}
            >
              To'liq ism
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="To'liq ismingizni kiriting"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "5px", color: "#bbb" }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Foydalanuvchi nomingizni kiriting"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "5px", color: "#bbb" }}
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Password kiriting"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px", color: "#bbb" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #444",
                backgroundColor: "#333",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Email manzilingizni kiriting"
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#00aaff",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Kirish
          </button>
          <p
            style={{
              marginTop: "15px",
              fontSize: "14px",
              color: "#bbb",
              textAlign: "center",
            }}
          ></p>
        </form>
      </div>
    </div>
  );
}
