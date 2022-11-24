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
      "10대": 4000,
      "20대": 5400,
      "30대": 3460,
      "40대": 2700,
      "50대": 1800,
    },
  ]
  return (
    <div className="overflow-x-auto flex justify-center bg-white h-[128px] rounded-md mt-[12px] py-[16px]">
      <BarChart barGap={10} width={350} height={104} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          type={"category"}
          axisLine={false}
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} type={"number"} />
        <Tooltip />
        <Legend />
        <Bar dataKey="10대" fill="#9853F0" borderRadius="5px" />
        <Bar dataKey="20대" fill="#AD75F3" />
        <Bar dataKey="30대" fill="#C198F6" />
        <Bar dataKey="40대" fill="#D6BAF9" />
        <Bar dataKey="50대" fill="#EADDFC" />
      </BarChart>
    </div>
  )
}

export default BarChartContainer
