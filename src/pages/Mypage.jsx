import React from "react"
import Alarm from "../components/mypage/Alarm"
import MyLikes from "../components/mypage/MyLikes"
import MyPosts from "../components/mypage/Mypost"

const Mypage = () => {
  return (
    <>
      <div>Mypage</div>

      <Alarm />
      <MyPosts />
      <MyLikes />
    </>
  )
}

export default Mypage
