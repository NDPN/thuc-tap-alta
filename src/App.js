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
import DescService from "./page/AfterLogin/Service/DescService/DescService";
import AddService from "./page/AfterLogin/Service/AddService/AddService";
import UpdService from "./page/AfterLogin/Service/UpdService/UpdService";
import Number from "./page/AfterLogin/Number/ShowNumber/Number";
import AddNumber from "./page/AfterLogin/Number/AddNumber/AddNumber";
import DescNumber from "./page/AfterLogin/Number/DescNumber/DescNumber";
import Report from "./page/AfterLogin/Report/Report";
import Role from "./page/AfterLogin/System/Role/ShowRole/Role";
import AddRole from "./page/AfterLogin/System/Role/AddRole/AddRole";
import UpdRole from "./page/AfterLogin/System/Role/UpdRole/UpdRole";
import Account from "./page/AfterLogin/System/Account/ShowAccount/Acccount";
import AddAccount from "./page/AfterLogin/System/Account/AddAccount/AddAccount";
import UpdAccount from "./page/AfterLogin/System/Account/UpdAccount/UpdAccount";

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
          <Route path="DescService" element={<DescService />} />
          <Route path="AddService" element={<AddService />} />
          <Route path="UpdateService" element={<UpdService />} />
          <Route path="Number" element={<Number />} />
          <Route path="AddNumber" element={<AddNumber />} />
          <Route path="DescNumber" element={<DescNumber />} />
          <Route path="Report" element={<Report />} />
          <Route path="Role" element={<Role />} />
          <Route path="AddRole" element={<AddRole />} />
          <Route path="UpdRole" element={<UpdRole />} />
          <Route path="Account" element={<Account />} />
          <Route path="AddAccount" element={<AddAccount />} />
          <Route path="UpdAccount" element={<UpdAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
