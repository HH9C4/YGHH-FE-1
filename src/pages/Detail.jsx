import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __insertComment,
  __getContentDetail,
} from "../redux/modules/contentsSlice"
import DetailPost from "../components/features/DetailPost"
import Comment from "../components/features/Comment"
import { useEffect } from "react"
import Layout from "../components/layout/Layout"
import { useNavigate } from 'react-router-dom'

//yarn add react-xml-parser 로 json 파싱 도와주는 친구임

const Detail = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const URL = "http://openapi.seoul.go.kr:8088/sample/json/citydata/1/5/광화문·덕수궁";

  // //파싱 해주는 함수
  // function parseStr(dataSet) {
  //     const dataArr = new XMLParser().parseFromString(dataSet).children;
  //     console.log("파싱한 결과값", dataArr);
  // }

  // const fetchData = async () => {
  //     try {
  //         setError(null);
  //         setData(null);
  //         setLoading(true);

  //         const response = await axios.get(URL, {
  //             params: {
  //                 serviceKey: process.env.REACT_APP_API_LIVE_SEOUL,
  //                 numOfRows: 1,
  //                 pageNo: 10
  //             }
  //         });
  //         console.log("파싱 전, XML타입의 서울시 Response", response);
  //         // setData(response.data);
  //         parseStr(response.data);
  //     } catch (e) {
  //         setError(e);
  //     }
  //     setLoading(false);
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);



  const dispatch = useDispatch("")
  const navigate = useNavigate();
  //셀렉터로 상세조회 데이터 전부 불러오기
  const contentData = useSelector((state) => state.contents.content)

  const { id } = useParams()
  console.log("상세조회", contentData);

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
    console.log(obj)
    dispatch(__insertComment(obj))
    setComment({
      comment: "",
    })
  }
  //뒤로가기 버튼
  const goback = () => {
    window.history.back()
  }

  return (
    <Layout>
      <div className='pt-[32px] pl-[25px] flex items-center'>
        <svg
          onClick={goback}
          width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" fill="#231F20" />
        </svg>
        <p className='pl-[98px] pr-[146px] text-[18px] font-bold'>게시물 상세</p>
      </div>
      {/* 디테일포스트 호출 및 셀렉터 값 Props로 넘기기 */}
      <DetailPost data={contentData}></DetailPost>




      <div className='w-[324px] h-[56px] mx-[24px] my-[24px] rounded-[8px] px-[26px] shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white flex justify-between items-center'>
        <input
          className='
        placeholder:text-[14px] placeholder:font-medium leading-10 text-[14px] text-bb22
        '
          placeholder="댓글을 입력해주세요."
          value={comment.comment}
          name="comment"
          type="text"
          onChange={onChangeInputHandler}
          maxLength={100}
        />
        <button
          className='text-bbpink text-[14px] w-[25px] h-[16px] font-bold  '
          onClick={onAddCommentButtonHandler}>게시</button>
      </div>

      {/* 코멘트 컴포넌트 호출 및 셀렉터 값 Props로 넘기기 */}
      <Comment data={contentData}></Comment>
    </Layout>
  )
}

export default Detail
