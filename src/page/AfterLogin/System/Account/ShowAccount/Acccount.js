import React, { useState, useEffect } from "react";
import style from "./Account.module.scss";
import Menubar from "../../../Menubar/Menubar";
import Button from "../../../../../components/Button";
import { useNavigate } from "react-router-dom";
import { getData, checkAct } from "../../../../../components/Constant";
import { docUser } from "../../../../../components/firebase";

const Account = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState([]);

  useEffect(() => {
    getData(docUser, setAccount);
  }, []);

  // function
  const renderAccount = (item) => {
    let xhml = null;
    xhml = (
      <tr key={item.id}>
        <td>
          <p>{item.user}</p>
        </td>
        <td>
          <p>{item.name}</p>
        </td>
        <td>
          <p>{item.phone}</p>
        </td>
        <td>
          <p>{item.email}</p>
        </td>
        <td>
          <p>{item.role}</p>
        </td>
        <td className={style.status}>
          <div style={checkAct(item.status)} />
          <p>{item.status == 1 ? "Hoạt động" : "Ngừng hoạt động"}</p>
        </td>
        <td>
          <p
            className={style.onClickText}
            onClick={() => navigate("/UpdAccount", { state: item })}
          >
            Cập nhật
          </p>
        </td>
      </tr>
    );
    return xhml;
  };

  return (
    <div>
      <Menubar />
      <Button
        on={() => {
          navigate("/AddAccount");
        }}
        img={window.location.origin + "/Img/Add-square.png"}
        text="Thêm tài khoản"
        top="244px"
      />
      <div className={style.Title}>Danh sách tài khoản</div>
      {/* search Role */}
      <div className={style.searchRole}>
        <p>Tên vai trò</p>
        <select>
          <option>Tất cả</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>
      {/* seacrh Key */}
      <div className={style.searchKey}>
        <p>Từ khóa</p>
        <input placeholder="Nhập từ khóa"/>
        <label>
          <img src={window.location.origin + "/Img/fi-search.png"} alt="..." />
        </label>
      </div>
      {/* table account */}
      <table>
        <tr>
          <th className={style.thText}>
            <p>Tên đăng nhập</p>
          </th>
          <th className={style.thText}>
            <p>Họ tên</p>
          </th>
          <th className={style.thText}>
            <p>Số điện thoại</p>
          </th>
          <th className={style.thText} style={{ width: "23%" }}>
            <p>Email</p>
          </th>
          <th className={style.thText}>
            <p>Vai trò</p>
          </th>
          <th className={style.thText} style={{ width: "18%" }}>
            <p>Trạng thái hoạt động</p>
          </th>
          <th></th>
        </tr>
        {account.map((item) => {
          return renderAccount(item);
        })}
      </table>
    </div>
  );
};

export default Account;
