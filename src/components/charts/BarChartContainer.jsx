import React from "react"

import Chart from "chart.js/auto"
import { Bar } from "react-chartjs-2"

const BarChartContainer = ({ spot }) => {
  const data = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    datasets: [
      {
        type: "bar",
        label: "연령대별 인구혼잡도 통계",
        backgroundColor: "#7F73FF",
        data: [
          { x: "10대", y: spot.ppltn_rate10 },
          { x: "20대", y: spot.ppltn_rate20 },
          { x: "30대", y: spot.ppltn_rate30 },
          { x: "40대", y: spot.ppltn_rate40 },
          { x: "50대", y: spot.ppltn_rate50 },
        ],

        options: {
          legend: {
            display: false,
          },
        },
      },
    ],
  } //

  return (
    <div className="overflow-x-auto flex justify-center bg-white h-[128px] rounded-md mt-[12px] py-[12px]">
      <Bar type="line" data={data} />
    </div>
  )
}

export default BarChartContainer
