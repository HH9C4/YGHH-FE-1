import React from "react"
import { useNavigate } from "react-router-dom"
import SelectInfo from "../components/features/SelectInfo"
import Layout from "../components/layout/Layout"
const Home = () => {
  const navigate = useNavigate()

  //1
  return (
    <Layout>
      <div className="w-[375px] ">
        <h1 className="pt-[64px] mx-[65px] text-[24px] text-center leading-[21px] font-bold">
          원하는 장소 직접 찾아보기
        </h1>
        <button
          className="mx-[26px] mt-[24px] text-[14px] w-[330px] h-[48px] rounded-[90px] text-white bg-gradient-to-r from-bbpink to-bbgradientp"
          onClick={() => navigate(`/address`)}
        >
          장소 검색
        </button>

        <h2 className="text-center w-[258px] mx-[64px] mt-[48px] text-[24px] font-bold leading-[1.33]">
          원하는 장소가
          <br />
          어느 구인지 이미 아시나요?
        </h2>
        <div className="px-6">
          <SelectInfo />
        </div>
      </div>
    </Layout>
  )
}
export default Home
