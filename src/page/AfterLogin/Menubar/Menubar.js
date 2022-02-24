import React, { useState, useEffect } from "react";
import { handleSignout } from "../../../components/firebase";
import { useNavigate } from "react-router-dom";
import "./Menubar.css";
import { data } from "../../../components/firebase";
import { docDevice, docService, docNumber } from "../../../components/firebase";
import { getData } from "../../../components/Constant";

const Menubar = () => {
  const navigate = useNavigate();
  const [Device, setDevice] = useState([]);
  const [Service, setService] = useState([]);
  const [Number, setNumber] = useState([]);
  const [active, setactive] = useState({
    actDashboard: 1,
    actDevice: 2,
  });

  // function get data
  useEffect(() => {
    getData(docDevice, setDevice);
    getData(docService, setService);
    getData(docNumber, setNumber);
  }, []);
  return (
    <div>
      <div className="Menubar">
        <img
          className="logo-dashboard"
          src={window.location.origin + "/Img/Logo-alta.png"}
          alt="..."
          onClick={() => {
            navigate("/Information");
          }}
        ></img>
        <div className="conten-item">
          <div
            className="Frame f264"
            onClick={() => {
              navigate("/Dashboard", {
                state: { Service: Service, Device: Device },
              });
            }}
          >
            <div className="f259">
              <img
                src={window.location.origin + "/Img/Element-4.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Dashboard</p>
            </div>
          </div>
          <div
            className="Frame f265"
            onClick={() => {
              navigate("/Device");
            }}
          >
            <div className="Frame f259">
              <img
                src={window.location.origin + "/Img/Monitor.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Thiết bị</p>
            </div>
          </div>
          <div
            className="Frame f266"
            onClick={() => {
              navigate("/Service");
            }}
          >
            <div className="Frame f259">
              <img
                src={window.location.origin + "/Img/Service.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Dịch vụ</p>
            </div>
          </div>
          <div
            className="Frame f267"
            onClick={() => {
              navigate("/Number");
            }}
          >
            <div className="Frame f259">
              <img
                src={window.location.origin + "/Img/fi_layers.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Cấp số</p>
            </div>
          </div>
          <div className="Frame f268">
            <div className="Frame f259">
              <img
                src={window.location.origin + "/Img/report.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Báo cáo</p>
            </div>
          </div>
          <div className="Frame f269">
            <div className="Frame f259">
              <img
                src={window.location.origin + "/Img/setting.png"}
                alt="..."
                className="icon"
              ></img>
              <p className="text-content">Cài đặt hệ thống</p>
            </div>
          </div>
        </div>
        <div className="logout-form">
          <button
            className="log-out-btn"
            onClick={(e) => {
              e.preventDefault();
              handleSignout().then(() => navigate("/Login"));
            }}
          >
            <img
              src={window.location.origin + "/Img/fi_log-out.png"}
              alt="..."
            ></img>
            <p className="logout-text">Đăng xuất</p>
          </button>
        </div>
      </div>
      <div className="Topbar">
        <div>
          <img
            src={window.location.origin + "/Img/Frame-271.png"}
            alt="..."
            className="Frame-271"
          ></img>
          <img
            src={data[0].avt}
            alt="..."
            className="unsplash-Fyl8sMC2j2Q"
          ></img>
          <div className="Group-296">
            <p className="Hello">Xin chào</p>
            <p className="Name">{data[0].displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
