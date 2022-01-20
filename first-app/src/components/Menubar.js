import React, { useState } from "react";
import { handleSignout } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./css index/Menubar.css";
import { data } from "./firebase";

const Menubar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Thông tin cá nhân");

  return (
    <div>
      <div className="Menubar">
        <img
          className="logo-dashboard"
          src={require("./Img/Logo alta.png")}
          alt="..."
          onClick={() => {
            navigate("/Information");
            setTitle("Thông tin cá nhân");
          }}
        ></img>
        <div className="conten-item">
          <div
            className="Frame f264"
            onClick={() => {
              setTitle("Dash board");
              navigate("/Dashboard");
            }}
          >
          <img src={window.location.origin + "/Img/Element-4.png"} className="icon"></img>
            <p className="text-content">Dashboard</p>
          </div>
          <div className="Frame f265">
            <p className="text-content">Thiết bị</p>
          </div>
          <div className="Frame f266">
            <p className="text-content">Dịch vụ</p>
          </div>
          <div className="Frame f267">
            <p className="text-content">Cấp số</p>
          </div>
          <div className="Frame f268">
            <p className="text-content">Báo cáo</p>
          </div>
          <div className="Frame f269">
            <p className="text-content">Dịch vụ</p>
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
            <img src={require("./Img/fi_log-out.png")}></img>
            <p className="logout-text">Đăng xuất</p>
          </button>
        </div>
      </div>
      <div className="Topbar">
        <div>
          <h3 className="Title">{title}</h3>
        </div>
        <div>
            <img src={window.location.origin + "/Img/Frame-271.png"} className="Frame-271"></img>
            <img src={data[0].avt} className="unsplash-Fyl8sMC2j2Q"></img>
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
