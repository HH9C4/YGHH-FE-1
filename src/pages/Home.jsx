import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SelectInfo from "../components/features/SelectInfo"
import Layout from "../components/layout/Layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useDispatch } from "react-redux"
import { __getHome } from "../redux/modules/searchSlice"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const settings = {
    dots: true,
    dotsClass: "test-css",
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  useEffect(() => {
    dispatch(__getHome())
  }, [])

  useEffect(() => {
    localStorage.setItem("location", "home")
  }, [])

  return (
    <Layout>
      {/* <div className="w-[375px] pt-[60px]">
        <Slider>
          <div className="bg-white rounded-md">
            <div>
              <p></p>
              <a>{}</a>
            </div>
            <ul className="text-bb22 py-[16px] flex justify-between mt-[4px] rounded-md h-[80px] bg-white">
              <li className="px-[16px] flex flex-col justify-center items-center w-[50%] border-r-[0.5px] border-bbBB">
                <p className="text-[12px] font-medium">실시간 인구혼잡도</p>
                <div className="flex items-center mt-[8px]">
                  <div
                    // style={{
                    //   backgroundColor:
                    //     spot.area_congest_lvl === "매우 붐빔"
                    //       ? "#ff3535"
                    //       : spot.area_congest_lvl === "붐빔"
                    //       ? "#FF8A00"
                    //       : spot.area_congest_lvl === "보통"
                    //       ? "#FFD600"
                    //       : spot.area_congest_lvl === "여유"
                    //       ? "#00B953"
                    //       : "",
                    // }}
                    className="w-[20px] h-[20px] rounded-full"
                  ></div>
                  <p className="text-[18px] ml-[8px] font-semibold">{}</p>
                </div>
              </li>

              <li className="p-[16px] flex justify-center items-center w-[50%]">
                <div className="flex flex-col">
                  <p className="text-[12px] mb-[4px] font-medium">여성</p>
                  <p className="text-[20px] font-semibold">{}</p>
                </div>
                <div className="flex flex-col ml-[36px]">
                  <p className="text-[12px] mb-[4px] font-medium">남성</p>
                  <p className="text-[20px] font-semibold">{}</p>
                </div>
              </li>
            </ul>
          </div>
        </Slider>
      </div> */}
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
      <div className="px-6 flex w-[375px]">
        <SelectInfo />
      </div>
    </Layout>
  )
}
export default Home
