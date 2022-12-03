import React, { useEffect } from "react"
import Slider from "react-slick"
import Layout from "../components/layout/Layout"
import walkthorugh1 from "../assets/img/walkthrough1.svg"
import walkthorugh2 from "../assets/img/walkthrough2.svg"
import walkthorugh3 from "../assets/img/walkthrough3.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const WalkThrough = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeSlide, setActiveSlide] = useState({
    activeSlide2: 0,
  })
  const nickname = localStorage.getItem("nickName")
  const navigate = useNavigate()
  function NextArrow(props) {
    const { style, onClick } = props
    const onNextPage = () => {
      onClick()
      handleNextSlide()
    }
    useEffect(() => {
      if (nickname !== null || undefined) {
        window.location.replace("/home")
      }
    }, [])
    return (
      <>
        {" "}
        {activeSlide.activeSlide2 !== 2 ? (
          <div className="relative ">
            <div
              onClick={onNextPage}
              className="h-[48px] w-[324px] absolute top-[110px]  bg-bbpurple text-center flex justify-center rounded-[90px]"
            >
              {activeSlide.activeSlide2 === 0 ? (
                <svg
                  className="absolute top-[-90px]"
                  width="40"
                  height="8"
                  viewBox="0 0 40 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#7F73FF" />
                  <circle cx="20" cy="4" r="4" fill="#BBBBBB" />
                  <circle cx="36" cy="4" r="4" fill="#BBBBBB" />
                </svg>
              ) : (
                <svg
                  className="absolute top-[-90px]"
                  width="40"
                  height="8"
                  viewBox="0 0 40 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#BBBBBB" />
                  <circle cx="20" cy="4" r="4" fill="#7F73FF" />
                  <circle cx="36" cy="4" r="4" fill="#BBBBBB" />
                </svg>
              )}
              <button
                className="text-white text-b14  font-medium leading-[17px] items-center"
                style={{ ...style }}
              >
                다음으로
              </button>
            </div>
          </div>
        ) : (
          <div className="relative ">
            <div
              className="h-[48px] w-[324px] absolute top-[110px]  
                            bg-bbpurple text-center flex justify-center rounded-[90px]"
            >
              <svg
                className="absolute top-[-90px]"
                width="40"
                height="8"
                viewBox="0 0 40 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#BBBBBB" />
                <circle cx="20" cy="4" r="4" fill="#BBBBBB" />
                <circle cx="36" cy="4" r="4" fill="#7F73FF" />
              </svg>
              <button
                onClick={() => navigate("/home")}
                className="text-white text-b14 font-medium leading-[17px] items-center"
              >
                시작하기
              </button>
            </div>
          </div>
        )}
      </>
    )
  }

  function PrevArrow(props) {
    const { style, onClick } = props
    const onPreviousPage = () => {
      onClick()
      handlePrevSlide()
    }
    return (
      <>
        {activeSlide.activeSlide2 !== 0 ? (
          <div className="max-w-[420px] mx-auto">
            <button
              className="text-b14 font-medium mt-[-20px]"
              style={{ ...style, display: "block" }}
              onClick={onPreviousPage}
            >
              이전으로
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    )
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "test-css",
    afterChange: (current) => setActiveSlide({ activeSlide2: current }),
    // afterChange: current => this.setCurrentPage(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  }

  const handlePrevSlide = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextSlide = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="bg-bbLpurple w-full min-w-[100vw] h-full min-h-[100vh] overflow-scroll font-sans">
      <div className="bg-bbLpurple pb-[96px]  max-w-[420px] h-full min-h-[100vh] mx-auto">
        <div className=" h-[46px] px-[26px] flex justify-end items-end">
          <button
            onClick={() => navigate("/home")}
            className="text-b14 font-medium"
          >
            건너뛰기
          </button>
        </div>
        <div className="w-[324px] mx-auto">
          <Slider {...settings}>
            <div className="mx-auto">
              <div className="mt-[87px]">
                <img
                  className="w-[281px] mx-auto h-[204px]"
                  alt="서울시 스팟 곳곳의 인구 밀집 정도를
                                    연령별, 성별, 시간별로 다양하게 파악해요"
                  src={walkthorugh1}
                ></img>
              </div>
              <p className="text-center pt-[36px] text-b14 font-medium">
                서울시 스팟 곳곳의 인구 밀집 정도를
                <br />
                연령별, 성별, 시간별로 다양하게 파악해요
              </p>
            </div>
            <div className="mx-auto">
              <div className="mt-[87px]">
                <img
                  className="w-[105px] mx-auto h-[210px]"
                  alt="지역별 커뮤니티를 통해
                                실시간으로 여러 소식을 주고받아요 "
                  src={walkthorugh2}
                ></img>
              </div>
              <p className="text-center mt-[36px] text-b14 font-medium">
                지역별 커뮤니티를 통해
                <br />
                실시간으로 여러 소식을 주고받아요{" "}
              </p>
            </div>
            <div className="mx-auto">
              <div className="mt-[87px]">
                <img
                  className="w-[183px] mx-auto h-[183px]"
                  alt="자주 가는 곳을 북마크해
                                쉽게 관리해요"
                  src={walkthorugh3}
                ></img>
              </div>
              <p className="text-center mt-[53px] text-b14 font-medium">
                자주 가는 곳을 북마크해
                <br />
                쉽게 관리해요
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default WalkThrough
