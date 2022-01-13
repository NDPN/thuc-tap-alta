import React, { useState } from "react";
import "./checkingEmail.css";
import { forgotPassword } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

const Resetpw = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div>
      <p className="dat-lai-mk">Đặt lại mật khẩu</p>
      <div className="group-322">
        <p className="offer">
          Vui lòng nhập Email để đặt lại mật khẩu của bạn*
        </p>
        <input
          className="input-check"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <Link to="/Login">
        <button className="cancel">Hủy</button>
      </Link>
      <button
        className="continue"
        onClick={(e) => {
          e.preventDefault();
          forgotPassword(email)
            .then(() => navigate("/comfirmPassword"))
            .catch((y) => console.log(y));
        }}
      >
        Tiếp tục
      </button>
    </div>
  );
};

export default Resetpw;
