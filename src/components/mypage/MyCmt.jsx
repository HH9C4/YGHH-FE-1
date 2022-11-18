import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __postMyNotice } from "../../redux/modules/mySlice"

const MyCmt = (cmt) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [tab, setTab] = useState(false)

  const onTab = () => {
    setTab(!tab)
  }
  const onCheck = (id) => {
    dispatch(__postMyNotice(id))
    navigate(`/detail/${cmt.cmt.postId}`)
  }
  console.log("cmt", cmt.cmt.checked)
  return (
    <>
      {/* <div>{cmt.commentId}</div> */}

      <div
        onClick={onTab}
        style={{
          backgroundColor: "#eee",
          borderRadius: "10px",
          width: "500px",
          height: "80px",
          margin: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ display: cmt.cmt.checked ? "none" : "block" }}>
          <div
            className="bg-bbo w-2 h-2 rounded-full mr-5 animate-ping"
            style={{
              display: tab ? "none" : "block",
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              color: "#999",
              fontSize: "0.8rem",
              margin: "0 0 10px 0",
            }}
          >
            {cmt.cmt.content}에 새 댓글이 달렸습니다.
          </div>

          <div>
            {cmt.cmt.accountName} | {cmt.cmt.comment}
          </div>
        </div>
        <button
          onClick={() => onCheck(cmt.cmt.commentId)}
          style={{
            display: tab ? "block" : "none",
            position: "absolute",
            left: "480px",
          }}
        >
          확인
        </button>
      </div>
    </>
  )
}

export default MyCmt

//
