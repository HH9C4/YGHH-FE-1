import React from "react"
import { useNavigate } from "react-router-dom"

const SelectGuInfo = () => {
  const navigate = useNavigate()
  const gu = [
    ["강남구", `/list/강남구/all/new`, `/info/강남구`],
    ["강동구", `/list/강동구/all/new`, `/info/강동구`],
    ["강북구", `/list/강북구/all/new`, `/info/강북구`],
    ["강서구", `/list/강서구/all/new`, `/info/강서구`],
    ["구로구", `/list/구로구/all/new`, `/info/구로구`],
    ["금천구", `/list/금천구/all/new`, `/info/금천구`],
    ["관악구", `/list/관악구/all/new`, `/info/관악구`],
    ["광진구", `/list/광진구/all/new`, `/info/광진구`],
    ["노원구", `/list/노원구/all/new`, `/info/노원구`],
    ["도봉구", `/list/도봉구/all/new`, `/info/도봉구`],
    ["동대문구", `/list/동대문구/all/new`, `/info/동대문구`],
    ["동작구", `/list/동작구/all/new`, `/info/동작구`],
    ["마포구", `/list/마포구/all/new`, `/info/마포구`],
    ["서대문구", `/list/서대문구/all/new`, `/info/서대문구`],
    ["서초구", `/list/서초구/all/new`, `/info/서초구`],
    ["성동구", `/list/성동구/all/new`, `/info/성동구`],
    ["성북구", `/list/성북구/all/new`, `/info/성북구`],
    ["송파구", `/list/송파구/all/new`, `/info/송파구`],
    ["양천구", `/list/양천구/all/new`, `/info/양천구`],
    ["영등포구", `/list/영등포구/all/new`, `/info/영등포구`],
    ["용산구", `/list/용산구/all/new`, `/info/용산구`],
    ["은평구", `/list/은평구/all/new`, `/info/은평구`],
    ["종로구", `/list/종로구/all/new`, "/info/종로구"],
    ["중구", `/list/중구/all/new`, "/info/중구"],
    ["중랑구", `/list/중랑구/all/new`, "/info/중랑구"],
  ]
  return (
    <div className="px-auto pt-[24px] w-full">
      {gu.map(([gu, list, info]) => (
        <div className="flex flex-row flex-wrap justify-between mb-3">
          <button
            className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
            onClick={
              localStorage.getItem("location") === "list"
                ? () => navigate(list)
                : () => navigate(info)
            }
          >
            {gu}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SelectGuInfo
