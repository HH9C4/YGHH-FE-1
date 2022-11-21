import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Post from "../features/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyNotice } from "../../redux/modules/mySlice"
import { computeHeadingLevel } from "@testing-library/react"
import MyCmt from "./MyCmt"
// import { useParams } from "react-router-dom"

const Mynotice = () => {
  const cmts = useSelector((store) => store.my.cmts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getMyNotice())
  }, [dispatch])
  return (
    <>
      {cmts &&
        cmts.map((cmt) => {
          return (
            <div key={String(cmt.postId) + String(cmt.commentId)}>
              <MyCmt cmt={cmt} />
            </div>
          )
        })}
    </>
  )
}

export default Mynotice

const Flex = styled.div`
  display: flex;
`
