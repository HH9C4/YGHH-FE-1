import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
// import Alarm from "../components/mypage/Alarm"
import MyLikes from "../components/mypage/MyLikes"
import MyNotice from "../components/mypage/MyNotice"
import Mypost from "../components/mypage/Mypost"
import { __naverLogout, __kakaoDelete } from "../redux/modules/memberSlice"
import Layout from "../components/layout/Layout"
import { REACT_APP_KAKAO_REST_API_KEY } from "../api/loginKeys"

const Mypage = () => {
  const dispatch = useDispatch()
  // 마이페이지 대시보드 정보 꺼내기
  const [tab, setTab] = useState(1)
  const userImg = localStorage.getItem("profileImage")
  const userNm = localStorage.getItem("nickName")
  const userAge = localStorage.getItem("ageRange")
  const userGender = localStorage.getItem("gender")
  const gender =
    userGender === "female" ? "| 여성" : userGender === "male" ? "| 남성" : ""
  //로그아웃
  // const REST_API_KEY = "5be5552cd6fd58fe7ce5082934d4b18a"
  // const LOGOUTREDIRECT_URI = "http://localhost:3000/user/kakao/logout/callback"
  const LOGOUTREDIRECT_URI = "https://boombiboombi.vercel.app/user/kakao/logout/callback"
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${LOGOUTREDIRECT_URI}`
  const handleLogout = () => {
    if (localStorage.getItem("site") === "kakao") {
      window.location.href = KAKAO_LOGOUT_URL;
    } else {
      dispatch(__naverLogout())
    }
  }

  const deleteAccount = () => {
    dispatch(__kakaoDelete())
  }

  return (
    <Layout>
      <button onClick={deleteAccount}>카카오 탈퇴</button>
      <div className="flex items-end pt-8 ml-[25px] mr-[26px] mb-10">
        <div>
          <img
            className="w-20 h-20 object-cover rounded-full mr-6"
            src={userImg}
          />
        </div>
        <div>
          <div className="flex items-end">
            <h3 className="text-2xl text-bb22 font-bold mr-2">{userNm}</h3>
            <div className="text-xs text-bb66 mb-0.5">
              {userAge.slice(0, 2)}대 {gender}
            </div>
          </div>
          <div className="text-xs text-bb22 flex">
            <button className="flex items-center">
              프로필 수정{" "}
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
            <button className="ml-2 flex items-center" onClick={handleLogout}>
              로그아웃
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
        {tab === 1 ? (
          <>
            <ul className="flex justify-between items-center text-center text-sm text-bb22 mb-5">
              <li className="border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]">
                알림
              </li>
              <li
                onClick={() => setTab(2)}
                className=" w-full h-12 leading-[3.5]"
              >
                내 게시물
              </li>
              <li
                onClick={() => setTab(3)}
                className=" w-full h-12 leading-[3.5]"
              >
                좋아요
              </li>
            </ul>
            <MyNotice />
          </>
        ) : tab === 2 ? (
          <>
            <ul className="flex justify-between items-center text-center text-sm text-bb22 mb-5">
              <li
                onClick={() => setTab(1)}
                className="w-full h-12 leading-[3.5]"
              >
                알림
              </li>
              <li className="border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]">
                내 게시물
              </li>
              <li
                onClick={() => setTab(3)}
                className=" w-full h-12 leading-[3.5]"
              >
                좋아요
              </li>
            </ul>
            <Mypost />
          </>
        ) : (
          <>
            <ul className="flex justify-between items-center text-center text-sm  text-bb22 mb-5">
              <li
                onClick={() => setTab(1)}
                className="w-full h-12 leading-[3.5]"
              >
                알림
              </li>
              <li
                onClick={() => setTab(2)}
                className="w-full h-12 leading-[3.5]"
              >
                내 게시물
              </li>
              <li className="border-b-2 font-bold border-bbpurple w-full h-12 leading-[3.5]">
                좋아요
              </li>
            </ul>
            <MyLikes />
          </>
        )}
      </div>
    </Layout>
  )
}

export default Mypage

const Flex = styled.div`
  display: flex;
`
