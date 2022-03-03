import React, { useEffect, useState } from "react";
import style from "./Role.module.css";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../../../components/Constant";
import { docRole } from "../../../../../components/firebase";
import Menubar from "../../../Menubar/Menubar";
import Button from "../../../../../components/Button";

const Role = () => {
  const navigate = useNavigate();
  const [Role, setRole] = useState([]);
  const lenghtData = Role.length;

  useEffect(() => {
    getData(docRole, setRole);
  }, []);

  return (
    <div>
      <Menubar />
      <Button
        on={() => {
          navigate("/AddRole", {
            state: { item: Role, lenght: lenghtData },
          });
        }}
        img={window.location.origin + "/Img/Add-square.png"}
        text="Thêm vai trò"
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
          Quản lý vai trò
        </h1>
      </div>
      {/* search từ khóa */}
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
      <table>
        <tr>
          <th className="th-text">Tên vai trò</th>
          <th className="th-text">Số người dùng</th>
          <th className="th-text">Mô tả</th>
          <th></th>
        </tr>
        {Role?.map((item) => [
          <tr key={item.ID}>
            <td style={{ height: "49px" }}>
              <p className="td-text">{item.Role}</p>
            </td>
            <td>
              <p className="td-text">...</p>
            </td>
            <td>
              <p className="td-text">{item.Desc}</p>
            </td>
            <td>
              <p
                onClick={() =>
                  navigate("/UpdRole", {
                    state: item,
                  })
                }
                className="onclick-text td-text"
              >
                Cập nhật
              </p>
            </td>
          </tr>,
        ])}
      </table>
    </div>
  );
};

export default Role;
