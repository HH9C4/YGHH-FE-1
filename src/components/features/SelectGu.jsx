import React from "react"
import { useNavigate } from "react-router-dom"

const SelectGu = () => {
  const navigate = useNavigate()
  return (
    <div className="px-auto pt-[24px] w-full">
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/list/강남구/all/new`)}
        >
          강남구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/list/강동구/all/new`)}
        >
          강동구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]  "
          onClick={() => navigate(`/list/강북구/all/new`)}
        >
          강북구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/강서구/all/new`)}
        >
          강서구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/구로구/all/new`)}
        >
          구로구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/금천구/all/new`)}
        >
          금천구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/관악구/all/new`)}
        >
          관악구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/광진구/all/new`)}
        >
          광진구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/노원구/all/new`)}
        >
          노원구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/도봉구/all/new`)}
        >
          도봉구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/동대문구/all/new`)}
        >
          동대문구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/동작구/all/new`)}
        >
          동작구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/마포구/all/new`)}
        >
          마포구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/서대문구/all/new`)}
        >
          서대문구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/서초구/all/new`)}
        >
          서초구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/성동구/all/new`)}
        >
          성동구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/성북구/all/new`)}
        >
          성북구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/송파구/all/new`)}
        >
          송파구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/양천구/all/new`)}
        >
          양천구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/영등포구/all/new`)}
        >
          영등포구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/용산구/all/new`)}
        >
          용산구
        </button>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/은평구/all/new`)}
        >
          은평구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/종로구/all/new`)}
        >
          종로구
        </button>
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/중구/all/new`)}
        >
          중구
        </button>
      </div>
      <div className="flex flex-row justify-between h-[90px]">
        <button
          className=" w-[100px] h-[40px] rounded-[80px] text-[14px] leading-[21px] text-center bg-white shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
          onClick={() => navigate(`/list/중랑구/all/new`)}
        >
          중랑구
        </button>
      </div>
    </div>
  )
}

export default SelectGu
