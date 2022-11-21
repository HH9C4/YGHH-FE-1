import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Post from "../features/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyContent } from "../../redux/modules/mySlice"
// import { useParams } from "react-router-dom"

const MyPosts = () => {
  const posts = useSelector((store) => store.my.contents)
  // console.log("my posts", posts)
  const dispatch = useDispatch()
  //   const gu = useParams()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(__getMyContent())
  }, [dispatch])
  return (
    <>
      <Post posts={posts} />
    </>
  )
}

export default MyPosts

const Flex = styled.div`
  display: flex;
`
