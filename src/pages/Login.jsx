import React from 'react'
import KakaoLogin from '../components/features/KakaoLogin';
import NaverLogin from '../components/features/NaverLogin'
import { useLocation } from 'react-router-dom';


const Login = () => {
    // const location = useLocation();
    // const REST_API_KEY = "20c8b3740eb485b607e3163774c9b7f3"
    // const REDIRECT_URI = "http://localhost:3000/"
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    // const KAKAO_CODE = location.search.split('=')[1];

    // console.log(KAKAO_CODE);
    // const handleLogin = () => {
    //     window.location.href = KAKAO_AUTH_URL;
    // }

    return (
        <div>
            <div id="naverIdLogin">
                <NaverLogin></NaverLogin>
            </div>
            {/* <a id="kakao-login-btn" onClick={handleLogin}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                    alt="카카오 로그인 버튼" />
            </a>
            <p id="token-result"></p> */}
            <KakaoLogin></KakaoLogin>
        </div>
    )
}

export default Login