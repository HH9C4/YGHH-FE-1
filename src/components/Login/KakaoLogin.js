import React from "react"
import kakaoLogin from "../../assets/img/kakaoLogin.png"
import { KAKAO_AUTH_URL } from "../../api/loginKeys"
import kakao_login_large_narrow from "../../assets/img/kakao_login_large_narrow.png"
import kakaoLogo from "../../assets/img/kakaoLogo.svg"
const KakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }
  return <img alt='kakaologin' className='w-[20px] h-[19px]' type="button" onClick={handleLogin} src={kakaoLogo}></img>
}

export default KakaoLogin
