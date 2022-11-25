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

const BarChartContainer = ({ spot }) => {
  const data = [
    {
      "10대": spot.ppltn_rate10,
      "20대": spot.ppltn_rate20,
      "30대": spot.ppltn_rate30,
      "40대": spot.ppltn_rate40,
      "50대": spot.ppltn_rate50,
    },
  ]
  const RoundBar = (props) => {
    const getPath = (props) =>
      `M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4V${spot.ppltn_rate40}H0V4Z`

    return (
      <path
        d={getPath()}
        width={props.width}
        height={props.height}
        stroke="none"
        // fill={fill}
      />
    )
  }
  return (
    <div className="overflow-x-auto flex justify-center bg-white h-[128px] rounded-md mt-[12px] py-[32px]">
      <BarChart
        margin={{ top: 15, right: 10, left: 0, bottom: -20 }}
        barGap={10}
        width={350}
        height={100}
        data={data}
      >
        <CartesianGrid
          vertical={false}
          horizontal={false}
          strokeDasharray="3 3"
        />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} type={"number"} />
        <Tooltip style={{ fontSize: "12px" }} />
        <Legend
          viewBox={{ width: "300px", height: "20px" }}
          verticalAlign="bottom"
          height={24}
          offset={0}
          iconSize={10}
        />
        <Bar
          dataKey="10대"
          label={{ position: "top", fontSize: "12px" }}
          fill="#9853F0"
        />
        <Bar
          dataKey="20대"
          label={{ position: "top", fontSize: "12px" }}
          fill="#9853F0"
        />
        <Bar
          dataKey="30대"
          label={{ position: "top", fontSize: "12px" }}
          fill="#9853F0"
        />
        <Bar
          dataKey="40대"
          label={{ position: "top", fontSize: "12px" }}
          fill="#9853F0"
        />
        <Bar
          dataKey="50대"
          label={{ position: "top", fontSize: "12px" }}
          fill="#9853F0"
        />
      </BarChart>
    </div>
  )
}

export default BarChartContainer
