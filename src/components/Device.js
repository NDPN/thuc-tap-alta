import React, { useState } from "react";
import "./css index/Device.css";
import { data } from "./firebase";
import Menubar from "./Menubar";
import Addcomponent from "./Addcomponent";
import Adddevice from "./AddDevice";

const Device = () => {
  const [fake, setFake] = useState({
    Device: [
      {
        Mã: "KIO_01",
        Tên: "Kiosk",
        IP: 123,
        hoatDong: false,
        ketNoi: false,
        Service: "abc",
      },
      {
        Mã: "KIO_02",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_03",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_04",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_05",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: true,
        ketNoi: true,
        Service: "bnm",
      },
      {
        Mã: "KIO_06",
        Tên: "Kiosk",
        IP: 456,
        hoatDong: false,
        ketNoi: false,
        Service: "bnm",
      },
    ],
  });

  const onHandleAdd = (newData) => {
    const { input } = newData;
    setFake({
      Device: [...fake.Device, input],
    });
  };
  const [visible, setvisible] = useState({
    Device: true,
    Add: false,
  });

  const onChange = () => {
    setvisible({
      Device: false,
      Add: true,
    });
  };
  const closeChange = () => {
    setvisible({
      Device: true,
      Add: false,
    });
  };

  const check = (params) => {
    if (params == false) {
      return {
        backgroundColor: "#EC3740",
        height: "18px",
        width: "18px",
        borderRadius: "50%",
      };
    } else {
      return {
        backgroundColor: "#34CD26",
        height: "18px",
        width: "18px",
        borderRadius: "50%",
      };
    }
  };

  return (
    <div>
      <Menubar />
      <Addcomponent on={onChange} />
      <Adddevice
        visible={visible.Add}
        close={closeChange}
        input={fake.input}
        newData={(newData) => onHandleAdd(newData)}
      />
      <div style={{ display: `${visible.Device ? "flex" : "none"}` }}>
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
            Danh sách thiết bị
          </h1>
        </div>
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
            <option>Tất cả</option>
            <option>Hoạt động</option>
            <option>Ngưng hoạt động</option>
          </select>
        </div>
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
            Trạng thái kết nối
          </h3>

          <select
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
            <option>Tất cả</option>
            <option>Kết nối</option>
            <option>Mất kết nối</option>
          </select>
        </div>
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
        <table>
          <tr>
            <th className="th-text">Mã thiết bị</th>
            <th className="th-text">Tên thiết bị</th>
            <th className="th-text">Địa chỉ IP</th>
            <th className="th-text">Trạng thái hoạt động</th>
            <th className="th-text" vv>
              Trạng thái kết nối
            </th>
            <th className="th-text">Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
          {fake.Device?.map((item) => [
            <tr>
              <td>
                <p className="td-text">{item.Mã}</p>
              </td>
              <td>
                <p className="td-text">{item.Tên}</p>
              </td>
              <td>
                <p className="td-text">{item.IP}</p>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 8px",
                    width: "122px",
                    height: "21px",
                  }}
                >
                  <div style={check(item.hoatDong)}></div>
                  <p className="td-text">{item.hoatDong ? "true" : "false"}</p>
                </div>
              </td>
              <td className="td-text">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 8px",
                    width: "122px",
                    height: "21px",
                  }}
                >
                  <div style={check(item.ketNoi)}></div>
                  <p className="td-text">{item.ketNoi ? "true" : "false"}</p>
                </div>
              </td>
              <td>
                <p className="td-text">{item.Service}</p>
              </td>
              <td>
                <p
                  className="td-text"
                  style={{
                    textDecorationLine: "underline",
                    color: "#4277FF",
                    cursor: "pointer",
                  }}
                >
                  Chi tiết
                </p>
              </td>
              <td>
                <p
                  className="td-text"
                  style={{
                    textDecorationLine: "underline",
                    color: "#4277FF",
                    cursor: "pointer",
                  }}
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

export default Device;
