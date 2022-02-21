import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import Button from "../../../../components/Button";
import "./DescService.css";

const DescService = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [desc, setDesc] = useState([]);

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setDesc(state);
  }, []);

  return (
    <div>
      <Menubar />
      <Button
        on={() => navigate("/UpdateService", { state: desc })}
        text="Cập nhật danh sách"
        img={window.location.origin + "/Img/Edit-square.png"}
      />
      <form className="Desc-service">
        <h1 className="Thong-tin-thiet-bi">Thông tin dịch vụ</h1>
        <div className="Group-625230" style={{ top: "66px", left: "24px" }}>
          <p className="lable-text-desc">
            Mã dịch vụ: <span className="text-desc">{desc?.ID}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "24px" }}>
          <p className="lable-text-desc">
            Tên dịch vụ:{" "}
            <span className="text-desc" style={{ width: "187px" }}>
              {desc?.name}
            </span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "24px" }}>
          <p className="lable-text-desc">
            Mô tả:{" "}
            <span className="text-desc" style={{ width: "187px" }}>
              {desc?.desc}
            </span>
          </p>
        </div>
        <h1
          className="Thong-tin-thiet-bi"
          style={{ top: "174px", left: "24px" }}
        >
          Quy tắc cấp số
        </h1>
        <div className="Group-338" style={{ top: "232px" }}>
          <div className="Group-334" style={{ top: "10px" }}>
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
        <div className="Group-338" style={{ top: "288px" }}>
          <div className="Group-334" style={{ top: "10px" }}>
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
        <div className="Group-338" style={{ top: "344px" }}>
          <label>Reset mỗi ngày</label>
        </div>
      </form>
    </div>
  );
};

export default DescService;
