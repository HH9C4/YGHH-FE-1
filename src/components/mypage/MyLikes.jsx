import React, { useEffect, useState } from "react"

import MyItem from "./MyItem"
import { contentsApis } from "../../api/instance"
import length0 from "../../assets/img/length0.png"
const MyPosts = () => {
  const [posts, setPosts] = useState()
  // 마이페이지 내가 좋아요한 게시글 조회
  const getMyLikes = async () => {
    try {
      const res = await contentsApis.mypageLikedAX()
      return setPosts(res.data.data)
    } catch (error) {
      return
    }
  }
  useEffect(() => {
    getMyLikes()
  }, [])

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <MyItem post={post} />
        })}
      {posts && posts.length === 0 ? (
        <div className="text-center mt-[102px] text-bb88 font-medium">
          <img className="w-[140px] mb-[8px] mx-auto" src={length0} />
          <p className="text-b24 ">앗!</p>
          <p className="text-b16">아직 좋아요한 게시글이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MyPosts
