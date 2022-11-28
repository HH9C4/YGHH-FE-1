import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout/Layout"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __naverLogout } from "../redux/modules/memberSlice"
import { __mypageModify } from "../redux/modules/contentsSlice"
import { REACT_APP_KAKAO_REST_API_KEY } from "../api/loginKeys"
import useImgUpload from "../hooks/useImgUpload"
import useInput from "../hooks/useInput"
const Setting = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const LOGOUTREDIRECT_URI =
    "https://boombiboombi.vercel.app/user/kakao/logout/callback"
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${LOGOUTREDIRECT_URI}`

  //커스텀 훅 사용
  const [nicknameInput, setnicknameInput, nicknameInputHandle] = useInput({
    nickname: "",
  })
  const userNickname = localStorage.getItem("nickname")
  //이미지 업로드 훅
  const [files, fileUrls, uploadHandle] = useImgUpload(1, false, 0.3, 1000)

  //이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef()

  //submit
  const onPut = (e) => {
    e.preventDefault()
    const formData = new FormData()
    //폼 데이터 관리
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("image", file)
      })
    }
    let obj = {
      nickname: nicknameInput.nickname,
    }

    console.log(nicknameInput.nickname);

    useEffect(() => {
        console.log(files)
    }, [files])
    return (
        <Layout>
            <div className="pt-6 ml-[25px] mr-[26px] mb-8">
                <div className='w-full flex'>
                    <button
                        onClick={() => navigate(-1)}
                        className="active:animate-ping">
                        <svg

                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                fill="#231F20"
                            />
                        </svg>
                    </button>
                    <h1 className=" flex w-full absolute left-[45%] text-bb22 font-bold text-[20px]">설정</h1>
                </div>
                <div className='flex justify-center mt-[35px] '>
                    <label className='relative w-[80px] h-[80px]'
                        htmlFor="img-File">
                        <input
                            style={{ display: "none" }}
                            accept="image/*"
                            id="img-File"
                            name="imgFile"
                            type="file"
                            multiple
                            onChange={uploadHandle}
                            ref={imgRef}
                        />
                        {fileUrls.map((value) => {
                            return (
                                <img

                                    className="absolute rounded-full w-full h-full "
                                    src={value ? value : ""}
                                    alt="image"
                                    key={Math.random()}
                                />
                            )
                        })}
                        <img
                            alt='profileimage'
                            className="w-full h-full object-cover rounded-full"
                            src={localStorage.getItem("profileImage")}
                        />
                        <div className='absolute right-0 bottom-0 w-[24px] h-[24px] p-[4px] rounded-full  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white'>
                            <svg
                                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.933 4.893-1.826-1.826a1.333 1.333 0 0 0-1.774-.047l-6 6c-.215.217-.35.502-.38.807l-.286 2.78a.667.667 0 0 0 .666.726h.06l2.78-.253c.305-.03.59-.165.807-.38l6-6a1.28 1.28 0 0 0-.047-1.807zm-6.88 6.854-2 .186.18-2L8 6.213l1.8 1.8-3.747 3.734zm4.614-4.627L8.88 5.333 10.18 4 12 5.82l-1.333 1.3z" fill="#222" />
                            </svg>
                        </div>
                    </label>
                </div>
                <div className='mt-10 '>
                    <p className='text-[14px] font-medium'>닉네임을 입력하세요 (최대 20자)</p>
                    <div
                        className='flex w-full items-end border-b-[2px] border-b-[#888]'>
                        <input
                            defaultValue={userNickname}
                            placeholder={userNickname}
                            name='nickname'
                            onChange={nicknameInputHandle}
                            maxLength={20}
                            className='w-full mt-[13px] outline-none bg-transparent' type="text" >
                        </input>
                        <svg
                            onClick={onPut}
                            className='mb-[3px]'
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6l1.95-2zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28.27-2.99z" fill="#888" />
                        </svg>
                    </div>
                    <div className='flex items-center px-[24px] justify-between mt-[40px] rounded-[8px] bg-white w-full h-16'>
                        <p className='text-[14px] font-medium '>연결된 계정</p>
                        <div className='flex items-center'>
                            {
                                localStorage.getItem("site") === "naver" ?
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 16H1.6C0.72 16 0 15.28 0 14.4V1.6C0 0.719999 0.72 0 1.6 0H14.4C15.28 0 16 0.719999 16 1.6V14.4C16 15.28 15.28 16 14.4 16Z" fill="#02C75A" />
                                            <path d="M9.09168 8.21407L6.81848 4.96007H4.93408V11.0401H6.90808V7.78607L9.18128 11.0401H11.0657V4.96007H9.09168V8.21407Z" fill="white" />
                                        </svg>
                                        <p className='ml-[5px] text-[14px] font-medium text-[#02c75a]'>네이버</p>
                                    </>
                                    :
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M450 0H50C22.3858 0 0 22.3858 0 50V450C0 477.614 22.3858 500 50 500H450C477.614 500 500 477.614 500 450V50C500 22.3858 477.614 0 450 0Z" fill="#FDE600" />
                                            <path d="M161.03 313.2C161.03 313.2 126.26 290.27 117.27 253.42C117.27 253.42 108.73 226.91 124.82 192.2C124.82 192.2 138.5 157.89 183.16 138.92C183.16 138.92 227.84 114.57 291.88 130.26C291.88 130.26 348.48 141.72 375.04 192.27C375.04 192.27 408.19 245.84 353.57 302.11C353.57 302.11 314.38 341.43 245.89 339.84C245.89 339.84 233.19 340 226.23 338.33C226.23 338.33 224.53 337.67 223.86 338.27L172.59 374.04C172.59 374.04 163.61 379.45 168.58 364.47L178.97 325.85C178.97 325.85 179.47 324.54 178.45 324.05C178.45 324.05 163.5 315.71 161.03 313.19V313.2Z" fill="#391B1B" />
                                        </svg>

                                        <p className='ml-[5px] text-[14px] font-medium text-[#391B1B]'>카카오</p>
                                    </>
                            }
                            <p type="button" className=" ml-[12px] text-[14px] font-medium  rounded-full w-[80px]  text-center h-[32px] leading-9
             shadow-[0_0_10px_0_rgba(0,0,0,0.1)] " onClick={handleLogout}>
                                로그아웃
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col  mt-[12px] rounded-[8px] bg-white w-[w-full] h-[128px]'>
                        <div className='flex w-full px-[24px] justify-between items-center h-[63.5px] border-b-[1px] border-b-bbBB'>
                            <p className=' text-[14px] font-medium'>현재버전</p>
                            <p className=' text-[14px] font-medium'>1.0.1 Ver</p>
                        </div>
                        <div className='flex w-full px-[24px] items-center h-[63.5px]'>
                            <p className=' text-[14px] font-medium'>개발자 문의</p>
                        </div>
                    </div>


    dispatch(__mypageModify(formData))
  }

  const handleLogout = () => {
    if (localStorage.getItem("site") === "kakao") {
      window.location.href = KAKAO_LOGOUT_URL
    } else {
      dispatch(__naverLogout())
    }
  }

  console.log(nicknameInput.nickname)

  useEffect(() => {
    console.log(files)
  }, [files])
  return (
    <Layout>
      <div className="pt-6 ml-[25px] mr-[26px] mb-8">
        <div className="w-full flex">
          <button onClick={() => navigate(-1)} className="active:animate-ping">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                fill="#231F20"
              />
            </svg>
          </button>
          <h1 className=" flex w-full absolute left-[45%] text-bb22 font-bold text-[20px]">
            설정
          </h1>
        </div>
        <div className="flex justify-center mt-[35px] ">
          <label className="relative w-[80px] h-[80px]" htmlFor="img-File">
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="img-File"
              name="imgFile"
              type="file"
              multiple
              onChange={uploadHandle}
              ref={imgRef}
            />
            {fileUrls.map((value) => {
              return (
                <img
                  className="absolute rounded-full w-full h-full "
                  src={value ? value : ""}
                  alt="image"
                  key={Math.random()}
                />
              )
            })}
            <img
              alt="profileimage"
              className="w-full h-full object-cover rounded-full"
              src={localStorage.getItem("profileImage")}
            />
            <div className="absolute right-0 bottom-0 w-[24px] h-[24px] p-[4px] rounded-full  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.933 4.893-1.826-1.826a1.333 1.333 0 0 0-1.774-.047l-6 6c-.215.217-.35.502-.38.807l-.286 2.78a.667.667 0 0 0 .666.726h.06l2.78-.253c.305-.03.59-.165.807-.38l6-6a1.28 1.28 0 0 0-.047-1.807zm-6.88 6.854-2 .186.18-2L8 6.213l1.8 1.8-3.747 3.734zm4.614-4.627L8.88 5.333 10.18 4 12 5.82l-1.333 1.3z"
                  fill="#222"
                />
              </svg>
            </div>
          </label>
        </div>
        <div className="mt-10 ">
          <p className="text-[14px] font-medium">
            닉네임을 입력하세요 (최대 20자)
          </p>
          <div className="flex w-full items-end border-b-[2px] border-b-[#888]">
            <input
              defaultValue={userNickname}
              placeholder={userNickname}
              name="nickname"
              onChange={nicknameInputHandle}
              maxLength={20}
              className="w-full mt-[13px] outline-none bg-transparent"
              type="text"
            ></input>
            <svg
              onClick={onPut}
              className="mb-[3px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6l1.95-2zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28.27-2.99z"
                fill="#888"
              />
            </svg>
          </div>
          <div className="flex items-center px-[24px] justify-between mt-[40px] rounded-[8px] bg-white w-full h-16">
            <p className="text-[14px] font-medium ">연결된 계정</p>
            <div className="flex items-center">
              {localStorage.getItem("site" === "naver") ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4 16H1.6C0.72 16 0 15.28 0 14.4V1.6C0 0.719999 0.72 0 1.6 0H14.4C15.28 0 16 0.719999 16 1.6V14.4C16 15.28 15.28 16 14.4 16Z"
                      fill="#02C75A"
                    />
                    <path
                      d="M9.09168 8.21407L6.81848 4.96007H4.93408V11.0401H6.90808V7.78607L9.18128 11.0401H11.0657V4.96007H9.09168V8.21407Z"
                      fill="white"
                    />
                  </svg>
                  <p className="ml-[5px] text-[14px] font-medium text-[#02c75a]">
                    네이버
                  </p>
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M450 0H50C22.3858 0 0 22.3858 0 50V450C0 477.614 22.3858 500 50 500H450C477.614 500 500 477.614 500 450V50C500 22.3858 477.614 0 450 0Z"
                      fill="#FDE600"
                    />
                    <path
                      d="M161.03 313.2C161.03 313.2 126.26 290.27 117.27 253.42C117.27 253.42 108.73 226.91 124.82 192.2C124.82 192.2 138.5 157.89 183.16 138.92C183.16 138.92 227.84 114.57 291.88 130.26C291.88 130.26 348.48 141.72 375.04 192.27C375.04 192.27 408.19 245.84 353.57 302.11C353.57 302.11 314.38 341.43 245.89 339.84C245.89 339.84 233.19 340 226.23 338.33C226.23 338.33 224.53 337.67 223.86 338.27L172.59 374.04C172.59 374.04 163.61 379.45 168.58 364.47L178.97 325.85C178.97 325.85 179.47 324.54 178.45 324.05C178.45 324.05 163.5 315.71 161.03 313.19V313.2Z"
                      fill="#391B1B"
                    />
                  </svg>

                  <p className="ml-[5px] text-[14px] font-medium text-[#391B1B]">
                    카카오
                  </p>
                </>
              )}
              <p
                type="button"
                className=" ml-[12px] text-[14px] font-medium  rounded-full w-[80px]  text-center h-[32px] leading-6
             shadow-[0_0_10px_0_rgba(0,0,0,0.1)] "
                onClick={handleLogout}
              >
                로그아웃
              </p>
            </div>
          </div>

          <div className="flex flex-col  mt-[12px] rounded-[8px] bg-white w-[w-full] h-[128px]">
            <div className="flex w-full px-[24px] justify-between items-center h-[63.5px] border-b-[1px] border-b-bbBB">
              <p className=" text-[14px] font-medium">현재버전</p>
              <p className=" text-[14px] font-medium">1.0.1 Ver</p>
            </div>
            <div className="flex w-full px-[24px] items-center h-[63.5px]">
              <p className=" text-[14px] font-medium">개발자 문의</p>
            </div>
          </div>

          <div className="flex px-[24px] items-center mt-[12px] rounded-[8px] bg-white w-[w-full] h-[56px]">
            <p className=" text-[14px] font-medium text-[#ff5b5b]">
              서비스 탈퇴
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Setting
