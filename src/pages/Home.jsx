import React from "react"
import { useNavigate } from "react-router-dom"
import SelectGu from "../components/features/SelectGu"
const Home = () => {
  const navigate = useNavigate()

  //1
  return (
    <div className="w-[375px] ">
      {/* <div className='mt-[64px] ml-[65px] mr-[65px] '>
        <h1 className='text-[24px] leading-[21px] font-[Pretendard] font-bold'>원하는 장소 직접 찾아보기</h1>
      </div> */}
      <h1 className="mt-[64px] mx-[65px] text-[24px] text-center leading-[21px] font-bold">
        원하는 장소 직접 찾아보기
      </h1>
      <button
        className="mx-[26px] mt-[24px] text-[14px] border-2 w-[330px] h-[48px] rounded-[90px] bg-[#ff6fb5]"
        onClick={() => navigate(`/address`)}
      >
        장소 검색
      </button>

      <h2 className="text-center w-[258px] mx-[64px] mt-[48px] text-[24px] font-bold leading-[1.33]">
        원하는 장소가
        <br />
        어느 구인지 이미 아시나요?
      </h2>

      <SelectGu />
    </div>
  )
}

export default Home
