import React from "react"
import KakaoLogin from "../components/Login/KakaoLogin"
import NaverLogin from "../components/Login/NaverLogin"
import Layout from "../components/layout/Layout"
const Login = () => {

  return (
    <Layout>
      <div className='w-[375px]'>
        <div className=" pt-[102px] ">
          <div className="flex justify-center items-center" >
            <div className=" mb-[26px] bg-[lightgray] w-[175px] h-[73px] text-center b  flex justify-center items-center ">
              <img className="w-[75px] mt-[30px] mb-[30px] mx-[100px] text-[12px]" src='' />
            </div>
          </div>
          <div className="w-[217px] h-[171px] ml-[80px] mr-[80px] mb-[56px] text-center">
            <p className="text-[14px] font-medium	">
              붐비붐비는 서울시 스팟 곳곳의<br />
              현재 인구밀집도와 정보를 제공하고<br />
              동네 소식을 빠르게 확인할 수 있는<br />
              정보제공형 커뮤니티입니다. </p>
            {/* //word-break */}

            <p className="text-[14px] font-medium mt-6	">
              붐비지 않는 곳을 찾으시는 분들과<br />
              지금 핫한 핫플을 찾고 계신 분들 모두가<br />
              붐비붐비의 회원이 되실 수 있습니다.<br />
            </p>
          </div>
          <div>
            <div className='ml-[46px] mr-[46px] w-[284px]'>
              <KakaoLogin></KakaoLogin>
            </div>
            <div id="naverIdLogin" className='ml-[46px] mr-[46px] w-[284px] mt-[12px]'>
              <NaverLogin></NaverLogin>
            </div>
          </div>

        </div>
      </div >
    </Layout>
  )
}

export default Login
