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
    <div className="overflow-x-auto">
      <LineChart
        width={730}
        height={280}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#BBBBBB" />
      </LineChart>
    </div>
  )
}

export default LineChartContainer
