import React, { useState, useEffect } from "react"
import { contentsApis } from "../../api/instance"
import MyItem from "./MyItem"
import length0 from "../../assets/img/length0.png"
const MyPosts = () => {
  const [posts, setPosts] = useState()
  // 마이페이지 내가 작성한 게시글 조회
  const getMyContent = async () => {
    try {
      const res = await contentsApis.getmypageAX()
      return setPosts(res.data.data)
    } catch (error) {
      return
    }
  }
  useEffect(() => {
    getMyContent()
  }, [])
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.postId}>
              <MyItem post={post} />
            </div>
          )
        })}
      {posts && posts.length === 0 ? (
        <div className="text-center mt-[102px] text-bb88 font-medium">
          <img className="w-[140px] mb-[8px] mx-auto" src={length0} />
          <p className="text-b24 ">앗!</p>
          <p className="text-b16">아직 게시글이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MyPosts
