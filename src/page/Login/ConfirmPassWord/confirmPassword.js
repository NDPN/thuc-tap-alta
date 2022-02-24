import React, { useState } from "react";
import "./confirmPassword.css";
import { createPassword } from "../../../components/firebase";
import { useNavigate } from "react-router-dom";


const Reset = () => {
  const navigate = useNavigate();
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  return (
    <div>
      <div>
        <img
          className="logo"
          src={window.location.origin + "/Img/Logo-alta.png"}
          alt="..."
        ></img>
        <p className="notification">Đặt lại mật khẩu mới</p>
        <div className="group-323">
          <p className="new-password">Mật khẩu</p>
          <input
            className="input-new-password"
            type="password"
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}
          ></input>
        </div>
        <div className="group-324">
          <p className="new-password">Nhập lại mật khẩu</p>
          <input
            className="input-new-password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          ></input>
        </div>
        <button
          className="confirm"
          onClick={(e) => {
            e.preventDefault();
            createPassword(newpassword);
          }}
        >
          Xác nhận
        </button>
      </div>

      <div className="decord">
        <img className="img-decord-2" src={window.location.origin + "/Img/Frame.png"} alt="..."></img>
      </div>
    </div>
  );
};

export default Reset;
