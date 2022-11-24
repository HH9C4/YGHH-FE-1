import React from "react"
import Layout from "../layout/Layout"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const LineChartContainer = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 1800,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",

      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      pv: 3908,
      amt: 2000,
    },
  ]
  return (
    <div className="overflow-x-auto flex justify-center items-center bg-white rounded-md h-[184px] mt-[12px] py-[16px]">
      <LineChart width={400} height={160} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#9853f0" />
        <Line type="monotone" dataKey="pv" stroke="#888888" />
      </LineChart>
    </div>
  )
}

export default LineChartContainer
