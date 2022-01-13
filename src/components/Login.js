import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "./firebase";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var passwordError = document.getElementsByClassName("pwError")[0];
  var forgotPassword = document.getElementsByClassName("lable-quen-mk")[0];
  const notification = () => {
    forgotPassword.classList.add("active");
    passwordError.textContent = "Sai mật khẩu hoặc tên đăng nhập";
  };

  return (
    <div className="form">
      <div>
        <form>
          <div className="user-form">
            <label className="lable">Tên đăng nhập *</label>
            <input
              className="username-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pw-form">
            <label className="lable">Mật khẩu *</label>
            <input
              className="pw-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="pwError"></p>
          <Link to="/checkingEmail">
            <div className="lable-quen-mk">Quên mật khẩu?</div>
          </Link>
          <div>
            <button
              id="login-button"
              onClick={(e) => {
                e.preventDefault();
                signIn(email, password)
                  .then((x) => navigate("/dashboard"))
                  .catch(() => notification());
              }}
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="he-thong-text">Hệ thống</p>
        <p className="quan-ly-text">Quản lý xếp hàng</p>
      </div>
    </div>
  );
};
export default Login;
