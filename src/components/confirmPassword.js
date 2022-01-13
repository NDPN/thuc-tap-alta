import React, { useState } from "react";
import "./confirmPassword.css";

const Reset = () => {
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const check = () => {
    if (newpassword === confirmpassword) {
      console.log(true);
    }
    else{
        console.log(false)
    }
  };

  return (
    <div>
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
          check();
        }}
      >
        Xác nhận
      </button>
    </div>
  );
};

export default Reset;
