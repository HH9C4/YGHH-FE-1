import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';



const KakaoLogin = () => {
    const dispatch = useDispatch();
    const REST_API_KEY = "a8c29f43cc985001f5fcd08bcbd9bbac"
    const REDIRECT_URI = "http://localhost:3000/user/kakao/callback"
    const LOGOUTREDIRECT_URI = "http://localhost:3000/user/kakao/logout/callback"

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUTREDIRECT_URI}`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
    const handleLogout = () => {
        window.location.href = KAKAO_LOGOUT_URL;
    }

    return (
        <div>
            <a id="kakao-login-btn" onClick={handleLogin}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                    alt="카카오 로그인 버튼" />
            </a>
            <p id="token-result"></p>
            <button className="api-btn" onClick={handleLogout}>로그아웃</button>

        </div>
    )
}

export default KakaoLogin