import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import Post from "../features/Post"
import { useNavigate, useParams } from "react-router-dom"
import { __getMyNotice } from "../../redux/modules/mySlice"
import { computeHeadingLevel } from "@testing-library/react"
// import { useParams } from "react-router-dom"

const Mynotice = () => {
  const cmts = useSelector((store) => store.my.cmts)
  console.log("my notice", cmts)
  const dispatch = useDispatch()
  const [tab, setTab] = useState(false)

  const onTab = () => {
    setTab(!tab)
  }

  useEffect(() => {
    dispatch(__getMyNotice())
  }, [dispatch])
  return (
    <>
      <div>My Notice</div>
      {cmts &&
        cmts.map((cmt) => {
          return (
            <>
              {/* <div>{cmt.commentId}</div> */}
              <div
                key="cmt.commentId"
                onClick={onTab}
                style={{ display: tab ? "flex" : "block" }}
              >
                <div
                  style={{
                    backgroundColor: "#eee",
                    borderRadius: "10px",
                    width: "500px",
                    height: "80px",
                    margin: "10px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      color: "#999",
                      fontSize: "0.8rem",
                      margin: "0 0 10px 0",
                    }}
                  >
                    {cmt.content}에 새 댓글이 달렸습니다.
                  </div>
                  <div>
                    {cmt.accountName} | {cmt.comment}
                  </div>
                </div>
                <button style={{ display: tab ? "block" : "none" }}>
                  확인
                </button>
              </div>
            </>
          )
        })}
    </>
  )
}

export default Mynotice

const Flex = styled.div`
  display: flex;
`
