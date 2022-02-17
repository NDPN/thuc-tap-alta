import React from "react";
import "../../../../components/css index/form.css";

const AddService = () => {
  return (
    // <div style={{ display: `${visible ? "flex" : "none"}` }}>
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
        <h1 className="Title-1">Quản lý dịch vụ</h1>
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
        <h1 className="Thong-tin-thiet-bi">Thông tin dịch vụ</h1>
        {/* Mã thiết bị inputL */}
        <div className="f624731" style={{ left: "24px", top: "66px" }}>
          <label className="lable-device">
            <p className="Sample-text">Mã dịch vụ</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            placeholder="201"
            className="auto-input"
            // onChange={(e) =>
            //   setchange({ input: { ...change.input, Mã: e.target.value } })
            // }
          ></input>
        </div>
        {/* loại thiết bị input */}
        <div className="f624731" style={{ left: "588px", top: "66px" }}>
          <label className="lable-device">
            <p className="Sample-text">Loại thiết bị</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            placeholder="Mô tả dịch vụ"
            className="auto-input"
            style={{ height: "132px" }}
          ></textarea>
        </div>
        <div className="f624731" style={{ left: "24px", top: "158px" }}>
          <label className="lable-device">
            <p className="Sample-text">Tên thiết bị</p>
            <span style={{ color: "red" }}>*</span>
          </label>
          <input
            placeholder="Khám tim mạch"
            className="auto-input"
            // onChange={(e) =>
            //   setchange({ input: { ...change.input, Tên: e.target.value } })
            // }
          ></input>
        </div>
        <h1
          className="Thong-tin-thiet-bi"
          style={{ top: "254px", left: "24px" }}
        >
          Quy tắc cấp số
        </h1>
        <div className="Group-338" style={{ top: "292px" }}>
          <div className="Group-334" style={{ top: "10px" }}>
            <input type="checkbox"></input>
            <label>Tăng tự động từ: </label>
          </div>
          <div className="Group-333">
            <input
              type="number"
              placeholder="0001"
              className="input-Group-337"
            />
            <text> đến </text>
            <input
              type="number"
              placeholder="9999"
              className="input-Group-337"
            />
          </div>
        </div>
        <div className="Group-338" style={{ top: "348px" }}>
          <div className="Group-334" style={{ top: "10px" }}>
            <input type="checkbox"></input>
            <label>Prefix: </label>
          </div>
          <div className="Group-333">
            <input
              type="number"
              placeholder="0001"
              className="input-Group-337"
            />
          </div>
        </div>
        <div className="Group-338" style={{ top: "404px" }}>
          <div className="Group-334" style={{ top: "10px" }}>
            <input type="checkbox"></input>
            <label>Prefix: </label>
          </div>
          <div className="Group-333">
            <input
              type="number"
              placeholder="0001"
              className="input-Group-337"
            />
          </div>
        </div>
        <div className="Group-338" style={{ top: "460px" }}>
          <input type="checkbox"></input>
          <label>Reset mỗi ngày</label>
        </div>

        <div style={{ position: "absolute", left: "24px", top: "496px" }}>
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
          //   onClick={close}
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
          //   onClick={() => {
          //     newData(change);
          //     close();
          //   }}
        >
          <p className="Add-btn-text" style={{ color: "#FFFFFF" }}>
            Thêm dịch vụ
          </p>
        </button>
      </div>
    </div>
  );
};

export default AddService;
