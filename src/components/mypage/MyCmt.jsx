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
        className="shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-md bg-white w-full mb-3 p-4 flex h-full"
      >
        <div style={{ display: cmt.cmt.checked ? "none" : "block" }}>
          <div
            className="bg-bbpink w-2 h-2 rounded-full mr-5 mt-0.5"
            style={{
              display: tab ? "none" : "block",
            }}
          >
            <div className="bg-bbpink w-2 h-2 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-bb66 text-[11px]">
            {cmt.cmt.content}에 새 댓글이 달렸습니다.
          </div>

          <div className="text-bb22 text-xs  mt-1">
            <span className="font-bold mr-1">{cmt.cmt.accountName}</span>
            {cmt.cmt.comment}
          </div>
        </div>
        <button
          className=" w-20 ml-4 bg-bbpurple rounded-md text-white text-center text-xs h-[90%]]"
          onClick={() => onCheck(cmt.cmt.commentId)}
          style={{
            display: tab ? "block" : "none",
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
