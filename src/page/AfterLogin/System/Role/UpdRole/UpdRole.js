import React, { useEffect, useState } from "react";
import style from "./UpdRole.module.scss";
import Menubar from "../../../Menubar/Menubar";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../../components/firebase";
import { useLocation, useNavigate } from "react-router-dom";

const UpdRole = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    Role: "",
    Desc: "",
  });
console.log(data)

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setData(state);
  }, []);

  const handleDelRole = async () => {
    await deleteDoc(doc(db, "Role", data.Role));
  }
  
  const handleUpdRole = async () => {
    await setDoc(doc(db, "Role", input.Role), input);
  };

  return (
    <div>
      <div>
        <Menubar />
        <div
          style={{
            position: "absolute",

            left: "224px",
            top: "72px",
          }}
        >
          <h1 className="Title-1">Danh sách vai trò</h1>
        </div>
        <form className={style.formAddRole}>
          <p className={style.titleText}>Thông tin vai trò</p>
          <div className={style.left}>
            <div className={style.inputNameRole}>
              <p className={style.titleInput} style={{ fontWeight: "600" }}>
                Tên vai trò <span style={{ color: "red" }}>*</span>
              </p>
              <input
                onChange={(e) => {
                  setInput({ ...input, Role: e.target.value });
                }}
                placeholder="Nhập tên vai trò"
                className={style.setNameRole}
              ></input>
            </div>
            <div className={style.inputDescRole}>
              <p className={style.titleInput} style={{ fontWeight: "600" }}>
                Mô tả:
              </p>
              <textarea
                onChange={(e) => {
                  setInput({ ...input, Desc: e.target.value });
                }}
                placeholder="Nhập mô tả"
                className={style.setDescRole}
              ></textarea>
            </div>
            <p className={style.notice}>
              <span style={{ color: "red" }}>*</span> Là trường thông tin bắt
              buộc
            </p>
          </div>
          <div className={style.right}>
            <div className={style.decent}>
              <p className={style.decentTitle}>
                Phân quyền chức năng <span style={{ color: "red" }}>*</span>
              </p>
              <div className={style.selDecent}>
                <div className={style.decent}>
                  <p className={style.group}>Nhóm chức năng A</p>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Tất cả</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng x</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng y</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng z</lable>
                  </div>
                </div>
                <div className={style.decent}>
                  <p className={style.group}>Nhóm chức năng A</p>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Tất cả</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng x</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng y</lable>
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" />
                    <lable>Chức năng z</lable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className={style.twoBtn}>
          <button
            onClick={() => navigate("/Role")}
            style={{ background: "#fff2e7" }}
          >
            <span style={{ color: "#FF9138" }}>Hủy bỏ</span>
          </button>
          <button
            onClick={() => {
              handleDelRole();
              handleUpdRole();
              navigate("/Role");
            }}
            style={{ background: "#FF9138" }}
          >
            <span style={{ color: "white" }}>Cập nhật</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdRole;
