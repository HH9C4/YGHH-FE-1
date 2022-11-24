import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import SpotContainer from "../components/charts/SpotContainer"
import Layout from "../components/layout/Layout"
import { __getInfo } from "../redux/modules/searchSlice"
import SelectGu from "../components/features/SelectGu"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PopulationInfo = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const gu = params.gu
  const guInfo = useSelector((state) => state.search.info)
  console.log(guInfo)
  const [select, setSelect] = useState(false)
  const onSelect = () => {
    setSelect(!select)
  }
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
    dispatch(__getInfo(gu))
  }, [gu])

  return (
    <div
      style={{
        overflow: select ? "hidden" : "auto",
        height: select ? "300px" : "",
      }}
    >
      <Layout>
        <div className="pt-8 ml-[25px] mr-[26px]">
          <div>
            <div className=" font-normal text-sm">지금</div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex">
                <h1 className="font-bold text-xl">
                  {params.gu !== "중구"
                    ? params.gu.substring(0, params.gu.indexOf("구"))
                    : params.gu}
                  붐비
                </h1>
              </div>

              <div onClick={onSelect}>
                {select ? (
                  <>
                    <svg
                      transform="rotate(180)"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16C11.7664 16.0005 11.5399 15.9191 11.36 15.77L5.36003 10.77C5.15581 10.6003 5.02739 10.3564 5.00301 10.0919C4.97863 9.8275 5.06029 9.56422 5.23003 9.36C5.39977 9.15578 5.64368 9.02736 5.90811 9.00298C6.17253 8.9786 6.43581 9.06026 6.64003 9.23L12 13.71L17.36 9.39C17.4623 9.30694 17.58 9.2449 17.7064 9.20747C17.8327 9.17004 17.9652 9.15795 18.0962 9.17189C18.2272 9.18582 18.3542 9.22552 18.4699 9.2887C18.5855 9.35187 18.6875 9.43727 18.77 9.54C18.8616 9.64282 18.931 9.76345 18.9738 9.89432C19.0166 10.0252 19.0319 10.1635 19.0187 10.3006C19.0056 10.4376 18.9643 10.5705 18.8974 10.6909C18.8305 10.8112 18.7395 10.9165 18.63 11L12.63 15.83C12.4449 15.9555 12.2231 16.0154 12 16Z"
                        fill="#231F20"
                      />
                    </svg>
                    <div className="z-20 w-full h-full px-auto fixed top-[130px] left-0 bg-bbLpurple">
                      <div className="mt-3 w-[90%] max-w-[375px] mx-auto">
                        <SelectGu />
                      </div>
                    </div>
                  </>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C11.7664 16.0005 11.5399 15.9191 11.36 15.77L5.36003 10.77C5.15581 10.6003 5.02739 10.3564 5.00301 10.0919C4.97863 9.8275 5.06029 9.56422 5.23003 9.36C5.39977 9.15578 5.64368 9.02736 5.90811 9.00298C6.17253 8.9786 6.43581 9.06026 6.64003 9.23L12 13.71L17.36 9.39C17.4623 9.30694 17.58 9.2449 17.7064 9.20747C17.8327 9.17004 17.9652 9.15795 18.0962 9.17189C18.2272 9.18582 18.3542 9.22552 18.4699 9.2887C18.5855 9.35187 18.6875 9.43727 18.77 9.54C18.8616 9.64282 18.931 9.76345 18.9738 9.89432C19.0166 10.0252 19.0319 10.1635 19.0187 10.3006C19.0056 10.4376 18.9643 10.5705 18.8974 10.6909C18.8305 10.8112 18.7395 10.9165 18.63 11L12.63 15.83C12.4449 15.9555 12.2231 16.0154 12 16Z"
                      fill="#231F20"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {guInfo && (
          <>
            <ul className="text-bb22 flex justify-between p-[16px] mt-[32px] rounded-md ml-[25px] mr-[26px] h-[84px] bg-white">
              <li className="text-[14px] font-bold">코로나</li>
              <li className="flex flex-col items-center">
                <p className="text-[12px] font-medium">오늘 신규확진자 수</p>
                <p className="text-[20px] font-semibold">{guInfo.gu_added}</p>
              </li>
              <li className="flex flex-col items-center">
                <p className="text-[12px] font-medium">
                  {guInfo.gu_nm} 누적확진자 수
                </p>
                <p className="text-[20px] font-semibold">
                  {Number(guInfo.gu_confirmed) > 1000
                    ? `${guInfo.gu_confirmed.substring(
                        0,
                        guInfo.gu_confirmed.length - 3
                      )}K`
                    : guInfo.gu_confirmed}
                </p>
              </li>
            </ul>
            {guInfo.spotInfoList.map((spot) => {
              return (
                <SpotContainer
                  Slider={Slider}
                  settings={settings}
                  spot={spot}
                />
              )
            })}
          </>
        )}
      </Layout>
    </div>
  )
}

export default PopulationInfo
