import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const SelectGuInfo = () => {
  const location = localStorage.getItem("location")

  const bookmarkList = localStorage.getItem("bookmarkList")
  const [bookmarked, setBookmarked] = useState({
    gu: bookmarkList ? bookmarkList.replace(`"`, "").split(",") : "",
  })

  const navigate = useNavigate()
  const guArr = [
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
      <div className="flex flex-row flex-wrap gap-[12px] justify-between mb-3">
        {guArr.map(([gu, list, info]) => (
          <button
            key={gu}
            className="hover:bg-bbpurple hover:text-white active:bg-bbpurple active:text-white relative w-[30%] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
            onClick={
              location === "list" ? () => navigate(list) : () => navigate(info)
            }
          >
            {gu}
            {bookmarked.gu && bookmarked.gu.includes(gu) ? (
              <svg
                className="absolute left-[10px] top-[-2px]"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99997 21C5.82818 20.9995 5.65943 20.9547 5.50997 20.87C5.3555 20.7832 5.22688 20.6569 5.13727 20.504C5.04766 20.3511 5.00027 20.1772 4.99997 20V5.33C4.98645 4.73032 5.2098 4.14946 5.6216 3.71332C6.03341 3.27718 6.6005 3.02089 7.19997 3H16.8C17.3994 3.02089 17.9665 3.27718 18.3783 3.71332C18.7901 4.14946 19.0135 4.73032 19 5.33V20C18.9989 20.1745 18.9522 20.3457 18.8645 20.4966C18.7768 20.6475 18.6511 20.7727 18.5 20.86C18.3479 20.9478 18.1755 20.994 18 20.994C17.8244 20.994 17.652 20.9478 17.5 20.86L11.83 17.65L6.49997 20.85C6.34952 20.9434 6.17698 20.9951 5.99997 21Z"
                  fill="#FFB800"
                />
              </svg>
            ) : (
              ""
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectGuInfo
