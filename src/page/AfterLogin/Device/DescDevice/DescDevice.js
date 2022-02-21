import React, { useEffect, useState } from "react";
import Menubar from "../../Menubar/Menubar";
import Button from "../../../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./DescDevice.css";

const Desc = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    if (!location.state) return navigate(-1);
    const { state } = location;
    setData(state)
  }, []);

  return (
    <div>
      <Menubar />
      <Button
        on={() => navigate("/UpdateDevice", { state: data })}
        text="Cập nhật thiết bị"
        img={window.location.origin + "/Img/Edit-square.png"}
      />
      <form className="Desc-device">
        <h1 className="Thong-tin-thiet-bi">Thông tin thiết bị</h1>
        <div className="Group-625230" style={{ top: "66px", left: "24px" }}>
          <p className="lable-text-desc">
            Mã thiết bị: <span className="text-desc">{data?.ID}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "66px", left: "568px" }}>
          <p className="lable-text-desc">
            Loại thiết bị: <span className="text-desc">{data?.name}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "24px" }}>
          <p className="lable-text-desc">
            Tên thiết bị: <span className="text-desc">{data?.name}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "106px", left: "568px" }}>
          <p className="lable-text-desc">
            Tên đăng nhập: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "24px" }}>
          <p className="lable-text-desc">
            Địa chỉ IP: <span className="text-desc">{data?.IP}</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "146px", left: "568px" }}>
          <p className="lable-text-desc">
            Mật khẩu: <span className="text-desc">test</span>
          </p>
        </div>
        <div className="Group-625230" style={{ top: "186px", left: "24px" }}>
          <p className="lable-text-desc">Dịch vụ sử dụng:</p>
          <p
            className="text-desc"
            style={{ left: "0px", top: "32px", margin: "4px" }}
          >
            {data?.service}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Desc;
