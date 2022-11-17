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
    const handleLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    }
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