import React from "react";
import "./css index/Desc.css";

const Desc = (props) => {
  return (
    <div>
      <form className="Desc">
        <h1 className="Thong-tin-thiet-bi">Thông tin thiết bị</h1>
        <div className="Group-625230" style={{ top: "66px", left: "24px" }}>
          <p className="lable-text-desc">
            Mã thiết bị: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "66px", left: "568px" }}>
          <p className="lable-text-desc">
            Loại thiết bị: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "24px" }}>
          <p className="lable-text-desc">
            Tên thiết bị: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "568px" }}>
          <p className="lable-text-desc">
            Tên đăng nhập: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "24px" }}>
          <p className="lable-text-desc">
            Địa chỉ IP: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "568px" }}>
          <p className="lable-text-desc">
            Mật khẩu: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "186px", left: "24px" }}>
          <p className="lable-text-desc">Dịch vụ sử dụng:</p>
          <p className="text-desc" style={{left: "0px", top: "32px", margin:"4px"}}>test</p>
        </div>
      </form>
    </div>
  );
};

export default Desc;
