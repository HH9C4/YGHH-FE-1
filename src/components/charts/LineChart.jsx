import React from "react"
import { Chart } from "tw-elements"

const LineChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"]
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#f6efff",
        borderColor: "#9853F0",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  }

  const configLineChart = {
    type: "line",
    data,
    options: {},
  }

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  )
  return (
    <>
      <div class="shadow-lg rounded-lg overflow-hidden">
        <div class="py-3 px-5 bg-gray-50">Line chart</div>
        <canvas class="p-10" id="chartLine"></canvas>
      </div>
    </>
  )
}

export default LineChart
