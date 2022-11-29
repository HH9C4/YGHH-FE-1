import React from "react"
// import {
//   BarChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Bar,
// } from "react-vis"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
} from "react-vis"

const BarChartContainer = ({ spot }) => {
  const data = [
    // {
    //   "10대": spot.ppltn_rate10,
    //   "20대": spot.ppltn_rate20,
    //   "30대": spot.ppltn_rate30,
    //   "40대": spot.ppltn_rate40,
    //   "50대": spot.ppltn_rate50,
    // },
    { x: "10대", y: spot.ppltn_rate10 },
    { x: "20대", y: spot.ppltn_rate20 },
    { x: "30대", y: spot.ppltn_rate30 },
    { x: "40대", y: spot.ppltn_rate40 },
    { x: "50대", y: spot.ppltn_rate50 },
  ]
  const axisStyle = {
    ticks: {
      fontSize: "12px",
      color: "#222",
    },
    title: {
      fontSize: "12px",
      color: "#222",
    },
  }
  const labelData = data.map((d, idx) => ({
    x: d.x,
    y: Math.max(data[idx].y),
  }))
  return (
    <div className="overflow-x-auto flex justify-center bg-white h-[128px] rounded-md mt-[12px] py-[12px]">
      <XYPlot xType="ordinal" width={300} height={100} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis style={axisStyle} />
        <YAxis style={axisStyle} />
        <VerticalBarSeries color="#9853f0" data={data} />
        {/* <LabelSeries data={labelData} getLabel={(d) => d.x} /> */}
      </XYPlot>
      {/* <BarChart
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
      </BarChart> */}
    </div>
  )
}

export default BarChartContainer
