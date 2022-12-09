import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SelectGuInfo from "../components/elements/SelectGuInfo"
import { contentsApis } from "../api/instance"
const Home = () => {
  const navigate = useNavigate()
  const [homeData, setHomeData] = useState()
  const getHome = async (payload) => {
    try {
      const res = await contentsApis.homeInfoAX()
      return setHomeData(res.data.data)
    } catch (error) {
      return
    }
  }

  const topSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const bottomSettings = {
    dots: true,
    dotsClass: "home",
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }
  useEffect(() => {
    getHome()
  }, [])

  const setLocation = (l) => {
    localStorage.setItem("location", l)
  }

  useEffect(() => {
    setLocation("home")
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Layout>
      <div
        key={Math.random() * 10}
        className="w-full pl-[25px] pr-[26px] pt-[32px]"
      >
        <Slider {...topSettings}>
          {homeData?.jamTopList !== undefined &&
            homeData?.jamTopList?.map((item) => {
              return (
                <div key={Math.random() * 10}>
                  <div
                    onClick={() => navigate(`/info/${item.guNm}`)}
                    className="flex justify-between items-center mb-[8px] h-[48px] px-[12px] bg-white rounded-md "
                  >
                    <div className="hover:cursor-pointer flex justify-center items-center w-full ">
                      <p className=" text-right text-[10px] font-medium text-bb22">
                        지난
                        <span className="font-bold text-bbred">
                          {item.isWeekend ? " 주말" : " 평일"}
                        </span>
                        에 가장 붐빈 지역
                      </p>
                      <div className="relative ml-[12px] h-[20px] ">
                        <div className="absolute bottom-0 w-[20px] h-[20px] ">
                          <div
                            style={{
                              backgroundColor:
                                item.ranking === 1
                                  ? "#FFD76E"
                                  : item.ranking === 2
                                  ? "#bbb"
                                  : item.ranking === 3
                                  ? "#dbab46"
                                  : "",
                            }}
                            className="absolute bottom-[3px] left-[3px] w-[14px] h-[14px] rounded-full
                       animate-ping"
                          ></div>
                          <div
                            style={{
                              backgroundColor:
                                item.ranking === 1
                                  ? "#FFBF17"
                                  : item.ranking === 2
                                  ? "#bfbfbf"
                                  : item.ranking === 3
                                  ? "#db9400"
                                  : "",
                            }}
                            className="absolute bottom-[2px] left-[2px] w-[16px] h-[16px] rounded-full
                        "
                          ></div>
                        </div>
                        <p className="hover:cursor-pointer absolute left-[-1.25px] bottom-[2px] pl-[8px] pr-[4px] text-b11 text-white  font-bold">
                          {item.ranking}
                        </p>
                      </div>
                      <a className="text-b12 text-center ml-[28px] font-bold text-bbpurple">
                        {item.areaNm}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
        <Slider {...bottomSettings}>
          {homeData?.popChangeList !== undefined &&
            homeData?.popChangeList?.map((item) => {
              return (
                <div
                  key={Math.random() * 10}
                  className="  bg-white h-[148px] rounded-md"
                >
                  <div
                    onClick={() => navigate(`/info/${item.guNm}`)}
                    className="hover:cursor-pointer flex flex-col justify-center  items-center w-full border-b-[0.5px] border-b-[#bbb] h-[67.5px]"
                  >
                    <p className="text-[14px] font-medium text-bb22">
                      최근 1시간 동안 인구가 가장 많이
                      <span className="text-bbred font-bold">
                        {String(item.plusMinus).includes("-")
                          ? " 급감한 "
                          : " 급증한 "}
                      </span>
                      지역
                    </p>
                    <p className="text-[14px] pt-[4px] font-bold text-bbpurple">
                      {item.areaNm}
                    </p>
                  </div>

                  <ul className="text-bb22  px-[24px] py-[16px] flex justify-between pt-[17px] rounded-md h-[80px] bg-white">
                    <li className="  flex flex-col justify-center items-center border-bbBB">
                      <p className="w-[101px] text-[14px] font-medium">
                        실시간 인구혼잡도
                      </p>
                      <div className="flex items-center mt-[8px]">
                        <div
                          style={{
                            backgroundColor:
                              item.areaCongestLvl === "매우 붐빔"
                                ? "#ff3535"
                                : item.areaCongestLvl === "붐빔"
                                ? "#FF8A00"
                                : item.areaCongestLvl === "보통"
                                ? "#FFD600"
                                : item.areaCongestLvl === "여유"
                                ? "#00B953"
                                : "",
                          }}
                          className="w-[20px] h-[20px] rounded-full"
                        ></div>
                        <p className="text-[18px] ml-[8px] font-semibold">
                          {item.areaCongestLvl}
                        </p>
                      </div>
                    </li>
                    <li className=" flex flex-col ml-[16px] justify-center items-center w-full  border-bbBB">
                      <p className="text-[14px]  font-medium">증감인구</p>
                      <div className="flex  items-center mt-[8px]">
                        <p className="text-[18px]  font-semibold">
                          {/* {Number(item.plusMinus) > 1000 ||
                            Number(item.plusMinus) < -1000
                            ? `${item.plusMinus.subString(0, item.plusMinus.length)}K`
                            : item.plusMinus} */}

                          {Number(item.plusMinus) >= 1000 ||
                          Number(item.plusMinus) <= -1000
                            ? `${String(item.plusMinus)?.substring(
                                0,
                                String(item.plusMinus)?.length - 3
                              )}.${String(item.plusMinus).slice(-3, -2)}K`
                            : item.plusMinus}
                        </p>
                      </div>
                    </li>
                    <li className=" flex flex-col justify-center items-center w-[50%]  border-bbBB">
                      <p className="text-[14px] font-medium">증감율</p>
                      <div className="flex text-bbred items-center mt-[8px]">
                        <div className="flex items-center">
                          <p className="text-[18px] ml-[24px] font-semibold">
                            {item.increaseRate}%
                          </p>
                          <svg
                            className={
                              item.plusMinus < 0
                                ? "trnsition-transform duration-300 rotate-180"
                                : "transition-transform duration-300 rotate-0"
                            }
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.358 8.867a.833.833 0 0 0 1.175.108L9.167 5.95v9.883a.833.833 0 0 0 1.666 0V5.95l3.634 3.025a.833.833 0 1 0 1.066-1.283l-5-4.167-.125-.075-.108-.058a.833.833 0 0 0-.6 0l-.108.058-.125.075-5 4.167a.834.834 0 0 0-.109 1.175z"
                              fill="#FF3535"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )
            })}
        </Slider>

        {/* <h1 className="pt-[64px] mx-[65px] text-[24px] text-center leading-[21px] font-bold">
        원하는 장소 직접 찾아보기
      </h1> */}
        <button
          className="mt-[24px] text-[14px] w-full h-[48px] rounded-[90px] text-white bg-gradient-to-r from-bbpink to-bbgradientp"
          onClick={() => navigate(`/address`)}
        >
          장소 검색
        </button>

        <h2 className="text-center mt-[48px] text-[24px] font-bold leading-[1.33]">
          원하는 장소가
          <br />
          어느 구인지 이미 아시나요?
        </h2>
        <div className="flex w-full">
          <div className="min-w-[270px] w-[100%] mx-auto">
            <SelectGuInfo />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home
