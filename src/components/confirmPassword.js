import React, { useState } from "react";
import "./css index/confirmPassword.css";
import { createPassword } from "./firebase";
import { useNavigate } from "react-router-dom";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const Reset = () => {
  const navigate = useNavigate();
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  // const querry = useQuery();
  // console.log(querry.get("oobCode"));
  return (
    <div>
      <div>
        <img
          className="logo"
          src={require("./Img/Logo alta.png")}
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
        <img className="img-decord-2" src={require("./Img/Frame.png")} alt="..."></img>
      </div>
    </div>
  );
};

export default Reset;
