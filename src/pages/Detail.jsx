import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __insertComment } from "../redux/modules/contentsSlice"
import DetailPost from '../components/features/DetailPost';
import Comment from '../components/features/Comment';


const Detail = () => {
    const contentId = useParams()
    const dispatch = useDispatch("");

    const contentData = useSelector((state) => state.contentsSlice.content);

    const [comment, setComment] = useState({
        comment: "",
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
            comment,
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

            {/* 디테일포스트 컴포넌트 호출 */}
            <DetailPost></DetailPost>

            <input placeholder='댓글을 입력해주세요.'
                value={comment.comment}
                name="comment"
                type="text"
                onChange={onChangeInputHandler}
                maxLength={100}></input>
            <button onClick={onAddCommentButtonHandler}>전송</button>

            {/* 코멘트 컴포넌트 호출 */}
            <Comment contentData={contentData}></Comment>
        </div>
    )
}

export default Detail