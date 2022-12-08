import React, { useState } from "react"

import { Line } from "react-chartjs-2"

import { useSelector } from "react-redux"

const LineChartContainer = ({ hour }) => {
  const today = [
    {
      x: "0",
      y: hour.todayPopByHour.T0,
    },
    {
      x: "1",
      y: hour.todayPopByHour.T1,
    },
    {
      x: "2",
      y: hour.todayPopByHour.T2,
    },
    {
      x: "3",
      y: hour.todayPopByHour.T3,
    },
    {
      x: "4",
      y: hour.todayPopByHour.T4,
    },
    {
      x: "5",
      y: hour.todayPopByHour.T5,
    },
    {
      x: "6",
      y: hour.todayPopByHour.T6,
    },
    {
      x: "7",
      y: hour.todayPopByHour.T7,
    },
    {
      x: "8",
      y: hour.todayPopByHour.T8,
    },
    {
      x: "9",
      y: hour.todayPopByHour.T9,
    },
    {
      x: "10",
      y: hour.todayPopByHour.T10,
    },
    {
      x: "11",
      y: hour.todayPopByHour.T11,
    },
    {
      x: "12",
      y: hour.todayPopByHour.T12,
    },
    {
      x: "13",
      y: hour.todayPopByHour.T13,
    },
    {
      x: "14",
      y: hour.todayPopByHour.T14,
    },
    {
      x: "15",
      y: hour.todayPopByHour.T15,
    },
    {
      x: "16",
      y: hour.todayPopByHour.T16,
    },
    {
      x: "17",
      y: hour.todayPopByHour.T17,
    },
    {
      x: "18",
      y: hour.todayPopByHour.T18,
    },
    {
      x: "19",
      y: hour.todayPopByHour.T19,
    },
    {
      x: "20",
      y: hour.todayPopByHour.T20,
    },
    {
      x: "21",
      y: hour.todayPopByHour.T21,
    },
    {
      x: "22",
      y: hour.todayPopByHour.T22,
    },
    {
      x: "23",
      y: hour.todayPopByHour.T23,
    },
  ]

  const last = [
    {
      x: "0",
      y: hour.lastPopByHour.L0,
    },
    {
      x: "1",
      y: hour.lastPopByHour.L1,
    },
    {
      x: "2",
      y: hour.lastPopByHour.L2,
    },
    {
      x: "3",
      y: hour.lastPopByHour.L3,
    },
    {
      x: "4",
      y: hour.lastPopByHour.L4,
    },
    {
      x: "5",
      y: hour.lastPopByHour.L5,
    },
    {
      x: "6",
      y: hour.lastPopByHour.L6,
    },
    {
      x: "7",
      y: hour.lastPopByHour.L7,
    },
    {
      x: "8",
      y: hour.lastPopByHour.L8,
    },
    {
      x: "9",
      y: hour.lastPopByHour.L9,
    },
    {
      x: "10",
      y: hour.lastPopByHour.L10,
    },
    {
      x: "11",
      y: hour.lastPopByHour.L11,
    },
    {
      x: "12",
      y: hour.lastPopByHour.L12,
    },
    {
      x: "13",
      y: hour.lastPopByHour.L13,
    },
    {
      x: "14",
      y: hour.lastPopByHour.L14,
    },
    {
      x: "15",
      y: hour.lastPopByHour.L15,
    },
    {
      x: "16",
      y: hour.lastPopByHour.L16,
    },
    {
      x: "17",
      y: hour.lastPopByHour.L17,
    },
    {
      x: "18",
      y: hour.lastPopByHour.L18,
    },
    {
      x: "19",
      y: hour.lastPopByHour.L19,
    },
    {
      x: "20",
      y: hour.lastPopByHour.L20,
    },
    {
      x: "21",
      y: hour.lastPopByHour.L21,
    },
    {
      x: "22",
      y: hour.lastPopByHour.L22,
    },
    {
      x: "23",
      y: hour.lastPopByHour.L23,
    },
  ]

  const data = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ],

    datasets: [
      {
        type: "line",
        label: "오늘",
        backgroundColor: "#7F73FF",
        borderColor: "#7F73FF",
        borderWidth: "1",
        pointRadius: 0,
        pointHoverRadius: 5,
        data: today,
        xAixsID: "x",
        yAxisID: "y",
      },
      {
        type: "line",
        label: "지난주",
        backgroundColor: "#888888",
        borderColor: "#888888",
        borderWidth: "1",
        pointRadius: 0,
        pointHoverRadius: 1,
        data: last,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        lables: {
          font: {
            size: 9,
            family: "Pretendard",
            lineHeight: "1.2",
          },
        },
        position: "top",
      },
      title: {
        display: true,
        text: "지역별 인구밀집도 변동추이",
      },
    },
    elements: {
      line: {
        borderCapStyle: "round",
      },
    },
    scales: {
      y: [
        {
          title: {
            text: "인구밀도",
            font: {
              size: 10,
            },
            display: true,
          },
          grid: {
            display: false,
          },
          axis: "y",
          ticks: {
            minRotation: 0,
          },
        },
      ],
      x: [
        {
          title: {
            text: "시",
            font: {
              size: 10,
            },
            display: true,
          },
          grid: {
            display: false,
          },
          axis: "x",
          ticks: {
            minRotation: 0,
          },
        },
      ],
    },
  }

  return (
    <div className="overflow-x-auto flex justify-center items-center rounded-md h-[184px] mt-[-10px] py-[16px]">
      <Line type="line" data={data} options={options} />
    </div>
  )
}

export default LineChartContainer
