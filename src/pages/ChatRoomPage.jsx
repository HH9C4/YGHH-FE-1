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
  const [display, setDisplay] = useState(false)
  const onToggle = () => {
    setDisplay(!display)
  }

  const [chatData, setChatData] = useState([])

  // ListReducer: (state, action) => {
  //   state.chatList.chatList.push(action.payload)
  // },

  const getinitialChatList = async (payload) => {
    try {
      const response = await chatApis.getInitialChatList(payload)
      setChatData(response.data.data)
      return
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
    localStorage.setItem("location", "chat")
    getinitialChatList(id)
    return () => {
      onbeforeunload()
    }
  }, [id])

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
          // let arr = [...chatArr].push(data)
          getinitialChatList(id)
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

  // 연결해제, 구독해제
  const onbeforeunload = () => {
    try {
      ws.disconnect(
        () => {
          localStorage.setItem("location", "")
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
      return alert("내용을 입력하세요.")
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
  const leaveChat = () => {
    const result = window.confirm("채팅방을 나가시겠습니까?")
    if (result) {
      fetchRooms()
    }
  }

  const onTop = () => {
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  // 채팅창 치면 가장 하단으로 스크롤
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({
        false: false,
        // block: "end",
        inline: "nearest",
      })
    }
  }, [chatData])

  return (
    <Layout>
      <div className="w-full relative max-w-[420px] pt-6 pl-[25px] pr-[26px] pb-[108px]">
        <div className="bg-bbLpurple h-[60px] z-30 mx-auto w-full max-w-[420px] sticky flex justify-between items-center left-0 top-[52px]">
          <button
            onClick={() => navigate("/chat")}
            className="w-[40px] active:animate-ping"
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
          <button onClick={onTop} className="w-full">
            <h1
              className={
                chatData?.yourName.length >= 16
                  ? "text-bb22 font-bold text-b14"
                  : "text-bb22 font-bold text-b16"
              }
            >
              {chatData.yourName}
            </h1>
          </button>
          <button
            className="w-[40px] rotate-45 mx-auto mt-[12px]"
            onClick={leaveChat}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                fill="#222222"
              />
            </svg>
          </button>
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
                      <p className="break-all leading-[1] my-[1px] text-bb22 text-b12 font-medium">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center mt-[12px] justify-end">
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
        </div>

        <div className="fixed bottom-[80px] px-[20px] py-[8px] left-0 w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-bbLpurple">
          <div className="flex items-center  w-full max-w-[420px] mx-auto rounded-[5px]  shrink-0">
            <input
              className="placeholder:text-[14px] rounded-md placeholder:font-medium leading-10 text-[14px] text-bb22
        outline-0 pl-2 h-10 w-full  "
              placeholder="메시지를 입력해주세요."
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
      <div ref={scrollRef}></div>
    </Layout>
  )
}

export default ChatRoomPage
