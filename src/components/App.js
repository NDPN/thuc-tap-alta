import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Resetpw from "./checkingEmail";
import Reset from "./confirmPassword";
import Dashboard from "./dashBoard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="checkingEmail" element={<Resetpw/>} />
          <Route path="comfirmPassword" element={<Reset />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
