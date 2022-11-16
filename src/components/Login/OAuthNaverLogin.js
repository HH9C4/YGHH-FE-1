import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { __naverLogin } from "../../redux/modules/memberSlice"
import Loading from './Loading';

const OAuthNaverLogin = () => {
    const dispatch = useDispatch();
    // 인가코드
    const state = new URL(window.location.href).searchParams.get("state");
    const code = new URL(window.location.href).searchParams.get("code");
    const loginData = {
        code: code,
        state: state,

    }
    console.log("코드 값임", loginData.code);
    console.log("스테이츠 값임", loginData.state);
    useEffect(async () => {
        // let state = new URL(window.location.href).searchParams.get("state");
        // let code = new URL(window.location.href).searchParams.get("code");
        // const loginData = {
        //     code: code,
        //     // state: localStorage.getItem("com.naver.nid.oauth.state_token"),
        //     state: localStorage.getItem("com.naver.nid.oauth.state_token")

        // }
        await dispatch(__naverLogin(loginData));
    }, []);

    return <Loading />;
}

export default OAuthNaverLogin