import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import { db } from "../../../../components/firebase";
import { doc, updateDoc } from "firebase/firestore";
import style from "./UpdateDevice.module.css"
const UpdateDevice = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    ID: "",
    name: "",
    IP: "",
    service: "",
  });

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setData(state)
  }, []);

  const handleUpdateDevice = async (id, state) => {
    const deviceDoc = doc(db, "Device", id);
    await updateDoc(deviceDoc, state);
    navigate("/Device");
  };

  return (
    <div>
      <Menubar />
      <div>
        <div
          style={{
            position: "absolute",
            width: "169px",
            height: "36px",
            left: "224px",
            top: "72px",
          }}
        >
          <h1 className={style.title}>Quản lý thiết bị</h1>
        </div>
        <form
          style={{
            position: "absolute",
            width: "1152px",
            height: "556px",
            left: "224px",
            top: "156px",
            background: "#FFFF",
            boxShadow: "2px 2px 8px rgba(232, 239, 244, 0.8)",
            borderRadius: "16px",
          }}
        >
          <h1 className={style.thongtinthietbi}>Thông tin thiết bị</h1>
          <div className="f624731" style={{ left: "24px", top: "66px" }}>
            <label className="lable-device">
              <p className="Sample-text">Mã thiết bị</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="auto-input"
              onChange={(e) => setInput({ ...input, ID: e.target.value })}
            ></input>
          </div>

          <div className="f624731" style={{ left: "588px", top: "66px" }}>
            <label className="lable-device">
              <p className="Sample-text">Loại thiết bị</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <select className="auto-input">
              <option value={1}>Kiosk</option>
              <option value={2}>Display counter</option>
            </select>
          </div>

          <div className="f624731" style={{ left: "24px", top: "158px" }}>
            <label className="lable-device">
              <p className="Sample-text">Tên thiết bị</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="auto-input"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            ></input>
          </div>

          <div className="f624731" style={{ left: "588px", top: "158px" }}>
            <label className="lable-device">
              <p className="Sample-text">Tên đăng nhập</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input className="auto-input"></input>
          </div>

          <div className="f624731" style={{ left: "24px", top: "250px" }}>
            <label className="lable-device">
              <p className="Sample-text">Địa chỉ IP</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="auto-input"
              onChange={(e) => setInput({ ...input, IP: e.target.value })}
            ></input>
          </div>

          <div className="f624731" style={{ left: "588px", top: "250px" }}>
            <label className="lable-device">
              <p className="Sample-text">Mật khẩu</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input className="auto-input"></input>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
              position: "absolute",
              width: "1104px",
              height: "76px",
              left: "24px",
              top: "342px",
            }}
          >
            <label className="lable-device">
              <p className="Sample-text">Dịch vụ sử dụng</p>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="auto-input"
              style={{ width: "1104px" }}
              onChange={(e) => setInput({ ...input, service: e.target.value })}
            ></input>
          </div>

          <div style={{ position: "absolute", left: "24px", top: "434px" }}>
            <p>
              <span style={{ color: "red" }}>*</span> Là trường thông tin bắt
              buộc
            </p>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "326px",
            height: "48px",
            left: "634.5px",
            top: "730px",
          }}
        >
          <button
            onClick={() => navigate("/Device")}
            className="Add-btn"
            style={{
              background: "#fff2e7",
            }}
          >
            <p className="Add-btn-text" style={{ color: "#FF9138" }}>
              Hủy bỏ
            </p>
          </button>
          <button
            className="Add-btn"
            style={{ background: "#FF9138", left: "179px" }}
            onClick={() => {
              handleUpdateDevice(data?.id, input);
            }}
          >
            <p className="Add-btn-text" style={{ color: "#FFFFFF" }}>
              Cập nhật
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDevice;
