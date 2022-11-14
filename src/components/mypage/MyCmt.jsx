import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const MyCmt = (cmt) => {
  const navigate = useNavigate()
  const [tab, setTab] = useState(false)

  const onTab = () => {
    setTab(!tab)
  }
  return (
    <>
      {/* <div>{cmt.commentId}</div> */}
      <div onClick={onTab} style={{ display: tab ? "flex" : "block" }}>
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
            {cmt.cmt.content}에 새 댓글이 달렸습니다.
          </div>
          <div>
            {cmt.cmt.accountName} | {cmt.cmt.comment}
          </div>
        </div>
        <button
          onClick={() => navigate(`/detail/${cmt.cmt.postId}`)}
          style={{ display: tab ? "block" : "none" }}
        >
          확인
        </button>
      </div>
    </>
  )
}

export default MyCmt

//
