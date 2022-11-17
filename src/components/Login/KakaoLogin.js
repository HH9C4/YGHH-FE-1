import React from "react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import kakaoLogin from "../../assets/img/kakaoLogin.png"
import { KAKAO_AUTH_URL } from '../../api/loginKeys'

const KakaoLogin = () => {
  const dispatch = useDispatch()
  // const REST_API_KEY = "5be5552cd6fd58fe7ce5082934d4b18a"
  // const REDIRECT_URI = "http://localhost:3000/user/kakao/callback"
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    // <div>
    //   <a id="kakao-login-btn" onClick={handleLogin}>
    //     <img
    //       src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
    //       width="222"
    //       alt="카카오 로그인 버튼"
    //     />
    //   </a>
    //   <p id="token-result"></p>
    // </div>
    <img type="button" onClick={handleLogin} src={kakaoLogin}></img>
  )
}

export default KakaoLogin
