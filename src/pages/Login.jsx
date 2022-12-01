import React from "react"
import Layout from "../components/layout/Layout"
import KakaoLogin from "../components/Login/KakaoLogin"
import NaverLogin from "../components/Login/NaverLogin"
import largeLogo from "../assets/img/largeLogo.svg"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="w-full">
        <div className=" pt-[170px] ">
          <div className="flex justify-center items-center">
            <div className=" mb-[26px]  w-[175px] h-[73px] text-center b  flex justify-center items-center ">
              <img alt='loginLogo' src={largeLogo}></img>
            </div>
          </div>
          <div className='flex flex-col pt-[104px] px-[27px]'>
            <div className="flex justify-center align-middle mt-[12px]  w-full h-[48px] font-normal leading-[19px] rounded-[4px] bg-[#fee500] ">
              <KakaoLogin></KakaoLogin>
            </div>
            <div
              id="naverIdLogin"
              className="flex justify-center align-middle mt-[12px] w-full h-[48px] font-normal leading-[19px] rounded-[4px] bg-[#02c75a] ">
              <NaverLogin></NaverLogin>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
