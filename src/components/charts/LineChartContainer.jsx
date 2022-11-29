import React, { useState } from "react"
import Layout from "../layout/Layout"
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeriesCanvas,
} from "react-vis"

import { useSelector } from "react-redux"

const LineChartContainer = ({ today, last }) => {
  // const before = useSelector((state) => state.search.before)
  // const now = useSelector((state) => state.search.now)
  // console.log(before, now, "데이터를 보자")
  const axisStyle = {
    ticks: {
      fontSize: "14px",
      color: "#333",
    },
    title: {
      fontSize: "16px",
      color: "#333",
    },
  }
  return (
    <div className="overflow-x-auto flex justify-center items-center bg-white rounded-md h-[184px] mt-[12px] py-[16px]">
      <XYPlot width={280} height={100}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis
          type="literal"
          Range={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]}
          style={{
            text: {
              fontSize: "11px",
              fill: "#888",
              fontWeight: 400,
            },
            strokeLinejoin: "round",
          }}
        />
        <YAxis
          style={{
            text: {
              fontSize: "11px",
              fill: "#888",
              fontWeight: 400,
            },
            strokeLinejoin: "round",
          }}
        />
        <LineSeriesCanvas color="#9853f0" data={today} />
        <LineSeriesCanvas color="#888" data={last} />
      </XYPlot>
      {/* <LineChart width={400} height={180} data={data}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          minTickGap={1}
          allowDataOverflow={false}
          width={100}
          type="number"
          interval="preserveStartEnd"
          domain={[0, "dataMax + dataMin"]}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={24} />
        <Line
          type="monotone"
          dot={false}
          name="오늘"
          dataKey="today"
          stroke="#9853f0"
        />
        <Line
          type="monotone"
          dot={false}
          name="지난주"
          dataKey="last"
          stroke="#888888"
        />
      </LineChart> */}
    </div>
  )
}

export default LineChartContainer
