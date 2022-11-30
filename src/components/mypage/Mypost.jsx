import React, { useRef, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Post from "../list/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyContent } from "../../redux/modules/mySlice"
import MyItem from "./MyItem"
// import { useParams } from "react-router-dom"

const MyPosts = () => {
  const posts = useSelector((store) => store.my.contents)
  // console.log("my posts", posts)
  const dispatch = useDispatch()
  //   const gu = useParams()
  const navigate = useNavigate()
  const params = useParams()

  console.log(posts, posts.length)

  useEffect(() => {
    dispatch(__getMyContent())
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
          <p className="text-b16">아직 게시글이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MyPosts
