import React from "react"
import kakaoLogin from "../../assets/img/kakaoLogin.png"
import { KAKAO_AUTH_URL } from "../../api/loginKeys"

const KakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  return <img className='w-[320px] ' type="button" onClick={handleLogin} src={kakaoLogin}></img>
}

export default KakaoLogin
