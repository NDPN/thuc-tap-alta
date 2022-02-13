import React, { useState, useEffect } from "react";
import "./Device.css";
import Menubar from "../../Menubar/Menubar";
import Addcomponent from "../../../../components/Button";
import AddDevice from "../AddDevice/AddDevice";
import Desc from "../DescDevice/Desc";
import UpdateDevice from "../UpdateDevice/UpdateDevice";
import { FakeDevice } from "../../../../components/FakeData";
import { check } from "../../../../components/Contant";

const Device = () => {
  const [tdStyle, settdStyle] = useState({
    display: "-webkit-box",
    height: "21px",
  });

  const [fake, setFake] = useState({
    Device: [
      {
        Mã: String,
        Tên: String,
        IP: String,
        hoatDong: false,
        ketNoi: false,
        Service: String,
      },
    ],
    getData: [
      {
        Mã: String,
        Tên: String,
        IP: String,
        hoatDong: false,
        ketNoi: false,
        Service: String,
      },
    ],
  });
  const [search, setSearch] = useState({
    hoatDong: "",
    ketNoi: "",
    Mã: "",
  });
  const [visible, setvisible] = useState({
    Device: true,
    Add: false,
    Desc: false,
    Upd: false,
  });

  useEffect(() => {
    setFake({
      Device: [...FakeDevice],
    });

    const searchData = fake?.Device.filter((item) => {
      return item.hoatDong === search?.hoatDong;
    });
    if (search?.hoatDong) {
      setFake({
        Device: [...searchData],
      });
    }
  }, [search]);
  // function

  const checkItem = (item) => {
    if (item.length > 20) {
      return (
        <>
          <p style={tdStyle} className="td-text service">
            {item}
          </p>
          <p
            onClick={() =>
              settdStyle({ ...tdStyle, display: "flex", height: "auto" })
            }
            className="onclick-text td-text"
          >
            Xem thêm
          </p>
        </>
      );
    } else {
      return <p className="td-text service">{item}</p>;
    }
  };
  const onHandleAdd = (newData) => {
    const { input } = newData;
    setFake({
      Device: [...fake.Device, input],
    });
  };
  const onChange = () => {
    setvisible({
      Device: false,
      Add: true,
    });
  };
  const onHandleUpdate = (props) => {
    setFake({
      getData: [props],
    });
    setvisible({
      Device: false,
      Upd: true,
    });
  };
  const closeUpdate = () => {
    setvisible({
      Device: true,
      Upd: false,
    });
  };
  const closeChange = () => {
    setvisible({
      Device: true,
      Add: false,
    });
  };
  const HandleShowData = (props) => {
    setFake({
      getData: [props],
    });
    setvisible({
      Device: false,
      Desc: true,
    });
  };
  //
  return (
    <div>
      <Menubar />
      <Addcomponent on={onChange} />
      <AddDevice
        visible={visible.Add}
        close={closeChange}
        input={fake.input}
        newData={(newData) => onHandleAdd(newData)}
      />
      <Desc
        visible={visible.Desc}
        close={closeUpdate}
        showData={fake.getData}
      />
      <UpdateDevice
        visible={visible.Upd}
        close={closeUpdate}
        getData={fake.getData}
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
            value={search.hoatDong}
            onChange={(e) => setSearch({ ...search, hoatDong: e.target.value })}
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
            <option value="1">Hoạt động</option>
            <option value="2">Ngưng hoạt động</option>
          </select>
        </div>
        {/* search trang thai */}
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
            value={search.ketNoi}
            onChange={(e) => setSearch({ ...search, ketNoi: e.target.value })}
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
            <option value="1">Kết nối</option>
            <option value="2">Mất kết nối</option>
          </select>
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
              onChange={(e) => setSearch({ ...search, Mã: e.target.value })}
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
            <th className="th-text">Mã thiết bị</th>
            <th className="th-text">Tên thiết bị</th>
            <th className="th-text">Địa chỉ IP</th>
            <th className="th-text">Trạng thái hoạt động</th>
            <th className="th-text">Trạng thái kết nối</th>
            <th className="th-text">Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
          {fake.Device?.map((item) => [
            <tr>
              <td style={{ height: "49px" }}>
                <p className="td-text">{item.Mã}</p>
              </td>
              <td>
                <p className="td-text">{item.Tên}</p>
              </td>
              <td>
                <p className="td-text">{item.IP}</p>
              </td>
              <td>
                <div className="tb-content">
                  <div style={check(item.hoatDong)}></div>
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
              <td style={{ width: "268px" }}>{checkItem(item.Service)}</td>
              <td>
                <p
                  onClick={() => HandleShowData(item)}
                  className="onclick-text td-text"
                >
                  Chi tiết
                </p>
              </td>
              <td>
                <p
                  onClick={() => onHandleUpdate(item)}
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

export default Device;
