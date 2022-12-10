import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { contentsApis } from "../../api/instance"
const MyCmt = ({ cmt }) => {
  const navigate = useNavigate()
  const [tab, setTab] = useState(false)
  const postMyNotice = async (payload) => {
    try {
      const res = await contentsApis.mypageNoticeConfirmAX(payload)
    } catch (error) {
      return
    }
  }
  const onCheck = (id) => {
    postMyNotice(id)
    navigate(`/detail/${cmt.postId}`)
  }
  return (
    <>
      {/* <div>{cmt.commentId}</div> */}
      <div
        onClick={() => onCheck(cmt.commentId)}
        className="hover:cursor-pointer shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-md bg-white w-full mb-3 pl-[24px] flex h-full"
      >
        <div style={{ display: cmt.checked ? "none" : "block" }}>
          <div
            className="relative mt-[26px] bg-bbred w-[8px] h-[8px] rounded-full mr-5"
            style={{
              display: tab ? "none" : "block",
            }}
          >
            <div className="absolute top-[1px] left-[1px] bg-bbred w-[6px] h-[6px] rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-[24px] text-bb66 text-[11px]">
            {cmt.content}에 새 댓글이 달렸습니다.
          </div>

          <div className="mb-[24px] pr-[20px] text-bb22 text-xs break-all mt-1">
            <span className="font-bold mr-1">{cmt.accountName}</span>
            {cmt.comment}
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCmt

//
