import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import Button from "../../../../components/Button";
import { docNumber } from "../../../../components/firebase";
import {
  getData,
  checkService,
  checkStatus,
} from "../../../../components/Constant";
import "./Number.css";

const Number = () => {
  const navigate = useNavigate();

  const [Number, setNumber] = useState([]);
  const [page, setpage] = useState([1]);
  const onetPagination = Number.slice(0, 8);

  // Date
  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const day = d.getDay();
  const nextDay = day + 1;
  const month = d.getMonth();
  const year = d.getFullYear();

  // function

  // const amountOfPage = () => {
  //   let i = page.length;
  //   const x = 9;
  //   while (x * i > Number.length) {
  //     i ++;
  //   }
  //   console.log(i);
  // };
  // amountOfPage();

  //
  useEffect(() => {
    getData(docNumber, setNumber);
  }, []);

  return (
    <div>
      <Menubar />
      <Button
        on={() => {
          navigate("/AddNumber", { state: Number });
        }}
        img={window.location.origin + "/Img/Add-square.png"}
        text="Cấp số mới"
        top="244px"
      />
      <div>
        <h1
          style={{
            position: "absolute",
            width: "200px",
            height: "36px",
            left: "224px",
            top: "72px",

            fontFamily: "Nunito",
            fontFtyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "36px",

            color: "#FF7506",
          }}
        >
          Quản lý cấp số
        </h1>
      </div>
      {/* search dịch vụ */}
      <div className="Group-317" style={{ left: "224px" }}>
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
          Tên dịch vụ
        </h3>
        <select
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 12px",

            position: "absolute",
            width: "154px",
            height: "44px",
            top: "28px",

            border: "1.5px solid #D4D4D7",
            boxSizing: "border-box",
            borderRadius: "8px",
          }}
        >
          <option value="">Tất cả</option>
          <option value="1">Khám sản - phụ khoa</option>
          <option value="2">Khám răng hàm mặt</option>
          <option value="3">Khám tai mũi họng</option>
        </select>
      </div>
      {/* search tình trạng */}
      <div className="Group-317" style={{ left: "402px" }}>
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
          Tình trạng
        </h3>
        <select
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 12px",

            position: "absolute",
            width: "154px",
            height: "44px",
            top: "28px",

            border: "1.5px solid #D4D4D7",
            boxSizing: "border-box",
            borderRadius: "8px",
          }}
        >
          <option value="">Tất cả</option>
          <option value="1">Đang chờ</option>
          <option value="2">Đã sử dụng</option>
          <option value="3">Bỏ qua</option>
        </select>
      </div>
      {/* search nguồn cấp */}
      <div className="Group-317" style={{ left: "580px" }}>
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
          Nguồn cấp
        </h3>
        <select
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 12px",

            position: "absolute",
            width: "154px",
            height: "44px",
            top: "28px",

            border: "1.5px solid #D4D4D7",
            boxSizing: "border-box",
            borderRadius: "8px",
          }}
        >
          <option value="">Tất cả</option>
          <option value="1">Kiosk</option>
          <option value="2">Hệ thống</option>
        </select>
      </div>
      {/* search thời gian */}
      <div className="Group-317" style={{ width: "320px", left: "758px" }}>
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
          style={{
            left: "0",
          }}
        />
        <input
          type="date"
          style={{
            right: "0",
          }}
        />
      </div>
      {/* seacrh từ khóa */}
      <div className="Group-320" style={{ left: "1096px" }}>
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
              width: "240px",
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
                left: "194px",
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
      {/* Number talbe */}
      <table>
        <tr>
          <th className="th-text">STT</th>
          <th className="th-text">Tên khách hàng</th>
          <th className="th-text">Tên dịch vụ</th>
          <th className="th-text">Thời gian cấp</th>
          <th className="th-text">Hạn sử dụng</th>
          <th className="th-text">Trạng thái</th>
          <th className="th-text">Nguồn cấp</th>
          <th></th>
        </tr>
        {onetPagination.map((item) => [
          <tr key={item.ID}>
            <td style={{ height: "49px" }}>
              <p className="td-text">{item.number}</p>
            </td>
            <td>
              <p className="td-text">{item.guest}</p>
            </td>
            <td>{checkService(item.service)}</td>
            <td>
              <p className="td-text">
                {hour + ":" + minute + " - " + day + "/" + month + "/" + year}
              </p>
            </td>
            <td>
              <p className="td-text">
                {hour +
                  ":" +
                  minute +
                  " - " +
                  nextDay +
                  "/" +
                  month +
                  "/" +
                  year}
              </p>
            </td>
            <td>{checkStatus(item.status)}</td>
            <td>
              <p className="td-text">{item.source}</p>
            </td>
            <td>
              <p
                onClick={() => navigate("/DescNumber", { state: item })}
                className="onclick-text td-text"
              >
                Chi tiết
              </p>
            </td>
          </tr>,
        ])}
      </table>
    </div>
  );
};

export default Number;
