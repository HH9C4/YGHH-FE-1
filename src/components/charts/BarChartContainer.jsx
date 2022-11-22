import React from "react"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"

const BarChartContainer = () => {
  const data = [
    {
      name: "연령대별 인구통계",
      "10대": 4000,
      "20대": 5400,
      "30대": 3460,
      "40대": 2700,
      "50대": 1800,
    },
  ]
  return (
    <div className="overflow-x-auto">
      <BarChart
        barGap={10}
        width={730}
        height={250}
        data={data}
        layout={"vertical"}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type={"number"} />
        <YAxis
          dataKey="name"
          type={"category"}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="10대" fill="#9853F0" />
        <Bar dataKey="20대" fill="#AD75F3" />
        <Bar dataKey="30대" fill="#C198F6" />
        <Bar dataKey="40대" fill="#D6BAF9" />
        <Bar dataKey="50대" fill="#EADDFC" />
      </BarChart>
    </div>
  )
}

export default BarChartContainer
