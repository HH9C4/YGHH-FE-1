import React, { useState } from "react"
import BarChartContainer from "./BarChartContainer"
import LineChartContainer from "./LineChartContainer"

const SpotContainer = ({ spot, settings, Slider }) => {
  const [select, setSelect] = useState(false)
  const hour = spot.hour
  const onSelect = () => {
    setSelect(!select)
  }
  return (
    <>
      <article
        className={
          select
            ? "first-of-type:rounded-t-md last-of-type:rounded-b-md ml-[25px] mr-[26px] bg-white border-[0.5px] border-bbpurple"
            : "first-of-type:rounded-t-md last-of-type:rounded-b-md ml-[25px] mr-[26px] bg-white"
        }
      >
        <button
          onClick={onSelect}
          className={
            select
              ? "w-full pl-[24px] pr-[29px] flex items-center  text-white bg-gradient-to-r from-bbpink to-bbgradientp justify-between h-[48px]"
              : "w-full pl-[24px] pr-[29px] flex items-center rounded-md text-bb22 bg-white justify-between h-[48px] "
          }
        >
          <h2 className="font-semibold text-b14">{spot.area_nm}</h2>

          <svg
            className="trnsition-transform"
            transform={select ? "rotate(180)" : "rotate(0)"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C11.7664 16.0005 11.5399 15.9191 11.36 15.77L5.36003 10.77C5.15581 10.6003 5.02739 10.3564 5.00301 10.0919C4.97863 9.8275 5.06029 9.56422 5.23003 9.36C5.39977 9.15578 5.64368 9.02736 5.90811 9.00298C6.17253 8.9786 6.43581 9.06026 6.64003 9.23L12 13.71L17.36 9.39C17.4623 9.30694 17.58 9.2449 17.7064 9.20747C17.8327 9.17004 17.9652 9.15795 18.0962 9.17189C18.2272 9.18582 18.3542 9.22552 18.4699 9.2887C18.5855 9.35187 18.6875 9.43727 18.77 9.54C18.8616 9.64282 18.931 9.76345 18.9738 9.89432C19.0166 10.0252 19.0319 10.1635 19.0187 10.3006C19.0056 10.4376 18.9643 10.5705 18.8974 10.6909C18.8305 10.8112 18.7395 10.9165 18.63 11L12.63 15.83C12.4449 15.9555 12.2231 16.0154 12 16Z"
              fill={select ? "#fff" : "#231F20"}
            />
          </svg>
        </button>
        <div className="" style={{ display: select ? "block" : "none" }}>
          <div>
            <p className="flex justify-end font-medium pt-[16px] pr-[24px] text-bb66 text-[12px]">
              {spot.ppltn_time}
            </p>
            <Slider {...settings}>
              <section className="text-bb22">
                <div className="flex justify-between items-center py-[24px] px-[24px] h-[72px]">
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
                <p className="px-[24px] py-[12px] text-bb22 text-b12 ">
                  {spot.pcp_msg}
                </p>
              </section>
              <section className=" text-bb22 ">
                <div className="flex justify-between items-center py-[24px] px-[24px] h-[72px]">
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
                <p className="px-[24px] py-[12px] text-bb22 text-b12 ">
                  {spot.air_msg}
                </p>
              </section>
            </Slider>
          </div>
          <ul className="text-bb22 py-[16px] flex justify-between mt-[4px] h-[80px] border-t-[0.5px] border-bbBB">
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
          <hr className="border-[0.5px] border-t-[0px] border-bbBB" />
          <LineChartContainer hour={hour} />
        </div>
      </article>
      <hr className="last-of-type:hidden border-[0.5px] border-t-0 ml-[25px] mr-[26px] border-bbBB" />
    </>
  )
}

export default SpotContainer
