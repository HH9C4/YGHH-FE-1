import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EventSourcePolyfill } from "event-source-polyfill"
import { notificationApis } from "../../api/instance"
import navbarLogo from "../../assets/img/navbarLogo.svg"
import AlarmAlert from "../features/AlarmAlert"
const Header = () => {
  const navigate = useNavigate()
  const params = useParams()

  const nickName = localStorage.getItem("nickName")
  const profileImage = localStorage.getItem("profileImage")

  const setGu = (gu) => {
    localStorage.setItem("gu", gu)
  }
  useEffect(() => {
    if (params.gu !== undefined && params.gu !== "undefined") {
      setGu(params.gu)
    }
  }, [params])

  //sse연결 여부
  const [listening, setListening] = useState(false)

  //리스폰 담을 스테이트
  const [gotMessage, setGotMessage] = useState(false)

  //로그인 여부
  const isLogin = localStorage.getItem("Authorization") !== null

  //알림 불러오기(종 모양 아이콘)
  useEffect(() => {
    if (gotMessage) {
      notificationApis.getNotificationAX().then((res) => {
        if (res.data.status === 200 && res.data.data !== null) {
          const resList = res.data.data
          setGotMessage(false)
        }
      })
    }
  }, [gotMessage])

  //알림 server state

  //sse handle
  const [newNotice, setNewNotice] = useState({})

  let eventSource = undefined

  useEffect(() => {
    if (!listening && isLogin) {
      //SSE 연결
      eventSource = new EventSourcePolyfill(
        `${process.env.REACT_APP_API_URL}/connect`,
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            "Content-Type": "text/event-stream",
          },
          heartbeatTimeout: 30000,
          // heartbeatTimeout: 86400000, //sse 연결 시간 (토큰 유지 24시간)
          withCredentials: true,
        }
      )

      //sse 최초 연결되었을 때
      eventSource.onopen = (event) => {
        if (event.status === 200) {
          setListening(true)
        }
      }

      //서버에서 뭔가 날릴 때마다
      eventSource.onmessage = (event) => {
        // 받은 데이터 Json타입으로 형변환 가능여부fn
        const isJson = (str) => {
          try {
            const json = JSON.parse(str)
            return json && typeof json === "object"
          } catch (e) {
            return false
          }
        }
        if (isJson(event.data)) {
          //알림 리스트 (재요청하는 파트)
          setGotMessage(true)
          //실시간 알림 데이터
          const obj = JSON.parse(event.data)
          setNewNotice(obj)
        }
      }
      //sse 에러
      eventSource.onerror = (event) => {
        if (eventSource !== undefined) {
          eventSource.close()
          setListening(false)
        }
      }
    }
    //로그인 상태가 아니고, 이벤트 소스에서 데이터를 정상적으로 수신할 때,
    return () => {
      if (!isLogin && eventSource !== undefined) {
        eventSource.close()
        setListening(false)
      }
    }
  }, [isLogin])

  return (
    <>
      <div className="flex items-center fixed top-0 px-6 w-full bg-bbLpurple border-b-[0.5px] border-bbBB h-[52px] z-20">
        <div className="relative max-w-[420px] mx-auto w-full flex justify-between items-center">
          <div className="flex w-full justify-between items-center">
            <img
              alt="navbarLogo"
              className="hover:cursor-pointer"
              onClick={() => navigate("/home")}
              src={navbarLogo}
            ></img>
            <div className="flex items-center">
              {nickName !== (undefined || null) ? (
                <dl
                  onClick={() => navigate("/mypage")}
                  className="flex justify-end items-center cursor-pointer"
                >
                  <dt>
                    <img
                      alt="profileImage"
                      className="border-[0.5px] border-bbBB m-3 object-cover rounded-full w-[18px] h-[18px]"
                      src={profileImage}
                    />
                  </dt>

                  <dd className="text-xs text-bb22 after:ml-1">
                    <span className="font-medium">{nickName}</span>님
                  </dd>
                </dl>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hover:cursor-pointer text-xs text-bb22 font-medium cursor-pointer"
                >
                  로그인
                </button>
              )}
              {isLogin && (
                <svg
                  onClick={() => navigate("/chat")}
                  className="mx-[8px] cursor-pointer"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_801_894)">
                    <path
                      d="M8.88337 3C5.08604 3 2 5.68451 2 9C2 10.3308 2.50478 11.5468 3.33078 12.5449L2.90631 14.4379C2.826 14.782 3.22753 15.0803 3.61759 14.9771L5.90057 14.4034C6.80688 14.782 7.80497 15 8.87189 15C12.6692 15 15.7553 12.3155 15.7553 9C15.7553 5.68451 12.6692 3 8.87189 3H8.88337Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_801_894">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}

              <svg
                onClick={() => navigate("/search/0/undefined/new")}
                className="hover:cursor-pointer ml-1"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  clipPath="url(#bxdvyg8zna)"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                >
                  <path d="M8.047 13.635c3.003 0 5.438-2.468 5.438-5.512 0-3.045-2.434-5.513-5.438-5.513-3.003 0-5.437 2.468-5.437 5.513 0 3.044 2.434 5.512 5.437 5.512z" />
                  <path d="M15.39 15.39 12 11.955" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="bxdvyg8zna">
                    <path fill="#fff" d="M0 0h18v18H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <AlarmAlert
            newNotice={newNotice}
            setNewNotice={setNewNotice}
          ></AlarmAlert>
        </div>
      </div>
    </>
  )
}

export default Header
