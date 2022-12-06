import axios from 'axios'
import React from "react"
import { useDispatch } from "react-redux"
import Layout from '../components/layout/Layout'
import { __testLogin } from "../redux/modules/memberSlice"

const LoginDev = () => {
  const dispatch = useDispatch()
  const onLogin = async () => {
    const res = await axios.get("https://boombiboombi.o-r.kr/user/tester")
    // dispatch(__testLogin())
    console.log(res);
    const Access_Token = res.headers.authorization
    localStorage.setItem("Authorization", Access_Token)
    localStorage.setItem("Refresh_Token", res.headers.refresh)
    localStorage.setItem("nickName", res.data.data.accountName)
    localStorage.setItem("profileImage", res.data.data.profileImage)
    localStorage.setItem("ageRange", res.data.data.ageRange)
    localStorage.setItem("email", res.data.data.email)
    localStorage.setItem("gender", res.data.data.gender)
    localStorage.setItem("site", "kakao")
    // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
    alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
    window.location.replace("/")
  }
  const onLogin2 = async () => {
    const res = await axios.get("https://boombiboombi.o-r.kr/user/tester2")
    console.log(res);
    const Access_Token = res.headers.authorization
    localStorage.setItem("Authorization", Access_Token)
    localStorage.setItem("Refresh_Token", res.headers.refresh)
    localStorage.setItem("nickName", res.data.data.accountName)
    localStorage.setItem("profileImage", res.data.data.profileImage)
    localStorage.setItem("ageRange", res.data.data.ageRange)
    localStorage.setItem("email", res.data.data.email)
    localStorage.setItem("gender", res.data.data.gender)
    localStorage.setItem("site", "kakao")
    // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
    alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
    window.location.replace("/")
    console.log(res);
  }

  return (
    <Layout>
      <div className='flex justify-evenly mt-[80px]'>
        <div className='font-bold rounded-full px-[12px] bg-bbpurple text-white' onClick={onLogin}>Dev 로그인1</div>
        <div className='font-bold rounded-full px-[12px] bg-bbpurple text-white' onClick={onLogin2}>Dev 로그인2</div>
      </div>
    </Layout>
  )
}

export default LoginDev
