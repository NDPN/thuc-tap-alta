import React from "react";
import { useNavigate } from "react-router-dom";
import { data, handleSignout } from "./firebase";
import "./css index/dashBoard.css";
import logo from "./Img/Logo alta.png";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Menubar">
        <img className="logo-dashboard" src={logo} alt="..."></img>
        <div className="conten-item">
          <div className="Frame f264">
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
      <div>
        <div className="form-data">
          <div>
            <img className="avt" src={data[0].avt} alt="..."></img>
          </div>
          <div className="container">
            <div className="data-user">
              <label className="lable-user">Tên người dùng</label>
              <input
                className="user-data"
                value={data[0].displayName}
                disabled
              ></input>
            </div>
            <div className="data-user">
              <label className="lable-user">Tên đăng nhập</label>
              <input
                className="user-data"
                value={data[0].email}
                disabled
              ></input>
            </div>
          </div>
          <div className="container">
            <div className="data-user">
              <label className="lable-user">Số điện thoại</label>
              <input
                className="user-data"
                value={data[0].phoneNumber}
                disabled
              ></input>
            </div>
            <div className="data-user">
              <label className="lable-user">Mật khẩu</label>
              <input className="user-data" value="///" disabled></input>
            </div>
          </div>
          <div className="container">
            <div className="data-user">
              <label className="lable-user">email</label>
              <input
                className="user-data"
                value={data[0].email}
                disabled
              ></input>
            </div>
            <div className="data-user">
              <label className="lable-user">Vai trò</label>
              <input
                className="user-data"
                value={data[0].role}
                disabled
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
