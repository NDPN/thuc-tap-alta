import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import Resetpw from "./checkingEmail";
import Reset from "./confirmPassword";
import Information from "./Information";
import Dashboard from "./Dashboard";
import Device from "./Device";
import Adddevice from "./AddDevice";

function App() {
  const [fake, setFake] = useState({
    Divice: [
      {
        Mã: "KIO_01",
        Tên: "Kiosk",
        IP: 123,
        hoatDong: false,
        ketNoi: false,
        Service: "abc",
      },
      {
        Mã: "KIO_02",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_03",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_04",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_05",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_06",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: false,
        ketNoi: false,
        Service: "bnm",
      },
    ],
    input: {
      Mã: "",
      Tên: "",
      IP: "",
      hoatDong: "",
      ketNoi: "",
      Service: "",
    },
  });
  const onAdd = () => {
    let ex = {
      ...fake.input,
    };
    setFake({
      Divice: [...fake.input, ex],
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="checkingEmail" element={<Resetpw />} />
          <Route path="comfirmPassword" element={<Reset />} />
          <Route path="Information" element={<Information />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Device" element={<Device fake={fake.Divice} />} />
          <Route
            path="Adddevice"
            element={<Adddevice fake={fake.Divice} onAdd={onAdd} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;