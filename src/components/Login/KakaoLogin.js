import React from "react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import kakaoLogin from "../../assets/img/kakaoLogin.png"
import { KAKAO_AUTH_URL } from '../../api/loginKeys'

const KakaoLogin = () => {
  const dispatch = useDispatch()


  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  return (

    <img type="button" onClick={handleLogin} src={kakaoLogin}></img>
  )
}

export default KakaoLogin
