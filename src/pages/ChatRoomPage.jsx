import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SockJS from "sockjs-client"
import Layout from "../components/layout/Layout"
import webstomp from "webstomp-client"
import { chatApis } from "../api/instance"

const ChatRoomPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const sock = new SockJS(`https://boombiboombi.o-r.kr/ws`)
  const ws = webstomp.over(sock)
  const userNickName = localStorage.getItem("nickName")
  const [chatData, setChatData] = useState()

  const ListReducer = (payload) => {
setChatData(...chatData, chatList : ...chatList, payload)
}
// ListReducer: (state, action) => {
//   state.chatList.chatList.push(action.payload)
// },

  const getinitialChatList = async (payload) => {
        try {
            const response = await chatApis.getInitialChatList(payload)
            return setChatData(response.data.data);
        } catch (error) {
            return 
        }
    }

  // ⭐️채팅방 입장
  useEffect(() => {
    //페이지가 마운트 될 때마다 띄어준 후 연결한 뒤 나갔을때 끊어준다.
    // dispatch(__getinitialChatList({ chatList2.roomId }));
    wsConnectSubscribe()
    // dispatch(__getinitialChatList(1));
    getinitialChatList(id)
    return () => {
      onbeforeunload()
    }
  }, [id])

  //소켓이 끊겼을때 감지해서 페이지를 이탈했을때 스토어를 리셋 array splice
  const [chatBody, setChatBody] = useState("")
  const content = {
    sender: localStorage.getItem("nickName"),
    message: chatBody,
  }

  let headers = {
    Authorization: localStorage.getItem("Authorization"),
  }

  //🧏통신 시도
  function wsConnectSubscribe() {
    try {
      ws.connect(headers, (frame) => {
        ws.subscribe(`/sub/${id}`, (response) => {
          let data = JSON.parse(response.body)
          ListReducer(data)
        })
      })
    } catch (error) {}
  }
  function waitForConnection(ws, callback) {
    setTimeout(
      function () {
        // 연결되었을 때 콜백함수 실행
        if (ws.ws.readyState === 1) {
          callback()
          // 연결이 안 되었으면 재호출
        } else {
          waitForConnection(ws, callback)
        }
      },
      1 // 밀리초 간격으로 실행
    )
  } //stomp 메시지 에러 waitForConnection함수로 해결

  const onbeforeunload = () => {
    try {
      ws.disconnect(
        () => {
          ws.unsubscribe("sub-0")
          clearTimeout(waitForConnection)
        },

        { Access_Token: localStorage.getItem("Authorization") }
      )
    } catch (e) {}
  }

  //채팅 메시지 여러개로 나오는것 구독해제로 해결
  const inputHandler = (e) => {
    setChatBody(e.target.value)
  }

  const onSubmitHandler = (event) => {
    if (chatBody === "" || chatBody === " ") {
      return alert("내용 입력 좀 .")
    }
    waitForConnection(ws, function () {
      ws.send(
        `/pub/${id}`,
        JSON.stringify(content),
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        },
        setChatBody("")
      )
    })
  }
  const appKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmitHandler()
      setChatBody("")
    }
  }
  //enter시 메시지 전송 기능
  const scrollRef = useRef()

  //채팅방 나가기
  const fetchRooms = async () => {
    const response = await chatApis.leaveRoom(chatData.roomId)
    navigate("/chat")
  }
  //채팅방 나가기
  const leaveChat = () => {
    fetchRooms()
  }

  // 채팅창 치면 가장 하단으로 스크롤
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      })
    }
  }, [chatData])

  return (
    <Layout>
      <div className="w-full pt-6 pl-[25px] pr-[26px] pb-[108px]">
        <div className="w-full relative flex justify-between items-center">
          <button
            onClick={() => navigate("/chat")}
            className="w-[55px] active:animate-ping"
          >
            <svg
              width="7"
              height="15"
              viewBox="0 0 7 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055
13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488
7.63125C0.0804063 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804063
6.54019 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114
0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137
6.63749 0.231252C6.84171 0.400991 6.97013 0.644902 6.99451
0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749
7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133
12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018
13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852
14.0035 5.83749 14.0013Z"
                fill="#222222"
              />
            </svg>
          </button>
          <h1 className="text-bb22 font-bold text-[20px]">채팅</h1>
          <div className="flex ">
            <svg
              className="mr-[21px]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_718_2869)">
                <path
                  d="M8.04748 14.1975C4.73998 14.1975 2.04749 11.475 2.04749 8.12249C2.04749 4.76999 4.73998 2.04749 8.04748 2.04749C11.355 2.04749 14.0475 4.76999 14.0475 8.12249C14.0475 11.475 11.355 14.1975 8.04748 14.1975ZM8.04748 3.17249C5.35498 3.17249 3.17249 5.39249 3.17249 8.12249C3.17249 10.8525 5.36248 13.0725 8.04748 13.0725C10.7325 13.0725 12.9225 10.8525 12.9225 8.12249C12.9225 5.39249 10.7325 3.17249 8.04748 3.17249Z"
                  fill="#222222"
                />
                <path
                  d="M15.39 15.9525C15.2475 15.9525 15.0975 15.9 14.9925 15.7875L11.6025 12.3525C11.385 12.135 11.385 11.775 11.6025 11.5575C11.82 11.34 12.18 11.34 12.3975 11.5575L15.7875 14.9925C16.005 15.21 16.005 15.57 15.7875 15.7875C15.675 15.8925 15.5325 15.9525 15.39 15.9525Z"
                  fill="#222222"
                />
              </g>
              <defs>
                <clipPath id="clip0_718_2869">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* 신고하기 */}
            <svg
              onClick={leaveChat}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="3.5"
                x2="16.5"
                y2="3.5"
                stroke="#222222"
                strokeLinejoin="round"
              />
              <line
                x1="1.5"
                y1="9.5"
                x2="16.5"
                y2="9.5"
                stroke="#222222"
                strokeLinejoin="round"
              />
              <line
                x1="1.5"
                y1="15.5"
                x2="16.5"
                y2="15.5"
                stroke="#222222"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div sx={{ height: "80%", overflow: "scroll" }}>
          {chatData.chatList !== undefined &&
            chatData.chatList !== null &&
            chatData.chatList.map((item, i) => {
              // return localStorage.getItem("nickName") === item.sender ?
              return userNickName !== item.sender ? (
                <div className="flex pb-[12px] mt-[12px] items-start">
                  <img
                    className="rounded-full w-[40px] border-[0.5px] border-bbBB h-[40px] object-cover shrink-0"
                    alt="profileImg"
                    src={chatData.guestProfile}
                  ></img>

                  <div className="ml-[8px] flex flex-col  relative">
                    <p className="text-b12 pb-[4px]  text-bb66 font-medium">
                      {chatData.yourName}
                    </p>
                    <svg
                      className="absolute top-[30px] left-0"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H9V9L0 0Z" fill="white" />
                    </svg>
                    <div className="max-w-[185px] overflow-hidden py-[7px] bg-white rounded-lg ml-[9px] px-[10px]">
                      <p className="break-all leading-[1] mt-[2px] text-bb22 text-b12 font-medium">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-end">
                  <div className="relative flex items-center">
                    <svg
                      className="absolute top-[14px] right-[43px]"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 0H0V9L9 0Z" fill="white" />
                    </svg>
                    <div className="w-full h-full max-w-[185px] overflow-hidden py-[7px] bg-white rounded-lg mr-[11px] px-[10px]">
                      <p className="break-all leading-[1] mt-[2px] text-bb22 text-b12 font-medium ">
                        {item.message}
                      </p>
                    </div>
                    <img
                      className="rounded-full w-[40px] border-[0.5px] border-bbBB h-[40px] object-cover shrink-0"
                      alt="profileImg"
                      src={localStorage.getItem("profileImage")}
                    ></img>
                  </div>
                </div>
              )
            })}
          <div ref={scrollRef}></div>
        </div>

        <div className="fixed bottom-[80px] px-[20px] py-[8px] left-0 w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-bbLpurple">
          <div className="flex items-center  w-full max-w-[420px] mx-auto rounded-[5px]  shrink-0">
            <input
              className="placeholder:text-[14px] rounded-md placeholder:font-medium leading-10 text-[14px] text-bb22
        outline-0 pl-2 h-10 w-full  "
              placeholder="댓글을 입력해주세요."
              value={chatBody}
              onKeyPress={appKeyPress}
              onChange={inputHandler}
              name="comment"
              type="text"
              maxLength={100}
            />
            <button
              className="text-bbpink text-[14px] w-[30px] ml-2 font-bold"
              onClick={onSubmitHandler}
            >
              전송
            </button>
          </div>
        </div>
        {/* <input
                        value={chatBody}
                        onKeyPress={appKeyPress}
                        onChange={inputHandler}
                    ></input> */}
        {/* <button onSubmit={appKeyPress} onClick={onSubmitHandler}>전송</button> */}
      </div>
    </Layout>
  )
}

export default ChatRoomPage
