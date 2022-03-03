import React, { useState } from "react";
import style from "./AddRole.module.scss";
import Menubar from "../../../Menubar/Menubar";
import { db } from "../../../../../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddRole = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    Role: "",
    Desc: "",
  });

  const handleAddRole = async () => {
    await setDoc(doc(db, "Role", input.Role), input);
  };

  return (
    <div>
      <div>
        <Menubar />
        <div className={style.Title}>Danh sách vai trò</div>
        <form className={style.formAddRole}>
          <div className={style.titleText}>Thông tin vai trò</div>
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
            onClick={() => {
              navigate("/Role");
            }}
            style={{ background: "#fff2e7" }}
          >
            <span style={{ color: "#FF9138" }}>Hủy bỏ</span>
          </button>
          <button
            onClick={() => {
              handleAddRole();
              navigate("/Role");
            }}
            style={{ background: "#FF9138" }}
          >
            <span style={{ color: "white" }}>Thêm</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRole;
