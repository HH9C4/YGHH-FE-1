import React from "react"
import Layout from "../layout/Layout"

const Landing = ({ data, onClose }) => {


  const gu = data.split(" ", 2)

  return (
    <Layout>
      <div className="w-[400px] flex flex-wrap flex-row justify-center ">
        <p className="mt-[64px] text-[24px]  text-center font-bold">
          원하는 장소가 맞으신가요?
        </p>
        <div className="bg-white mt-[24px] pt-2.5 w-[330px] h-[46px] text-[14px] font-medium text-center rounded-[8px]">
          {data}
        </div>
        <button
          className="mx-[26px] text-[14px] text-bb22 mt[12px] underline decoration-solid  w-[330px] h-[48px]  text-center"
          onClick={onClose}
        >
          재검색하기
        </button>
        <button
          onClick={() => window.location.replace(`/info/${gu[1]}`)}
          className="mx-[26px] mt-[56px]  text-[14px] w-[330px] h-[48px] rounded-[100px] 
          font-medium bg-white  shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] "
        >
          선택한 지역 정보 바로가기
        </button>
        <button
          onClick={() => window.location.replace(`/list/${gu[1]}/all/new`)}
          className="mx-[26px] mt-[12px] text-[14px] w-[330px] h-[48px] rounded-[100px] 
          font-medium bg-white  shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] "
        >
          선택한 지역 커뮤니티 바로가기
        </button>
      </div>
    </Layout>
  )
}

export default Landing
