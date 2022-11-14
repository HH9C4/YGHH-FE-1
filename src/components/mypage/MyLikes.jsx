import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Post from "../features/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyLikes } from "../../redux/modules/mySlice"
// import { useParams } from "react-router-dom"

const MyPosts = () => {
  const posts = useSelector((store) => store.my.likes)
  // console.log("my likes", posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getMyLikes())
  }, [dispatch])

  return (
    <>
      <div>My Likes</div>
      <Post posts={posts} />
    </>
  )
}

export default MyPosts

const Flex = styled.div`
  display: flex;
`
