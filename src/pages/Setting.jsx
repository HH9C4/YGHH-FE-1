import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  __naverLogout,
  __duplicateName,
  setLocation,
} from "../redux/modules/memberSlice"
import { __mypageModify } from "../redux/modules/contentsSlice"
import { REACT_APP_KAKAO_REST_API_KEY } from "../api/loginKeys"
import useImgUpload from "../hooks/useImgUpload"
import useInput from "../hooks/useInput"
import { name } from "../redux/modules/memberSlice"

const Setting = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const LOGOUTREDIRECT_URI =
    "https://boombiboombi.com/user/kakao/logout/callback"
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${LOGOUTREDIRECT_URI}`

  const checkDuplicate = useSelector((state) => state.members.name)
  const site = localStorage.getItem("site")
  const userNickname = localStorage.getItem("nickName")
  const profileImage = localStorage.getItem("profileImage")

  //커스텀 훅 사용
  const [nicknameInput, setnicknameInput, nicknameInputHandle] = useInput({
    nickname: "",
  })

  //이미지 업로드 훅
  const [files, fileUrls, uploadHandle] = useImgUpload(1, false, 0.3, 1000)
  console.log("파일", files, "Url", fileUrls)
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

    formData.append(
      "nickname",
      new Blob([JSON.stringify(obj)], { type: "application/json" })
    )

    dispatch(__mypageModify(formData))
  }

  const handleLogout = () => {
    if (site === "kakao") {
      window.location.href = KAKAO_LOGOUT_URL
    } else {
      dispatch(__naverLogout())
    }
  }

  useEffect(() => {
    dispatch(__duplicateName())
  }, [])

  useEffect(() => {
    dispatch(name(nicknameInput.nickname))
  }, [nicknameInput.nickname])

  useEffect(() => {}, [files])

  useEffect(() => {
    setLocation("my")
  }, [])

  return (
    <Layout>
      <div className="w-full pt-6 pl-[25px] pr-[26px] pb-8">
        <div className="w-full justify-between flex items-center">
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
          <h1 className="text-bb22 font-bold text-[20px]">설정</h1>
          <button
            onClick={onPut}
            className=" text-bb22 font-medium text-[14px]"
          >
            저장
          </button>
        </div>
        <div className="flex justify-center mt-[35px] ">
          <label className="relative w-[80px] h-[80px] " htmlFor="img-File">
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
                  className="border-[0.5px] border-bbBB bg-white absolute rounded-full w-full h-full object-cover"
                  src={value.url ? value.url : ""}
                  alt="image"
                  key={Math.random()}
                />
              )
            })}
            <img
              alt="profileimage"
              className="w-full h-full object-cover rounded-full"
              src={profileImage}
            />
            <div className=" absolute top-0 w-[80px] h-[80px] rounded-full bg-[rgba(0,0,0,0.56)]"></div>

            <div className="absolute right-[40%] bottom-[39%] w-[24px] h-[24px] p-[4px] rounded-full  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] ">
              {/* <svg
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
              </svg> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7H16V5.5C16 4.83696 15.7366 4.20107 15.2678 3.73223C14.7989 3.26339 14.163 3 13.5 3H10.5C9.83696 3 9.20108 3.26339 8.73223 3.73223C8.26339 4.20107 8 4.83696 8 5.5V7H5C4.20435 7 3.44129 7.31607 2.87868 7.87868C2.31607 8.44129 2 9.20435 2 10V18C2 18.7957 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7957 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7957 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7957 7 19 7ZM10 5.5C10 5.36739 10.0527 5.24022 10.1464 5.14645C10.2402 5.05268 10.3674 5 10.5 5H13.5C13.6326 5 13.7598 5.05268 13.8536 5.14645C13.9473 5.24022 14 5.36739 14 5.5V7H10V5.5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V10C4 9.73478 4.10536 9.48043 4.29289 9.29289C4.48043 9.10536 4.73478 9 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V18Z"
                  fill="white"
                />
                <path
                  d="M12 10.5C11.3078 10.5 10.6311 10.7053 10.0555 11.0899C9.47993 11.4744 9.03133 12.0211 8.76642 12.6606C8.50152 13.3001 8.4322 14.0039 8.56725 14.6828C8.7023 15.3618 9.03564 15.9854 9.52513 16.4749C10.0146 16.9644 10.6383 17.2977 11.3172 17.4327C11.9961 17.5678 12.6999 17.4985 13.3394 17.2336C13.9789 16.9687 14.5256 16.5201 14.9101 15.9445C15.2947 15.3689 15.5 14.6922 15.5 14C15.5 13.0717 15.1313 12.1815 14.4749 11.5251C13.8185 10.8687 12.9283 10.5 12 10.5ZM12 15.5C11.7033 15.5 11.4133 15.412 11.1666 15.2472C10.92 15.0824 10.7277 14.8481 10.6142 14.574C10.5007 14.2999 10.4709 13.9983 10.5288 13.7074C10.5867 13.4164 10.7296 13.1491 10.9393 12.9393C11.1491 12.7296 11.4164 12.5867 11.7074 12.5288C11.9983 12.4709 12.2999 12.5006 12.574 12.6142C12.8481 12.7277 13.0824 12.92 13.2472 13.1666C13.412 13.4133 13.5 13.7033 13.5 14C13.5 14.3978 13.342 14.7794 13.0607 15.0607C12.7794 15.342 12.3978 15.5 12 15.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </label>
        </div>
        <div className="mt-10 w-full">
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
              className="w-full mt-[12px] mb-[4px] text-b14 text-bb22 outline-none bg-transparent"
              type="text"
            ></input>
          </div>
          <div className="relative w-full">
            {checkDuplicate && nicknameInput.nickname !== "" ? (
              <p className="w-full absolute mt-[8px] text-[11px] font-medium text-bbpurple">
                닉네임 사용이 가능합니다
              </p>
            ) : (
              ""
            )}
            {!checkDuplicate ? (
              <p className="w-full absolute mt-[8px] text-[11px] font-medium text-[#ff3535]">
                이미 사용중인 닉네임입니다
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center px-[24px] justify-between mt-[40px] rounded-[8px] bg-white w-full h-16">
            <p className="text-[14px] font-medium ">연결된 계정</p>
            <div className="flex items-center">
              {site === "naver" ? (
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
                className=" ml-[12px] text-[14px] font-medium  rounded-full w-[80px]  text-center h-[32px] leading-8
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
              <button
                onClick={() => {
                  window.open("https://forms.gle/788k8ygRzdZBWU4j7")
                }}
                className="w-full text-left text-[14px] font-medium"
              >
                개발자 문의
              </button>
            </div>
          </div>

          <div className="flex px-[24px] items-center mt-[12px] rounded-[8px] bg-white w-[w-full] h-[56px]">
            <p
              onClick={() => alert("현재 준비 중인 서비스입니다🥲")}
              className=" text-[14px] font-medium text-[#ff5b5b]"
            >
              서비스 탈퇴
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Setting
