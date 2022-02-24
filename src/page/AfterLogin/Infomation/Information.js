import React from "react";
import { data } from "../../../components/firebase";
import "./Information.css";
import "../../../components/css index/Title.css";
import Menubar from "../Menubar/Menubar";

const Information = () => {
  return (
    <div>
      <div>
        <Menubar />
      </div>
      <div>
        <p className="title">Thông tin cá nhân</p>
        <div className="form-data">
          <div>
            <div>
              <img className="avt" src={data[0].avt} alt="..."></img>
              <img
                className="upd-avt"
                src={window.location.origin + "/Img/Group-624817.png"}
                alt="..."
              ></img>
            </div>
            <p className="header-dp-name">{data[0].displayName}</p>
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
export default Information;
