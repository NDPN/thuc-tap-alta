import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./page/Login/Login";
import Resetpw from "./page/Login/Checking/checkingEmail";
import Reset from "./page/Login/ConfirmPassWord/confirmPassword";
import Information from "./page/AfterLogin/Infomation/Information";
import Dashboard from "./page/AfterLogin/Dashboard/Dashboard";
import Device from "./page/AfterLogin/Device/ShowDevice/Device";
import DescDevice from "./page/AfterLogin/Device/DescDevice/DescDevice";
import AddDevice from "./page/AfterLogin/Device/AddDevice/AddDevice";
import UpdateDevice from "./page/AfterLogin/Device/UpdateDevice/UpdateDevice";
import ShowService from "./page/AfterLogin/Service/ShowService/ShowService";
import AddService from "./page/AfterLogin/Service/AddService/AddService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="CheckingEmail" element={<Resetpw />} />
          <Route path="ComfirmPassword" element={<Reset />} />
          <Route path="Information" element={<Information />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Device" element={<Device />} />
          <Route path="DescDevice" element={<DescDevice />} />
          <Route path="AddDevice" element={<AddDevice />} />
          <Route path="UpdateDevice" element={<UpdateDevice />} />
          <Route path="Service" element={<ShowService />} />
          <Route path="AddService" element={<AddService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
