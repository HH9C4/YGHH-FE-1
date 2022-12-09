import React, { useEffect } from "react"
import Loading from "./Loading"
import { membersApis } from "../../api/instance"

const OAuthNaverLogin = () => {
  const naverLogin = async (payload) => {
    try {
      const res = await membersApis.naverloginAX(payload)
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
      localStorage.setItem("site", "naver")
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      window.location.replace("/")
    } catch (error) {
      return
    }
  }
  // 인가코드
  const state = new URL(window.location.href).searchParams.get("state")
  const code = new URL(window.location.href).searchParams.get("code")
  const loginData = {
    code: code,
    state: state,
  }
  useEffect(() => {
    naverLogin(loginData)
  }, [])

  return <Loading />
}

export default OAuthNaverLogin
