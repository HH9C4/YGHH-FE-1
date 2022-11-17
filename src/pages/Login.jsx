import React from "react"
import KakaoLogin from "../components/Login/KakaoLogin"
import NaverLogin from "../components/Login/NaverLogin"
import { useLocation } from "react-router-dom"

const Login = () => {

  return (
    <div>
      <div id="naverIdLogin">
        <NaverLogin></NaverLogin>
      </div>
      <KakaoLogin></KakaoLogin>
    </div>
  )
}

export default Login
