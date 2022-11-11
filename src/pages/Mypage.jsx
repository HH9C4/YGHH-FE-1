import React from "react"
// import Alarm from "../components/mypage/Alarm"
import MyLikes from "../components/mypage/MyLikes"
import MyNotice from "../components/mypage/MyNotice"
import Mypost from "../components/mypage/Mypost"

const Mypage = () => {
  return (
    <>
      <div>Mypage</div>

      <MyNotice />
      <Mypost />
      <MyLikes />
    </>
  )
}

export default Mypage
