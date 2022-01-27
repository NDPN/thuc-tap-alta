import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./firebase";
import "./css index/Information.css";
import Menubar from "./Menubar";

const Information = () => {
  return (
    <div>
      <div className="Menubar">
        <Menubar />
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
export default Information;
