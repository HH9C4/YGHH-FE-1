import React from "react"
import { KAKAO_AUTH_URL } from "../../api/loginKeys"
import kakaoLogo from "../../assets/img/kakaoLogo.svg"
const KakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }
  return <img alt='kakaologin' className='w-[20px] h-[19px]' type="button" onClick={handleLogin} src={kakaoLogo}></img>
}

export default KakaoLogin
