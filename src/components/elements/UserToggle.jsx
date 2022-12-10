import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __CreateRoom } from "../../redux/modules/chatSlice"
import { useLocation } from 'react-router-dom'
const UserToggle = ({ data, level }) => {
  const [display, setDisplay] = useState(false)
  const onToggle = () => {
    setDisplay(!display)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onClickChatting = () => {
    const obj = {
      otherUserNickname: data.accountName,
    }
    const username = localStorage.getItem("nickName")
    if (username !== data.accountName) {
      dispatch(__CreateRoom(obj))
    }
  }


  const onReport = () => {
    navigate(`/report`, {

      state: {
        data: data,
        level: level,
      },
    })
  }

  return (
    <>
      {localStorage.getItem("nickName") !== data?.accountName && level === 1 ? (
        <div className="flex hover:cursor-pointer relative">
          <button
            onClick={onToggle}
            className="flex w-[40px] h-[40px]  absolute top-[-20px] left-[-30px]"
          ></button>
          {display ? (
            <div className="h-[96px] w-[96px] rounded-md absolute mt-[24px] left-[-40px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
              <button
                className="h-[48px] text-center w-full text-b14 text-bb22"
                onClick={onClickChatting}
              >
                채팅하기
              </button>
              <hr className="w-[80px] mx-auto font-medium border-bbBB" />
              <button
                className="h-[48px] text-center w-full text-b14 text-bb22"
                onClick={onReport}
              >
                신고하기
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex hover:cursor-pointer relative">
          <button
            onClick={onToggle}
            className="flex w-[40px] h-[40px] absolute top-[-20px] left-[-30px]"
          ></button>
          {display ? (
            <div className="h-[68px] w-[88px] rounded-md absolute top-[20px] left-[-33px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] ">
              <button
                className="h-[24px] text-center w-full text-b11 text-bb22"
                onClick={onClickChatting}
              >
                채팅하기
              </button>
              <hr className="w-[72px] mx-[8px] mt-[4px] font-medium border-bbBB" />
              <button
                className="h-[24px] text-center w-full text-b11 text-bb22"
                onClick={onReport}
              >
                신고하기
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  )
}

export default UserToggle
