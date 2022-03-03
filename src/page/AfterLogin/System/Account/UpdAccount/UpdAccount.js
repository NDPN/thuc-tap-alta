import React, { useState, useEffect } from "react";
import style from "./UpdAccount.module.scss";
import Menubar from "../../../Menubar/Menubar";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { db, docRole } from "../../../../../components/firebase";
import { getData } from "../../../../../components/Constant";

const UpdAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setdata] = useState([]);
  const [role, setRole] = useState([]);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Admin",
    user: "",
    password: "",
    confirm: "",
    status: "1",
  });

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setdata(state);
    getData(docRole, setRole);
  }, []);

  // function
  const handleDelUser = async () => {
    await deleteDoc(doc(db, "User", data.user));
  };

  const handleUpdUser = async () => {
    await setDoc(doc(db, "User", input.user), input);
  };
  const handleCheckConfirm = async () => {
    if (input.password == input.confirm) {
      handleDelUser();
      handleUpdUser();
    } else {
      alert("Mật khẩu và Xác nhận mật khẩu không giống nhau");
    }
  };

  return (
    <div>
      <Menubar />
      <div className={style.Title}>Danh sách tài khoản</div>
      <form className={style.formAddAccount}>
        <div className={style.titleText}>Thông tin tài khoản</div>
        <div className={style.left}>
          <div className={style.input}>
            <p>
              Họ tên <span style={{ color: "red" }}>*</span>
            </p>
            <input
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Số điện thoại <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="number"
              onChange={(e) => setInput({ ...input, phone: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Email <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="email"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Vai trò <span style={{ color: "red" }}>*</span>
            </p>
            <select
              onChange={(e) => setInput({ ...input, role: e.target.value })}
            >
              {role?.map((item) => [
                <option value={item.Role}>{item.Role}</option>,
              ])}
            </select>
          </div>
          <div className={style.notice}>
            <span style={{ color: "red" }}>*</span> Là trường thông tin bắt buộc
          </div>
        </div>
        <div className={style.right}>
          <div className={style.input}>
            <p>
              Tên đăng nhập <span style={{ color: "red" }}>*</span>
            </p>
            <input
              onChange={(e) => setInput({ ...input, user: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Mật khẩu <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Nhập lại mật khẩu <span style={{ color: "red" }}>*</span>
            </p>
            <input
              type="password"
              onChange={(e) => setInput({ ...input, confirm: e.target.value })}
            />
          </div>
          <div className={style.input}>
            <p>
              Tình trạng <span style={{ color: "red" }}>*</span>
            </p>
            <select
              onChange={(e) => setInput({ ...input, status: e.target.value })}
            >
              <option value="1">Hoạt động</option>
              <option value="2">Ngưng hoạt động</option>
            </select>
          </div>
        </div>
      </form>
      <div className={style.twoBtn}>
        <button
          onClick={() => {
            navigate("/Account");
          }}
          style={{ background: "#fff2e7" }}
        >
          <span style={{ color: "#FF9138" }}>Hủy bỏ</span>
        </button>
        <button
          onClick={() => {
            handleCheckConfirm();
            navigate("/Account");
          }}
          style={{ background: "#FF9138" }}
        >
          <span style={{ color: "white" }}>Cập nhật</span>
        </button>
      </div>
    </div>
  );
};

export default UpdAccount;
