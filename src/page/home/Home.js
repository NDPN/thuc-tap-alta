import React from "react";
import styles from "./Home.module.scss";
import fonts from "../../asset/css/Font.module.scss";
import Menubar from "../../component/menu/Menubar";
import Topbar from "../../component/topbar/Topbar";
import Chart from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";

function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.Menubar}>
        <Menubar />
      </div>
      <div className={styles.Topbar}>
        <Topbar />
      </div>
      <div className={styles.content}>
        <div className={fonts.bold_36}>Danh sách vé</div>
        <div className={styles.lineChart}>
          <Line
            data={{
              labels: [
                "29/03 - 04/04",
                "05/04 - 11/04",
                "12/01 - 18/04",
                "19/04 - 25/04",
                "26/04 - 02/05",
              ],
              datasets: [
                {
                  label: "",
                  data: [12, 19, 3, 5, 2, 3],
                  borderColor: "#FF8A48",
                  pointRadius: "0",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className={styles.total}>
          <div className={styles.medium_14}>Tổng thanh toán theo tuần</div>
          <div>
            <p className={fonts.bold_24}>
              525.145.000<span className={fonts.medium_14}> đồng</span>
            </p>
          </div>
        </div>
        <div className={styles.Doughnut}>
          <div className={styles.doughnutChart}>
            <div className={fonts.bold_18} style={{ textAlign: "center" }}>
              Gói gia đình
            </div>
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [56024, 13568],
                    backgroundColor: ["#FF8A48", "#4F75FF"],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
          <div className={styles.doughnutChart}>
            <div className={fonts.bold_18} style={{ textAlign: "center" }}>
              Gói sự kiện
            </div>
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [30256, 28302],
                    backgroundColor: ["#FF8A48", "#4F75FF"],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
