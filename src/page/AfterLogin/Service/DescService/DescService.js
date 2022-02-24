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
        top="244px"
      />

      <Button
        on={() => navigate("/Service")}
        text="Quay lại"
        img={window.location.origin + "/Img/back-square.png"}
        top="335px"
      />

      {/* form 1 */}
      <form className="Desc-service" style={{ left: "224px" }}>
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
      {/* form 2 */}
      <form className="Desc-service" style={{ left: "618px", width: "776px" }}>
        <div className="Group-320" style={{ top: "16px", left: "24px" }}>
          <h3
            className="text"
            style={{
              position: "absolute",
              left: "0.97px",
              top: "0px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Trạng thái
          </h3>
          <select className="dropdown-select">
            <option value="">Tất cả</option>
            <option value={2}>Hoạt động</option>
            <option value={false}>Ngưng hoạt động</option>
          </select>
        </div>
        <div className="Group-340">
          <h3
            className="text"
            style={{
              position: "absolute",
              left: "0.97px",
              top: "0px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Chọn thời gian
          </h3>

          <input
            type="date"
            className="desc-service-date"
            // value={search.ketNoi}
            // onChange={(e) => setSearch({ ...search, ketNoi: e.target.value })}
            style={{
              left: "0",
            }}
          />
          <input
            type="date"
            className="desc-service-date"
            // value={search.ketNoi}
            // onChange={(e) => setSearch({ ...search, ketNoi: e.target.value })}
            style={{
              right: "0",
            }}
          />
        </div>
        {/* Search từ khóa */}
        <div className="Group-318" style={{ top: "16px", left: "488px" }}>
          <h3
            className="text"
            style={{
              position: "absolute",
              left: "0.97px",
              top: "0px",
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Từ khóa
          </h3>
          <input
            type="text"
            placeholder="Search"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 16px 10px 12px",

              position: "absolute",
              width: "266px",
              height: "44px",
              top: "28px",

              background: "#FFFFFF",

              border: "1.5px solid #D4D4D7",
              boxSizing: "border-box",
              borderRadius: "8px",
            }}
            //   onChange={(e) => setSearch({ ...search, tuKhoa: e.target.value })}
          ></input>
          <label>
            <img
              src={window.location.origin + "/Img/fi-search.png"}
              alt="..."
              style={{
                position: "absolute",
                zIndex: "1",
                width: "20px",
                height: "20px",
                right: "40px",
                top: "40px",

                flex: "none",
                order: "1",
                flexGrow: "0",
                margin: "0px 10px",
              }}
            />
          </label>
        </div>
        <table style={{ top: "104px", left: "25px", width: "736px" }}>
          <tr>
            <th className="th-text">Trạng thái</th>
            <th className="th-text">Số thứ tự</th>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default DescService;
