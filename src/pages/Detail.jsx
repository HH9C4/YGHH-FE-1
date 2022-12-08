import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { contentsApis, commentApis } from "../api/instance"
import { postDetail } from "../components/state/store"
import { useRecoilState } from "recoil"
import DetailPost from "../components/post/DetailPost"
import Comment from "../components/post/Comment"
import { useEffect } from "react"
import Layout from "../components/layout/Layout"
import { useNavigate } from "react-router-dom"
import { setLocation } from "../redux/modules/memberSlice"

const Detail = () => {
  const dispatch = useDispatch("")
  const navigate = useNavigate()
  //셀렉터로 상세조회 데이터 전부 불러오기
  const [contentData, setContentData] = useRecoilState(postDetail)
  // const contentData = useSelector((state) => state.contents.content)

  const { id } = useParams()
  //게시글 상세조회
  const getContentDetail = async (payload) => {
    try {
      const res = await contentsApis.getContentDetailAX(payload)

      setContentData(res.data.data)
      return
    } catch (error) {
      return
    }
  }

  //댓글 작성
  const insertComment = async (payload) => {
    try {
      const res = await commentApis.commentAddAX(payload)
      if (res.data.status === "201 CREATED") {
        const cmt = res.data.data
        setContentData({
          ...contentData,
          commentList: [...contentData.commentList, cmt],
        })
        console.log(contentData)
      }
    } catch (error) {}
  }

  //GET 요청 디스패치
  useEffect(() => {
    getContentDetail(id)
  }, [dispatch, id, contentData.isLiked])

  const [comment, setComment] = useState({})

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target
    setComment({
      ...comment,
      [name]: value,
    })
  }

  // 댓글 작성
  const onAddCommentButtonHandler = (event) => {
    event.preventDefault()
    const obj = {
      //코멘트 레벨을 스트링 1
      //url 마지막 주소값이 포스트 아이디
      commentLevel: String(contentData.postId),
      comment: comment.comment,
    }
    if (comment.comment.trim() === "") {
      return alert("댓글을 입력하여 주십시오.")
    }
    insertComment(obj)
    setComment({
      comment: "",
    })
  }
  //뒤로가기 버튼
  const goback = () => {
    window.history.back()
  }

  useEffect(() => {
    dispatch(setLocation("list"))
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Layout>
      <div className="w-full pt-[32px] pb-[100px]">
        <div className="ml-[25px] mr-[26px] flex items-center mb-[32px] cursor-pointer">
          <svg
            onClick={goback}
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
        </div>
        <div className="px-2">
          <DetailPost data={contentData} />
        </div>
        <div className="fixed bottom-[80px] left-0 w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-bbLpurple">
          <form className="flex items-center h-14 w-full max-w-[420px] mx-auto rounded-[5px] px-[12px] shrink-0">
            <input
              className="placeholder:text-[14px] rounded-md placeholder:font-medium leading-10 text-[14px] text-bb22
        outline-0 pl-2 h-10 w-full ml-5 "
              placeholder="댓글을 입력해주세요."
              value={comment.comment}
              name="comment"
              type="text"
              onChange={onChangeInputHandler}
              maxLength={100}
            />
            <button
              className="text-bbpink text-[14px] w-12 ml-2 mr-4 font-bold"
              onClick={onAddCommentButtonHandler}
            >
              게시
            </button>
          </form>
        </div>
        {/* 코멘트 컴포넌트 호출 및 셀렉터 값 Props로 넘기기 */}
        <div className="px-8">
          <Comment />
        </div>
      </div>
    </Layout>
  )
}

export default Detail
