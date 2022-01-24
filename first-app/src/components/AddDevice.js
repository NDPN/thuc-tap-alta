import React from "react";
import "./css index/AddDevice.css";
import Menubar from "./Menubar";

const Adddevice = (props) => {
  const fake = props.fake;
  return (
    <div>
      <Menubar />
      <div
        style={{
          position: "absolute",
          width: "169px",
          height: "36px",
          left: "224px",
          top: "104px",
        }}
      >
        <h1 className="Quan-ly-thiet-bi">Quản lý thiết bị</h1>
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
        <h1 className="Thong-tin-thiet-bi">Thông tin thiết bị</h1>
        <div className="f624731" style={{ left: "24px", top: "66px" }}>
          <label className="lable-device">
            <p className="Sample-text">Mã thiết bị</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="device-auto-input"></input>
        </div>
        <div className="f624731" style={{ left: "588px", top: "66px" }}>
          <label className="lable-device">
            <p className="Sample-text">Loại thiết bị</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <select className="device-auto-input">
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="f624731" style={{ left: "24px", top: "158px" }}>
          <label className="lable-device">
            <p className="Sample-text">Tên thiết bị</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="device-auto-input"></input>
        </div>
        <div className="f624731" style={{ left: "588px", top: "158px" }}>
          <label className="lable-device">
            <p className="Sample-text">Tên đăng nhập</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="device-auto-input"></input>
        </div>
        <div className="f624731" style={{ left: "24px", top: "250px" }}>
          <label className="lable-device">
            <p className="Sample-text">Địa chỉ IP</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="device-auto-input"></input>
        </div>
        <div className="f624731" style={{ left: "588px", top: "250px" }}>
          <label className="lable-device">
            <p className="Sample-text">Mật khẩu</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="device-auto-input"></input>
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
            className="device-auto-input"
            style={{ width: "1104px" }}
          ></input>
        </div>
        <div style={{ position: "absolute", left: "24px", top: "434px" }}>
          <p>
            <span style={{ color: "red" }}>*</span> Là trường thông tin bắt buộc
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
          onClick={props?.onAdd}
        >
          <p className="Add-btn-text" style={{ color: "#FFFFFF" }}>
            Thêm thiết bị
          </p>
        </button>
      </div>
    </div>
  );
};

export default Adddevice;
