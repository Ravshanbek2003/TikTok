import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Enter from "./components/Enter";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
