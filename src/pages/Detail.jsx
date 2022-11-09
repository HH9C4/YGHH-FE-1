import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __insertComment, __getContentDetail } from "../redux/modules/contentsSlice"
import DetailPost from '../components/features/DetailPost';
import Comment from '../components/features/Comment';
import { useEffect } from 'react';
import axios from 'axios';
import XMLParser from "react-xml-parser";

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

    // console.log(data);

    const contentId = useParams()
    const dispatch = useDispatch("");

    //셀렉터로 상세조회 데이터 전부 불러오기
    const contentData = useSelector((state) => state.contents.content);
    console.log("상세조회 데이터 셀렉터임", contentData);
    const { id } = useParams()

    //GET 요청 디스패치
    useEffect(() => {
        dispatch(__getContentDetail(id));
    }, []);

    const [comment, setComment] = useState({

    });

    const onChangeInputHandler = (event) => {
        const { name, value } = event.target;
        setComment({
            ...comment,
            [name]: value,
        });
    };


    // 댓글 작성
    const onAddCommentButtonHandler = (event) => {
        event.preventDefault();
        const obj = {
            commentLevel: contentId.id,
            comment: comment.comment,
        }
        if (comment.comment.trim() === "") {
            return alert("댓글을 입력하여 주십시오.");
        }
        dispatch(__insertComment(obj));
        setComment({
            comment: "",
        });
        // window.location.replace(`/detail/${Id}`)
    };

    return (
        <div>
            <div>
                Navbar 들어갈 곳
            </div>

            {/* 디테일포스트 호출 및 셀렉터 값 Props로 넘기기 */}
            <DetailPost data={contentData}></DetailPost>

            <input placeholder='댓글을 입력해주세요.'
                value={comment.comment}
                name="comment"
                type="text"
                onChange={onChangeInputHandler}
                maxLength={100}></input>
            <button onClick={onAddCommentButtonHandler}>전송</button>

            {/* 코멘트 컴포넌트 호출 및 셀렉터 값 Props로 넘기기 */}
            <Comment data={contentData}></Comment>
        </div>
    )
}

export default Detail