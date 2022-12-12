import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EventSourcePolyfill } from "event-source-polyfill"
import Loading from "./Loading"
import { useRecoilState } from "recoil"
import { notificationSSE } from "../state/store"
import { membersApis } from "../../api/instance"

const OAuth2LoginHandler = () => {

  // const [newNotice, setNewNotice] = useRecoilState(notificationSSE)

  //카카오 로그인
  const navigate = useNavigate()
  let object = ""
  const kakaoLogin = async (payload) => {
    try {
      const res = await membersApis.kakaologinAX(payload)
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("Refresh_Token", res.headers.refresh)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("location", null)
      localStorage.setItem("gu", null)
      localStorage.setItem("site", "kakao")
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      // window.location.replace("/")
      navigate('/home', object)
    } catch (error) {
      return
    }
  }
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code")

  // //sse연결 여부
  // const [listening, setListening] = useState(false)

  // //리스폰 담을 스테이트
  // const [gotMessage, setGotMessage] = useState(false)

  // //로그인 여부
  // const isLogin = localStorage.getItem("Authorization") !== null



  // let eventSource = undefined

  // useEffect(() => {
  //   if (!listening && isLogin) {
  //     //SSE 연결
  //     eventSource = new EventSourcePolyfill(
  //       `${process.env.REACT_APP_API_URL}/connect`,
  //       {
  //         headers: {
  //           Authorization: localStorage.getItem("Authorization"),
  //           "Content-Type": "text/event-stream",
  //         },
  //         // heartbeatTimeout: 30000,
  //         heartbeatTimeout: 86400000, //sse 연결 시간 (토큰 유지 24시간)
  //         withCredentials: true,
  //       }
  //     )

  //     //sse 최초 연결되었을 때
  //     eventSource.onopen = (event) => {
  //       if (event.status === 200) {
  //         setListening(true)
  //       }
  //     }

  //     //서버에서 뭔가 날릴 때마다
  //     eventSource.onmessage = (event) => {
  //       // 받은 데이터 Json타입으로 형변환 가능여부fn
  //       const isJson = (str) => {
  //         try {
  //           const json = JSON.parse(str)
  //           return json && typeof json === "object"
  //         } catch (e) {
  //           return false
  //         }
  //       }
  //       if (isJson(event.data)) {
  //         //알림 리스트 (재요청하는 파트)
  //         setGotMessage(true)
  //         //실시간 알림 데이터
  //         const obj = JSON.parse(event.data)
  //         setNewNotice(obj)
  //       }
  //     }
  //     //sse 에러
  //     eventSource.onerror = (event) => {
  //       if (eventSource !== undefined) {
  //         eventSource.close()
  //         setListening(false)
  //       }
  //     }
  //   }
  //   //로그인 상태가 아니고, 이벤트 소스에서 데이터를 정상적으로 수신할 때,
  //   return () => {
  //     if (!isLogin && eventSource !== undefined) {
  //       eventSource.close()
  //       setListening(false)
  //     }
  //   }
  // }, [isLogin])


  // useEffect(() => {
  //   kakaoLogin(code)
  // }, [])

  return <Loading />
}

export default OAuth2LoginHandler
