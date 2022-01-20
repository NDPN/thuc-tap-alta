import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Resetpw from "./checkingEmail";
import Reset from "./confirmPassword";
import Information from "./Information";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="checkingEmail" element={<Resetpw/>} />
          <Route path="comfirmPassword" element={<Reset />} />
          <Route path="Information" element={<Information/>} />
          <Route path="Dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
