import React from "react"
import styled from "styled-components"
// import Alarm from "../components/mypage/Alarm"
import MyLikes from "../components/mypage/MyLikes"
import MyNotice from "../components/mypage/MyNotice"
import Mypost from "../components/mypage/Mypost"

const Mypage = () => {
  const userImg = localStorage.getItem("profileImage")
  const userNm = localStorage.getItem("nickName")
  const userAge = localStorage.getItem("ageRange")
  const userGender = localStorage.getItem("gender")
  const gender =
    userGender === "female" ? "| 여성" : userGender === "male" ? "| 남성" : ""
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
            <button>로그아웃</button>
          </Flex>
        </div>
      </Flex>
      <MyNotice />
      <Mypost />
      <MyLikes />
    </>
  )
}

export default Mypage

const Flex = styled.div`
  display: flex;
`
