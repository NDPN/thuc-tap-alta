import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../components/Constant";
import { signIn, docUser } from "../../components/firebase";
import style from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState([]);

  var passwordError = document.getElementsByClassName("pwError")[0];
  var forgotPassword = document.getElementsByClassName("lable-quen-mk")[0];
  const notification = () => {
    forgotPassword.classList.add("active");
    passwordError.textContent = "Sai mật khẩu hoặc tên đăng nhập";
  };

  useEffect(() => {
    getData(docUser, setuserData);
  }, []);

  return (
    <div className={style.all}>
      <div className={style.left}>
        <img
          className={style.logo}
          src={window.location.origin + "/Img/Logo-alta.png"}
          alt="..."
        ></img>
        <div className={style.inputLogin}>
          <div className={style.inputUser}>
            <label>Tên đăng nhập *</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={style.inputUser}>
            <label className="lable">Mật khẩu *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            onClick={() => navigate("/CheckingEmail")}
            className={style.forgot}
          >
            Quên mật khẩu?
          </div>
          <p className="pwError"></p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn(email, password)
              .then(() => navigate("/Information"))
              .catch(() => notification());
          }}
        >
          Đăng nhập
        </button>
      </div>
      <div className={style.right}>
        <div className={style.imgDecord}>
          <img
            src={window.location.origin + "/Img/Group-341.png"}
            alt="..."
          ></img>
        </div>

        <div className={style.textDecord}>
          <p className={style.textDecord_1}>Hệ thống</p>
          <p className={style.textDecord_2}>Quản lý xếp hàng</p>
        </div>
      </div>
    </div>
  );
};
export default Login;
