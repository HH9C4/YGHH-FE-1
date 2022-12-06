import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __insertComment,
  __getContentDetail,
} from "../redux/modules/contentsSlice"
import { __CreateRoom } from "../redux/modules/chatSlice"
import DetailPost from "../components/post/DetailPost"
import Comment from "../components/post/Comment"
import { useEffect } from "react"
import Layout from "../components/layout/Layout"
import { useNavigate } from "react-router-dom"
import { setLocation } from "../redux/modules/memberSlice"
import { json } from 'react-router-dom'

const Detail = () => {
  const dispatch = useDispatch("")
  const navigate = useNavigate()
  //셀렉터로 상세조회 데이터 전부 불러오기
  const contentData = useSelector((state) => state.contents.content)
  const chatList2 = useSelector((state) => state.chatting.chatList2);
  const [onToggleModal, setOnToggleModal] = useState(false)
  const { id } = useParams()
  console.log("chatList2", chatList2);
  console.log("contentData", contentData);
  //GET 요청 디스패치
  useEffect(() => {
    dispatch(__getContentDetail(id))
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
    dispatch(__insertComment(obj))
    setComment({
      comment: "",
    })
  }
  //뒤로가기 버튼
  const goback = () => {
    window.history.back()
  }

  //채팅하기 기능
  //CreateRoom은 입장시 데이터를 chatList2로 보내서 결국 다른 데이터를 넣어줌 
  //채팅방 입장시 바로 연결이 안됨 데이터를 보내는게 이동하는것 보다 느려서 그럴거라 판단이되서 setTimeout을 줌
  const onClickChatting = () => {
    const obj = {
      otherUserNickname: contentData.accountName
    }
    const username = localStorage.getItem("nickName");
    if (username !== contentData.accountName) {
      dispatch(__CreateRoom(obj));
    }
    // setTimeout(
    //   function () {
    //     // 연결되었을 때 콜백함수 실행
    //     // navigate(`/ChatRoomPage/${chatList2.roomId}`);
    //     navigate(`/ChatRoomPage/1`);
    //   },
    //   300,
    // );
  }



  useEffect(() => {
    dispatch(setLocation("com"))
  }, [])

  return (
    <Layout>
      <div className="w-full pt-[32px] pb-[100px]">
        <div className="ml-[25px] mr-[26px] flex items-center mb-[32px]">
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
          <DetailPost></DetailPost>
        </div>
        <div className="fixed bottom-[80px] left-0 w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-bbLpurple">
          <div className="flex items-center h-14 w-full max-w-[420px] mx-auto rounded-[5px] px-[12px] shrink-0">
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
          </div>
        </div>
        {/* 코멘트 컴포넌트 호출 및 셀렉터 값 Props로 넘기기 */}
        <div className="px-8">
          <Comment></Comment>
        </div>
      </div>
    </Layout>
  )
}

export default Detail
