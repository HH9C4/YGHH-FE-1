import React from "react"
import ReportCateInput from "./ReportCateInput"
import ContentInput from "./ContentInput"
import useInput from "../../hooks/useInput"
import Layout from "../layout/Layout"
import { useLocation } from "react-router-dom"
import { contentsApis } from "../../api/instance"
import { data } from "autoprefixer"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ReportContainer = () => {
  const navigate = useNavigate()
  const state = useLocation()
  const data = state.state

  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    category: "",
    content: "",
  })
  const [contentData, setContentData] = useState()

  // const onPost = () => {
  //     try {
  //         if (data.level === 1 && postInput.category === 3) {
  //             alert("신고대상이 아닙니다.")
  //             return
  //         }
  //         if (data.level === 2 && postInput.category === 2) {
  //             alert("신고대상이 아닙니다.")
  //             return
  //         }
  //         if (postInput.content === '') {
  //             alert("신고사유를 입력해주세요.")
  //             return
  //         }
  //         const obj = {
  //             level: postInput.category !== "" ? postInput.category : data.level,
  //             reportedId: postInput.category === "1" ? contentData.data.accountName
  //                 : (postInput.category === "2" ? contentData.data.postId : data.data.commentId),
  //             content: postInput.content,
  //         }
  //         const res = contentsApis.reportContentAX(obj)
  //         // navigate(-1)
  //         console.log("응답값", res);
  //     } catch (error) {
  //         console.log(error);
  //         // if (error.response.data.message === "이미 신고하셨습니다.") {
  //         //     alert("이미 신고를 했습니다")
  //         // }
  //         // navigate(-1)
  //     }
  // }

  const onPost = async () => {
    if (data.level === 1 && postInput.category === 3) {
      alert("신고대상이 아닙니다.")
      return
    }
    if (data.level === 2 && postInput.category === 2) {
      alert("신고대상이 아닙니다.")
      return
    }
    if (postInput.content === "") {
      alert("신고사유를 입력해주세요.")
      return
    }
    const obj = {
      level: postInput.category !== "" ? postInput.category : data.level,
      reportedId:
        postInput.category === "1"
          ? contentData.data.accountName
          : postInput.category === "2"
          ? contentData.data.postId
          : data.data.commentId,
      content: postInput.content,
    }

    try {
      const res = await contentsApis.reportContentAX(obj)
      if (res.status === 200) {
        alert("신고가 완료되었습니다.")
        navigate(-1)
      }
    } catch (error) {
      if (error.response.data.message === "이미 신고하셨습니다.") {
        alert("이미 신고를 했습니다.")
      }
    }
  }

  useEffect(() => {
    setPostInput({ ...postInput, category: String(data?.level + 1) })
    setContentData(data)
  }, [contentData])

  return (
    <div className="w-full pl-[25px] pr-[26px] ">
      <ReportCateInput
        postInput={postInput}
        postInputHandle={postInputHandle}
        level={data?.level}
      />
      <div className="outline-0 mb-[8px] w-full h-[100%] min-h-[52px] rounded-md text-start py-[16px] px-[24px] text-sm bg-white text-bb22 overflow-y-auto break-all">
        {contentData?.data !== undefined &&
          contentData?.level === 1 &&
          (contentData?.data.content !== undefined &&
          postInput.category === "1" ? (
            contentData?.data.accountName
          ) : postInput.category === ("2" || "") ? (
            contentData?.data.content
          ) : postInput.category === "3" ? (
            <span className="text-bb88">신고대상이 아닙니다.</span>
          ) : (
            ""
          ))}
        {contentData?.data !== undefined &&
          contentData?.level === 2 &&
          (contentData?.data.comment !== undefined &&
          postInput.category === "1" ? (
            contentData?.data.accountName
          ) : postInput.category === "2" ? (
            <span className="text-bb88">신고대상이 아닙니다.</span>
          ) : postInput.category === ("3" || "") ? (
            contentData?.data.comment
          ) : (
            ""
          ))}
      </div>
      <ContentInput postInput={postInput} postInputHandle={postInputHandle} />
      <div className="flex justify-end">
        <button
          type="submit"
          className="hover:cursor-pointer w-[128px] h-10 mt-3 rounded-full bg-gradient-to-r from-bbpink to-bbgradientp text-white text-sm font-medium"
          onClick={onPost}
          color="reverse"
          size="medium"
        >
          신고하기
        </button>
      </div>
    </div>
  )
}

export default ReportContainer
