import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { chatApis } from "../../api/instance"
const UserToggle = ({ data }) => {
  const [display, setDisplay] = useState(false)
  const onToggle = () => {
    setDisplay(!display)
  }
  const [chatList, setChatList] = useState()

  const CreateRoom = async (payload) => {
    try {
      const response = await chatApis.CreateRoom(payload)
      navigate(`/ChatRoomPage/${response.data.data.roomId}`)
      return setChatList(response.data.data)
    } catch (error) {
      return
    }
  }

  const navigate = useNavigate()
  const onClickChatting = () => {
    const obj = {
      otherUserNickname: data.accountName,
    }
    const username = localStorage.getItem("nickName")
    if (username !== data.accountName) {
      CreateRoom(obj)
    }
  }

  return (
    <>
      {localStorage.getItem("nickName") !== data.accountName ? (
        <div className="flex hover:cursor-pointer relative">
          <button
            onClick={onToggle}
            className="flex w-[40px] h-[40px]  absolute top-[-20px] left-[-30px]"
          ></button>
          {display ? (
            <div className="h-24 w-24 rounded-md absolute mt-[24px] left-[-33px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
              <button
                className="h-12 text-center w-24 text-sm text-bb22"
                onClick={onClickChatting}
              >
                채팅하기
              </button>
              <hr className="w-[88px] mx-1 font-medium border-bbBB" />
              <button
                className="h-12 text-center w-24 text-sm text-bb22"
                onClick={() => {}}
              >
                신고하기
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default UserToggle
