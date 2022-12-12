import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../components/layout/Layout"

const LoginDev = () => {
  const navigate = useNavigate()
  const onLogin = async () => {
    const res = await axios.get("https://boombiboombi.o-r.kr/user/tester")
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
    alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
    navigate("/")
  }
  const onLogin2 = async () => {
    const res = await axios.get("https://boombiboombi.o-r.kr/user/tester2")
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
    alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
    navigate("/")
  }

  return (
    <Layout>
      <div className="flex justify-evenly mt-[80px]">
        <div
          className="font-bold rounded-full px-[12px] bg-bbpurple text-white"
          onClick={onLogin}
        >
          Dev 로그인1
        </div>
        <div
          className="font-bold rounded-full px-[12px] bg-bbpurple text-white"
          onClick={onLogin2}
        >
          Dev 로그인2
        </div>
      </div>
    </Layout>
  )
}

export default LoginDev
