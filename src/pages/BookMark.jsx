import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { contentsApis } from "../api/instance"
import Layout from "../components/layout/Layout"
import length0 from "../assets/img/length0.png"
import { useNavigate } from "react-router-dom"
import { setLocation } from "../redux/modules/memberSlice"
const BookMark = () => {
  //페이지 안에서 전부 해결
  const [bookmarkData, setBookmarkData] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const bookmarkData = useSelector((state) => state.contents.bookmarks)

  //북마크 조회
  const returnBookmark = async (payload) => {
    try {
      const res = await contentsApis.returnBookMarkAX(payload)
      return setBookmarkData(res.data.data)
    } catch (error) {
      return
    }
  }

  //북마크 페이지 비활성화
  const deactivateBookmarkPage = async (payload) => {
    try {
      const res = await contentsApis.bookMarkOffAX(payload)
      return setBookmarkData(
        bookmarkData.filter((item) => item.gu !== res.data.data.gu)
      )
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    returnBookmark()
    dispatch(setLocation("book"))
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  const bookMarkOff = (gu) => {
    deactivateBookmarkPage(gu)
  }
  return (
    <Layout>
      <div className="ml-[25px] mr-[26px] pt-[32px]  ">
        <p className=" text-xl font-bold mb-[12px]">나의 북마크</p>
        <div className="px-auto w-full">
          <div className="flex flex-wrap gap-x-[12px] gap-y-[12px]">
            {bookmarkData !== undefined && bookmarkData.length !== 0 ? (
              bookmarkData.map((item) => {
                return (
                  <div
                    key={item.gu}
                    className="w-[48%] h-[160px] bg-white rounded-lg text-bb22"
                  >
                    <div className=" h-[63.5px] border-b-[1px] border-b-bbBB flex flex-row pl-6 mr-1 items-center">
                      <p className="text-base font-medium ">
                        {item.gu !== "중구"
                          ? item.gu.substring(0, item.gu.indexOf("구"))
                          : item.gu}
                        붐비
                      </p>
                      <button onClick={() => bookMarkOff(item.gu)}>
                        <svg
                          className="active:animate-ping"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.99997 21C5.82818 20.9995 5.65943 20.9547 5.50997 20.87C5.3555 20.7832 5.22688 20.6569 5.13727 20.504C5.04766 20.3511 5.00027 20.1772 4.99997 20V5.33C4.98645 4.73032 5.2098 4.14946 5.6216 3.71332C6.03341 3.27718 6.6005 3.02089 7.19997 3H16.8C17.3994 3.02089 17.9665 3.27718 18.3783 3.71332C18.7901 4.14946 19.0135 4.73032 19 5.33V20C18.9989 20.1745 18.9522 20.3457 18.8645 20.4966C18.7768 20.6475 18.6511 20.7727 18.5 20.86C18.3479 20.9478 18.1755 20.994 18 20.994C17.8244 20.994 17.652 20.9478 17.5 20.86L11.83 17.65L6.49997 20.85C6.34952 20.9434 6.17698 20.9951 5.99997 21Z"
                            fill="#FFB800"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="h-[96px] flex-row pl-6 text-sm justify-items-center">
                      <div
                        onClick={() => {
                          navigate(`/info/${item.gu}`)
                        }}
                        className="hover:cursor-pointer w-full pr-6 flex justify-between items-center"
                      >
                        <p className="h-[48px] flex items-center">정보</p>
                        <svg
                          className=""
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.851445 11.9985C0.652853 11.9988 0.460393 11.9292 0.307477 11.8017C0.221413 11.7299 0.150271 11.6418 0.0981246 11.5423C0.0459785 11.4428 0.0138536 11.3339 0.0035897 11.2219C-0.00667418 11.1098 0.00512484 10.9969 0.0383107 10.8895C0.0714965 10.7821 0.125416 10.6823 0.196984 10.5958L4.00476 6.01173L0.332976 1.41906C0.262375 1.33158 0.209651 1.23092 0.177836 1.12286C0.146021 1.01481 0.135741 0.901501 0.147589 0.789439C0.159437 0.677378 0.193177 0.568777 0.246871 0.469879C0.300566 0.370982 0.373156 0.283737 0.460468 0.213159C0.548409 0.135301 0.651394 0.0765731 0.76296 0.0406621C0.874526 0.00475112 0.992266 -0.00756759 1.10879 0.00447846C1.22531 0.0165245 1.3381 0.0526755 1.44008 0.110663C1.54206 0.16865 1.63102 0.247221 1.70139 0.341446L5.80665 5.47292C5.93166 5.62596 6 5.81791 6 6.01601C6 6.2141 5.93166 6.40606 5.80665 6.55909L1.5569 11.6906C1.47164 11.7941 1.36333 11.8759 1.24075 11.9294C1.11818 11.9829 0.984807 12.0065 0.851445 11.9985Z"
                            fill="#222222"
                          />
                        </svg>
                      </div>
                      <div
                        onClick={() => {
                          navigate(`/list/${item.gu}/all/new`)
                        }}
                        className="hover:cursor-pointer flex w-full pr-6 justify-between items-center"
                      >
                        <p className="h-[48px] flex items-center">커뮤니티</p>
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.851445 11.9985C0.652853 11.9988 0.460393 11.9292 0.307477 11.8017C0.221413 11.7299 0.150271 11.6418 0.0981246 11.5423C0.0459785 11.4428 0.0138536 11.3339 0.0035897 11.2219C-0.00667418 11.1098 0.00512484 10.9969 0.0383107 10.8895C0.0714965 10.7821 0.125416 10.6823 0.196984 10.5958L4.00476 6.01173L0.332976 1.41906C0.262375 1.33158 0.209651 1.23092 0.177836 1.12286C0.146021 1.01481 0.135741 0.901501 0.147589 0.789439C0.159437 0.677378 0.193177 0.568777 0.246871 0.469879C0.300566 0.370982 0.373156 0.283737 0.460468 0.213159C0.548409 0.135301 0.651394 0.0765731 0.76296 0.0406621C0.874526 0.00475112 0.992266 -0.00756759 1.10879 0.00447846C1.22531 0.0165245 1.3381 0.0526755 1.44008 0.110663C1.54206 0.16865 1.63102 0.247221 1.70139 0.341446L5.80665 5.47292C5.93166 5.62596 6 5.81791 6 6.01601C6 6.2141 5.93166 6.40606 5.80665 6.55909L1.5569 11.6906C1.47164 11.7941 1.36333 11.8759 1.24075 11.9294C1.11818 11.9829 0.984807 12.0065 0.851445 11.9985Z"
                            fill="#222222"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="w-full text-bb88 font-medium text-center pt-[148px]">
                <img className="w-[96px] mb-[8px] mx-auto" src={length0} />
                <p className="text-b24 leading-[29px]">저런!</p>
                <p className="text-b16 mt-[4px]">북마크한 지역이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookMark
