import React, { useState } from "react"
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
import { useSelector } from "react-redux"

const LineChartContainer = ({ data }) => {
  // const before = useSelector((state) => state.search.before)
  // const now = useSelector((state) => state.search.now)
  // console.log(before, now, "데이터를 보자")

  return (
    <div className="overflow-x-auto flex justify-center items-center bg-white rounded-md h-[184px] mt-[12px] py-[16px]">
      <LineChart width={400} height={180} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="today" stroke="#9853f0" />
        <Line type="monotone" dataKey="last" stroke="#888888" />
      </LineChart>
    </div>
  )
}

export default LineChartContainer
