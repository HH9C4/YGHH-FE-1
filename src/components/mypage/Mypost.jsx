import React, { useRef, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Post from "../list/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyContent } from "../../redux/modules/mySlice"
import MyItem from "./MyItem"
import length0 from "../../assets/img/length0.png"
const MyPosts = () => {
  const posts = useSelector((store) => store.my.contents)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(__getMyContent())
  }, [dispatch])
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
          <img className="w-[96px] mx-auto" src={length0} />
          <p className="text-b24 mt-[8px]">저런!</p>
          <p className="text-b16">아직 게시글이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MyPosts
