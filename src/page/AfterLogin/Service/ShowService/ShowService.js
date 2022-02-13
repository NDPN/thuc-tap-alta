import React, { useState, useEffect } from "react";
import "./ShowService.css";
import Menubar from "../../Menubar/Menubar";
import { FakeDevice } from "../../../../components/FakeData";
import { check } from "../../../../components/Contant";

const ShowService = () => {
  const [Service, setService] = useState([]);
  
  
  useEffect(() => {
    setService([...FakeDevice]);
  }, []);
  return (
    <div>
      <Menubar />
      {/* <div style={{ display: `${visible.Device ? "flex" : "none"}` }}> */}
      <div>
        <div>
          <h1
            style={{
              position: "absolute",
              width: "200px",
              height: "36px",
              left: "224px",
              top: "104px",

              fontFamily: "Nunito",
              fontFtyle: "normal",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "36px",

              color: "#FF7506",
            }}
          >
            Quản lý dịch vụ
          </h1>
        </div>
        {/* search ket noi */}
        <div className="Group-319">
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
            Trạng thái hoạt động
          </h3>

          <select
            // value={search.hoatDong}
            // onChange={(e) =>
            //   setSearch({ ...search, trangThai: e.target.value })
            // }
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 12px",

              position: "absolute",
              width: "300px",
              height: "44px",
              top: "28px",

              border: "1.5px solid #D4D4D7",
              boxSizing: "border-box",
              borderRadius: "8px",
            }}
          >
            <option value="">Tất cả</option>
            <option value={2}>Hoạt động</option>
            <option value={false}>Ngưng hoạt động</option>
          </select>
        </div>
        {/* search thoi gian */}
        <div className="Group-320">
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
            Chọn thời gian
          </h3>

          <input
            type="date"
            // value={search.ketNoi}
            // onChange={(e) => setSearch({ ...search, ketNoi: e.target.value })}
            style={{
              left: "0",
            }}
          />
          <input
            type="date"
            // value={search.ketNoi}
            // onChange={(e) => setSearch({ ...search, ketNoi: e.target.value })}
            style={{
              right: "0",
            }}
          />
        </div>
        {/* search key */}
        <div className="Group-318">
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
          <form>
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
                width: "300px",
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
                  left: "254px",
                  top: "40px",

                  flex: "none",
                  order: "1",
                  flexGrow: "0",
                  margin: "0px 10px",
                }}
              />
            </label>
          </form>
        </div>
        {/* table */}
        <table>
          <tr>
            <th className="th-text">Mã dịch vụ</th>
            <th className="th-text">Tên dịch vụ</th>
            <th className="th-text">Mô tả</th>
            <th className="th-text">Trạng thái hoạt động</th>
            <th></th>
            <th></th>
          </tr>
          {Service?.map((item) => [
            <tr>
              <td style={{ height: "49px" }}>
                <p className="td-text">{item.Mã}</p>
              </td>
              <td>
                <p className="td-text">{item.Tên}</p>
              </td>

              <td>
                <div className="tb-content">
                  <p className="td-text">
                    {item.hoatDong == 1 ? "Hoạt động" : "Ngưng hoạt động"}
                  </p>
                </div>
              </td>
              <td>
                <div className="tb-content">
                  <div style={check(item.ketNoi)}></div>
                  <p className="td-text">
                    {item.ketNoi == 1 ? "Kết nối" : "Mất kết nối"}
                  </p>
                </div>
              </td>

              <td>
                <p
                  // onClick={() => HandleShowData(item)}
                  className="onclick-text td-text"
                >
                  Chi tiết
                </p>
              </td>
              <td>
                <p
                  // onClick={() => onHandleUpdate(item)}
                  className="onclick-text td-text"
                >
                  Cập nhật
                </p>
              </td>
            </tr>,
          ])}
        </table>
      </div>
    </div>
  );
};

export default ShowService;
