import React from "react"

import Chart from "chart.js/auto"
import { Bar } from "react-chartjs-2"

const BarChartContainer = ({ spot }) => {
  const data = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    datasets: [
      {
        type: "bar",
        label: "연령대별 인구 비율",
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        backgroundColor: "#7F73FF",
        data: [
          { x: "10대", y: spot.ppltn_rate10 },
          { x: "20대", y: spot.ppltn_rate20 },
          { x: "30대", y: spot.ppltn_rate30 },
          { x: "40대", y: spot.ppltn_rate40 },
          { x: "50대", y: spot.ppltn_rate50 },
        ],
      },
    ],
  }
  const options = {
    conerRadius: 50,
    legend: {
      display: false,
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    scales: {
      // Y축
      yAxes: [
        {
          ticks: {
            // 간격 설정
            fontColor: "#ffffff",
            fontSize: 13,
          },
          grid: {
            // grid line 설정
            display: false,
            drawBorder: false,
            color: "#bbb",
          },
        },
      ],
      // X축
      xAxes: [
        {
          // bar 너비 조정
          categoryPercentage: 0,
          maxBarThickness: 0,
          ticks: {
            fontColor: "#bbb",
            fontSize: 10,
          },
          grid: {
            display: false,
          },
        },
      ],
    },
  }
  return (
    <div className="overflow-x-auto flex justify-center bg-white h-[128px] rounded-md mt-[12px] py-[12px]">
      <Bar type="bar" data={data} option={options} />
    </div>
  )
}

export default BarChartContainer
