import React, { useEffect, useState } from "react"
import MyLikes from "../components/mypage/MyLikes"
import MyNotice from "../components/mypage/MyNotice"
import Mypost from "../components/mypage/Mypost"
import Layout from "../components/layout/Layout"
import { useNavigate } from "react-router-dom"

const Mypage = () => {
  const navigate = useNavigate()
  // 마이페이지 대시보드 정보 꺼내기
  const [tab, setTab] = useState(1)
  const userImg = localStorage.getItem("profileImage")
  const userNm = localStorage.getItem("nickName")
  const userAge = localStorage.getItem("ageRange")
  const userGender = localStorage.getItem("gender")
  const gender =
    userGender === "female" ? "| 여성" : userGender === "male" ? "| 남성" : ""

  const setLocation = (l) => {
    localStorage.setItem("location", l)
  }
  useEffect(() => {
    setLocation("my")
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
    })
  }, [])

  //겟요청할때 받아올 정보 : 성별 / 연령대
  //설정 들어가면 또 겟해서 연결된 계정 보여주고
  //

  return (
    <Layout>
      {/* <button onClick={deleteAccount}>카카오 탈퇴</button> */}
      <div className="flex items-end pt-8 ml-[25px] mr-[26px] mb-10">
        <div>
          <img
            className="border-[0.5px] border-bbBB w-20 h-20 object-cover rounded-full mr-6"
            src={userImg}
          />
        </div>
        <div>
          <div className={userNm.length >= 5 ? "relative" : "flex items-end"}>
            <h3 className="text-b24 text-bb22 font-bold mr-2">{userNm}</h3>
            <div
              className={
                userNm.length >= 5
                  ? "absolute text-b12 text-bb66 mb-0.5 left-[0] top-[36px]"
                  : "text-b12 text-bb66 mb-0.5"
              }
            >
              {userAge !== "비공개" ? `${userAge.slice(0, 2)}대` : userAge}{" "}
              {gender}
            </div>
          </div>
          <div className="text-b12 text-bb22 flex">
            <button
              onClick={() => navigate("/setting")}
              className={
                userNm.length >= 5
                  ? "ml-[72px] w-full flex items-center"
                  : "flex items-center"
              }
            >
              프로필 설정
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.833 11.083a.583.583 0 0 1-.449-.956L7.998 7l-2.52-3.132a.584.584 0 0 1 .087-.823.583.583 0 0 1 .852.088l2.817 3.5a.583.583 0 0 1 0 .74l-2.916 3.5a.583.583 0 0 1-.485.21z"
                  fill="#222"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[25px] mr-[26px] ">
        <ul className="flex justify-between items-center text-center text-sm text-bb22 mb-5">
          <li
            onClick={tab !== 1 ? () => setTab(1) : ""}
            className={
              tab === 1
                ? "border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]"
                : "hover:cursor-pointer w-full h-12 leading-[3.5]"
            }
          >
            알림
          </li>
          <li
            onClick={tab !== 2 ? () => setTab(2) : ""}
            className={
              tab === 2
                ? "border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]"
                : "hover:cursor-pointer w-full h-12 leading-[3.5]"
            }
          >
            내 게시물
          </li>
          <li
            onClick={tab !== 3 ? () => setTab(3) : ""}
            className={
              tab === 3
                ? "border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]"
                : "hover:cursor-pointer w-full h-12 leading-[3.5]"
            }
          >
            좋아요
          </li>
        </ul>
        {tab === 1 ? <MyNotice /> : tab === 2 ? <Mypost /> : <MyLikes />}
      </div>
    </Layout>
  )
}

export default Mypage
