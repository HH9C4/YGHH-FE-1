import React from "react"
import { useNavigate } from "react-router-dom"

const SelectInfo = () => {
  const navigate = useNavigate()
  return (
    <div className="px-auto pt-[24px] w-full">
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/info/강남구`)}
        >
          강남구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/info/강동구`)}
        >
          강동구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/info/강북구`)}
        >
          강북구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/강서구`)}
        >
          강서구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/구로구`)}
        >
          구로구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/금천구`)}
        >
          금천구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/관악구`)}
        >
          관악구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/광진구`)}
        >
          광진구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/노원구`)}
        >
          노원구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/도봉구`)}
        >
          도봉구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/동대문구`)}
        >
          동대문구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/동작구`)}
        >
          동작구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/마포구`)}
        >
          마포구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/서대문구`)}
        >
          서대문구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/서초구`)}
        >
          서초구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/성동구`)}
        >
          성동구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/성북구`)}
        >
          성북구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/송파구`)}
        >
          송파구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/양천구`)}
        >
          양천구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/영등포구`)}
        >
          영등포구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/용산구`)}
        >
          용산구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/은평구`)}
        >
          은평구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/종로구`)}
        >
          종로구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/중구`)}
        >
          중구
        </button>
      </div>
      <div className="flex flex-row justify-between h-[90px]">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/info/중랑구`)}
        >
          중랑구
        </button>
      </div>
    </div>
  )
}

export default SelectInfo
