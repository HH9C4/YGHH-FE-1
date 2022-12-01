import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { __getMyLikes } from "../../redux/modules/mySlice"
import MyItem from "./MyItem"

const MyPosts = () => {
  const posts = useSelector((store) => store.my.likes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getMyLikes())
  }, [dispatch])

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <MyItem post={post} />
        })}
      {posts && posts.length === 0 ? (
        <div className="text-center mt-[102px] text-bb88 font-medium">
          <p className="text-b24 ">저런!</p>
          <p className="text-b16">아직 좋아요한 게시글이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MyPosts
