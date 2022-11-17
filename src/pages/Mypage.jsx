import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Tabs } from "flowbite-react"
// import Alarm from "../components/mypage/Alarm"
import MyLikes from "../components/mypage/MyLikes"
import MyNotice from "../components/mypage/MyNotice"
import Mypost from "../components/mypage/Mypost"
import { __naverLogout } from "../redux/modules/memberSlice"

const Mypage = () => {
  const dispatch = useDispatch()
  // 마이페이지 대시보드 정보 꺼내기
  const userImg = localStorage.getItem("profileImage")
  const userNm = localStorage.getItem("nickName")
  const userAge = localStorage.getItem("ageRange")
  const userGender = localStorage.getItem("gender")
  const gender =
    userGender === "female" ? "| 여성" : userGender === "male" ? "| 남성" : ""
  //로그아웃
  const REST_API_KEY = "5be5552cd6fd58fe7ce5082934d4b18a"
  const LOGOUTREDIRECT_URI = "http://localhost:3000/user/kakao/logout/callback"
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUTREDIRECT_URI}`
  const handleLogout = () => {
    if (localStorage.getItem("site") === "kakao") {
      window.location.href = KAKAO_LOGOUT_URL
    } else {
      dispatch(__naverLogout())
    }
    // 탭 구현 //
  }

  return (
    <>
      <h1>마이페이지</h1>

      <Flex>
        <div>
          <img
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
            src={userImg}
          />
        </div>
        <div>
          <Flex>
            <h3>{userNm}</h3>
            <div>
              {userAge.slice(0, 2)}대 {gender}
            </div>
          </Flex>
          <Flex>
            <button>프로필 수정</button>
            <button onClick={handleLogout}>로그아웃</button>
          </Flex>
        </div>
      </Flex>
      <Tabs.Group aria-label="Pills" style="pills">
        <Tabs.Item className="bg-gray-700" active={true} title="내 알림">
          <MyNotice />
        </Tabs.Item>
        <Tabs.Item title="내 글">
          <Mypost />
        </Tabs.Item>
        <Tabs.Item title="내 좋아요">
          <MyLikes />
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}

export default Mypage

const Flex = styled.div`
  display: flex;
`
// <div id="myTabContent">
//       <div
//         class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
//         id="notice"
//         role="tabpanel"
//         aria-labelledby="-tab"
//       >
//         <MyNotice />
//       </div>
//       <div
//         class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
//         id="post"
//         role="tabpanel"
//         aria-labelledby="post-tab"
//       >
//         <MyLikes />
//       </div>
//       <div
//         class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
//         id="like"
//         role="tabpanel"
//         aria-labelledby="like-tab"
//       >
//         <Mypost />
//       </div>
//     </div>
