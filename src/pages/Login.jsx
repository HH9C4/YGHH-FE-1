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
            {/* <div className="flex items-center  justify-center align-middle  w-full h-[48px] font-normal leading-[19px] rounded-[4px] 
            text-[16px] text-bbpurple text-center bg-white ">
              <svg
                className='absolute left-9'
                width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.07584 18.3847C4.94384 16.6397 5.29073 12.4372 5.5984 10.0703C6.38811 4.65311 9.81696 3.59989 11.8571 3.95959C14.4074 4.4093 17.5933 5.8056 16.1227 12.8684C14.652 19.9312 9.3999 19.279 8.07584 18.3847Z" fill="#7F73FF" />
                <path d="M7.95314 15.5525C6.08251 14.8894 6.07061 12.4849 6.12785 11.1191C6.30761 7.98455 8.4751 7.34442 9.48353 7.19105C10.451 7.12191 12.7464 7.48706 12.2609 11.619C11.7753 15.751 8.75176 15.9211 7.95314 15.5525Z" fill="white" />
                <ellipse rx="1.64443" ry="1.94952" transform="matrix(0.999498 -0.0316802 -0.00781422 0.99997 7.75923 11.1498)" fill="black" />
                <path d="M20.2979 18.4578C17.1659 16.7127 17.5128 12.5102 17.8204 10.1433C18.6102 4.72612 22.039 3.6729 24.0792 4.0326C26.6294 4.48231 29.8154 5.87861 28.3447 12.9414C26.8741 20.0042 21.6219 19.352 20.2979 18.4578Z" fill="#7F73FF" />
                <path d="M20.1751 15.6255C18.3044 14.9624 18.2925 12.5579 18.3498 11.1921C18.5295 8.05755 20.697 7.41742 21.7055 7.26405C22.6729 7.19491 24.9683 7.56006 24.4828 11.692C23.9973 15.824 20.9737 15.9941 20.1751 15.6255Z" fill="white" />
                <ellipse rx="1.64443" ry="1.94952" transform="matrix(0.999498 -0.0316802 -0.00781422 0.99997 19.9744 11.2228)" fill="black" />
              </svg>
              <button onClick={() => { navigate("/home") }}>로그인 없이 둘러보기</button>
            </div> */}

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
