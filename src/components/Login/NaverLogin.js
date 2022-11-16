import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { __naverLogin } from "../../redux/modules/memberSlice"

const NaverLogin = ({ setGetToken, setUserInfo }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const { naver } = window
    // 발급 받은 Client ID 입력 
    const NAVER_CLIENT_ID = "wyRuEAM_tMJDPLDFIEww";
    // 작성했던 Callback URL 입력
    const NAVER_CALLBACK_URL = "http://localhost:3000/user/naver/callback";

    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=state
  `;

    // const initializeNaverLogin = () => {
    //     const naverLogin = new naver.LoginWithNaverId({
    //         clientId: NAVER_CLIENT_ID,
    //         callbackUrl: NAVER_CALLBACK_URL,
    //         // 팝업창으로 로그인을 진행할 것인지?           
    //         isPopup: false,
    //         // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
    //         loginButton: { color: 'green', type: 3, height: 54, width: "222px" },
    //         callbackHandle: true,
    //     })
    //     naverLogin.init()
    //     naverLogin.logout();
    // }

    // useEffect(() => {
    //     initializeNaverLogin()
    // }, [])
    const handleLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    }
    // const state = new URL(window.location.href).searchParams.get("state");
    // const code = new URL(window.location.href).searchParams.get("code");
    // const loginData = {
    //     code: code,
    //     state: state,
    // }
    // console.log("코드 값임", loginData.code);
    // console.log("스테이츠 값임", loginData.state);

    // dispatch(__naverLogin(loginData))



    // const naverLogout = () => {
    //     localStorage.removeItem("com.naver.nid.access_token");
    // };
    return (
        <StNaverLogin onClick={handleLogin}>네이버 로그인</StNaverLogin>
    )
}

export default NaverLogin;

const StNaverLogin = styled.button`
 color : green; 
 height : 54px;
 width: 222px;
`;