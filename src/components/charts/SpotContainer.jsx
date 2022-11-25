import React from "react"
import BarChartContainer from "./BarChartContainer"
import LineChartContainer from "./LineChartContainer"

const SpotContainer = ({ spot, settings, Slider }) => {
  const hour = spot.hour

  const data = [
    {
      name: "0",
      today: hour.todayPopByHour.T0,
      last: hour.lastPopByHour.L0,
    },
    {
      name: "1",
      today: hour.todayPopByHour.T1,
      last: hour.lastPopByHour.L1,
    },
    {
      name: "2",
      today: hour.todayPopByHour.T2,
      last: hour.lastPopByHour.L2,
    },
    {
      name: "3",
      today: hour.todayPopByHour.T3,
      last: hour.lastPopByHour.L3,
    },
    {
      name: "4",
      today: hour.todayPopByHour.T4,
      last: hour.lastPopByHour.L4,
    },
    {
      name: "5",
      today: hour.todayPopByHour.T5,
      last: hour.lastPopByHour.L5,
    },
    {
      name: "6",
      today: hour.todayPopByHour.T6,
      last: hour.lastPopByHour.L6,
    },
    {
      name: "7",
      today: hour.todayPopByHour.T7,
      last: hour.lastPopByHour.L7,
    },
    {
      name: "8",
      today: hour.todayPopByHour.T8,
      last: hour.lastPopByHour.L8,
    },
    {
      name: "9",
      today: hour.todayPopByHour.T9,
      last: hour.lastPopByHour.L9,
    },
    {
      name: "10",
      today: hour.todayPopByHour.T10,
      last: hour.lastPopByHour.L10,
    },
    {
      name: "11",
      today: hour.todayPopByHour.T11,
      last: hour.lastPopByHour.L11,
    },
    {
      name: "12",
      today: hour.todayPopByHour.T12,
      last: hour.lastPopByHour.L12,
    },
    {
      name: "13",
      today: hour.todayPopByHour.T13,
      last: hour.lastPopByHour.L13,
    },
    {
      name: "14",
      today: hour.todayPopByHour.T14,
      last: hour.lastPopByHour.L14,
    },
    {
      name: "15",
      today: hour.todayPopByHour.T15,
      last: hour.lastPopByHour.L15,
    },
    {
      name: "16",
      today: hour.todayPopByHour.T16,
      last: hour.lastPopByHour.L16,
    },
    {
      name: "17",
      today: hour.todayPopByHour.T17,
      last: hour.lastPopByHour.L17,
    },
    {
      name: "18",
      today: hour.todayPopByHour.T18,
      last: hour.lastPopByHour.L18,
    },
    {
      name: "19",
      today: hour.todayPopByHour.T19,
      last: hour.lastPopByHour.L19,
    },
    {
      name: "20",
      today: hour.todayPopByHour.T20,
      last: hour.lastPopByHour.L20,
    },
    {
      name: "21",
      today: hour.todayPopByHour.T21,
      last: hour.lastPopByHour.L21,
    },
    {
      name: "22",
      today: hour.todayPopByHour.T22,
      last: hour.lastPopByHour.L22,
    },
    {
      name: "23",
      today: hour.todayPopByHour.T23,
      last: hour.lastPopByHour.L23,
    },
  ]

  return (
    <div>
      <article className="mt-[40px] last-of-type:mb-[40px] ml-[25px] mr-[26px]">
        <div className="flex items-end justify-between">
          <h2 className="font-bold text-bb22 text-[16px]">{spot.area_nm}</h2>
          <p className="font-medium text-bb66 text-[12px]">{spot.ppltn_time}</p>
        </div>

        <Slider {...settings}>
          <section className="my-[12px] h-[158px] text-bb22 rounded-md bg-white">
            <div className="flex justify-between items-center py-[24px] px-[34px] h-[94px] border-b-[0.5px] border-b-bbBB">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a1.333 1.333 0 0 0 1.333-1.333V4a1.333 1.333 0 0 0-2.666 0v2.667A1.334 1.334 0 0 0 16 8zM28 14.667h-2.667a1.333 1.333 0 0 0 0 2.666H28a1.333 1.333 0 0 0 0-2.666zM8 16a1.333 1.333 0 0 0-1.333-1.333H4a1.333 1.333 0 0 0 0 2.666h2.667A1.334 1.334 0 0 0 8 16zM8.293 6.667a1.349 1.349 0 1 0-1.853 1.96l1.92 1.853a1.334 1.334 0 0 0 .973.373 1.334 1.334 0 0 0 .96-.413 1.334 1.334 0 0 0 0-1.88l-2-1.893zM22.667 10.853c.343-.001.672-.135.92-.373l1.92-1.853a1.334 1.334 0 0 0-1.8-1.96l-1.92 1.893a1.333 1.333 0 0 0 0 1.88c.23.244.545.391.88.413zM16 24a1.334 1.334 0 0 0-1.333 1.334V28a1.333 1.333 0 0 0 2.666 0v-2.666A1.333 1.333 0 0 0 16 24zM23.64 21.52a1.334 1.334 0 0 0-1.853 1.92l1.92 1.893a1.334 1.334 0 0 0 1.88-.026 1.332 1.332 0 0 0 0-1.894L23.64 21.52zM8.36 21.52l-1.92 1.853a1.334 1.334 0 0 0 0 1.894 1.333 1.333 0 0 0 .96.4c.329.002.647-.116.893-.334l1.92-1.853a1.334 1.334 0 1 0-1.853-1.92v-.04zM16 10.667a5.333 5.333 0 1 0 0 10.665 5.333 5.333 0 0 0 0-10.665zm0 8a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334z"
                  fill="#222"
                />
              </svg>
              <div className="flex flex-col items-center">
                <p className="text-[12px] font-medium">{spot.sky_stts}</p>
                <p className="text-[20px] mt-[8px] font-semibold">
                  {spot.temp}℃
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-between w-[96px] text-[12px] font-medium">
                  <p>일 최저 기온</p>
                  <p className="font-semibold">{spot.min_temp}℃</p>
                </div>
                <div className="flex justify-between w-[96px] mt-[16px] text-[12px] font-medium">
                  <p>일 최고 기온</p>
                  <p className="font-semibold">{spot.max_temp}℃</p>
                </div>
              </div>
            </div>
            <p className="p-[24px] text-bb22 text-[12px] text-center">
              {spot.pcp_msg}
            </p>
          </section>
          <section className="my-[12px] h-[158px] text-bb22 rounded-md bg-white">
            <div className="flex justify-between items-center py-[24px] px-[34px] h-[94px] border-b-[0.5px] border-b-bbBB">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a1.333 1.333 0 0 0 1.333-1.333V4a1.333 1.333 0 0 0-2.666 0v2.667A1.334 1.334 0 0 0 16 8zM28 14.667h-2.667a1.333 1.333 0 0 0 0 2.666H28a1.333 1.333 0 0 0 0-2.666zM8 16a1.333 1.333 0 0 0-1.333-1.333H4a1.333 1.333 0 0 0 0 2.666h2.667A1.334 1.334 0 0 0 8 16zM8.293 6.667a1.349 1.349 0 1 0-1.853 1.96l1.92 1.853a1.334 1.334 0 0 0 .973.373 1.334 1.334 0 0 0 .96-.413 1.334 1.334 0 0 0 0-1.88l-2-1.893zM22.667 10.853c.343-.001.672-.135.92-.373l1.92-1.853a1.334 1.334 0 0 0-1.8-1.96l-1.92 1.893a1.333 1.333 0 0 0 0 1.88c.23.244.545.391.88.413zM16 24a1.334 1.334 0 0 0-1.333 1.334V28a1.333 1.333 0 0 0 2.666 0v-2.666A1.333 1.333 0 0 0 16 24zM23.64 21.52a1.334 1.334 0 0 0-1.853 1.92l1.92 1.893a1.334 1.334 0 0 0 1.88-.026 1.332 1.332 0 0 0 0-1.894L23.64 21.52zM8.36 21.52l-1.92 1.853a1.334 1.334 0 0 0 0 1.894 1.333 1.333 0 0 0 .96.4c.329.002.647-.116.893-.334l1.92-1.853a1.334 1.334 0 1 0-1.853-1.92v-.04zM16 10.667a5.333 5.333 0 1 0 0 10.665 5.333 5.333 0 0 0 0-10.665zm0 8a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334z"
                  fill="#222"
                />
              </svg>
              <div className="flex flex-col items-center">
                <p className="text-[12px] font-medium">미세먼지</p>
                <div className="flex">
                  <p className="text-[20px] font-semibold">{spot.pm10}</p>
                  <p className="text-[20px] ml-[8px] font-semibold">
                    {spot.pm10index}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] font-medium">초미세먼지</p>
                <div className="flex">
                  <p className="text-[20px] font-semibold">{spot.pm25}</p>
                  <p className="text-[20px] ml-[8px] font-semibold">
                    {spot.pm25index}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-[16px] py-[16px] text-bb22 text-[11px] text-center">
              {spot.air_msg}
            </p>
          </section>
        </Slider>
        <ul className="text-bb22 py-[16px] flex justify-between mt-[4px] rounded-md h-[80px] bg-white">
          <li className="px-[16px] flex flex-col justify-center items-center w-[50%] border-r-[0.5px] border-bbBB">
            <p className="text-[12px] font-medium">실시간 인구혼잡도</p>
            <div className="flex items-center mt-[8px]">
              <div
                style={{
                  backgroundColor:
                    spot.area_congest_lvl === "매우 붐빔"
                      ? "#ff3535"
                      : spot.area_congest_lvl === "붐빔"
                      ? "#FF8A00"
                      : spot.area_congest_lvl === "보통"
                      ? "#FFD600"
                      : spot.area_congest_lvl === "여유"
                      ? "#00B953"
                      : "",
                }}
                className="w-[20px] h-[20px] rounded-full"
              ></div>
              <p className="text-[18px] ml-[8px] font-semibold">
                {spot.area_congest_lvl}
              </p>
            </div>
          </li>

          <li className="p-[16px] flex justify-center items-center w-[50%]">
            <div className="flex flex-col">
              <p className="text-[12px] mb-[4px] font-medium">여성</p>
              <p className="text-[20px] font-semibold">
                {spot.female_ppltn_rate}
              </p>
            </div>
            <div className="flex flex-col ml-[36px]">
              <p className="text-[12px] mb-[4px] font-medium">남성</p>
              <p className="text-[20px] font-semibold">
                {spot.male_ppltn_rate}
              </p>
            </div>
          </li>
        </ul>

        <BarChartContainer spot={spot} />
        <LineChartContainer data={data} />
      </article>
    </div>
  )
}

export default SpotContainer
