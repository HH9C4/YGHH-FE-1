import React, { useEffect } from "react"
import Layout from "../components/layout/Layout"
import KakaoLogin from "../components/Login/KakaoLogin"
import NaverLogin from "../components/Login/NaverLogin"
import largeLogo from "../assets/img/largeLogo.svg"
import { useNavigate } from "react-router-dom"
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../api/loginKeys"

const Login = () => {
  const navigate = useNavigate()

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL
  }
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const setLocation = (l) => {
    localStorage.setItem("location", l)
  }
  useEffect(() => {
    setLocation("my")
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Layout>
      <div className="w-full">
        <div className=" pt-[170px] ">
          <div className="flex justify-center items-center">
            <div className=" mb-[26px]  w-[175px] h-[73px] text-center b  flex justify-center items-center ">
              <img alt="loginLogo" src={largeLogo}></img>
            </div>
          </div>
          <div className="flex flex-col pt-[104px] px-[27px]">
            <div
              onClick={handleKakaoLogin}
              className="cursor-pointer flex justify-center items-center align-middle mt-[12px]  w-full h-[48px] font-normal leading-[19px] rounded-[4px] bg-[#fee500] "
            >
              <KakaoLogin></KakaoLogin>
              <p className="ml-[15%] mr-[15%] text-b16 text-[#181600]">
                카카오 로그인
              </p>
            </div>
            <div
              onClick={handleNaverLogin}
              id="naverIdLogin"
              className="cursor-pointer flex justify-center items-center align-middle mt-[12px]  w-full h-[48px] font-normal leading-[19px] rounded-[4px] bg-[#02c75a] "
            >
              <NaverLogin></NaverLogin>
              <p className="ml-[15%] mr-[15%] text-b16 text-white">
                네이버 로그인
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
