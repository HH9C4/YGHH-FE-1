import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { __deleteComment } from "../../redux/modules/contentsSlice"
import { useParams } from "react-router-dom";
import Likes from "../features/Likes"


const Comment = ({ data }) => {
    const dispatch = useDispatch();
    const { id } = useParams()

    //좋아요에 content ID를 넘기기 위해 변수 생성


    console.log("디테일 프롭스 to 코멘트:", data);

    const onDeleteButton = (id) => {
        dispatch(__deleteComment(id))
        // alert("삭제하시겠습니까?")
        // window.location.replace(`/detail/${Id}`)
    };

    //삭제 버튼 작성자 확인
    const checkOwner = {
        'nickName': localStorage.getItem("nickName")

    }

    return (
        <>
            {
                data.commentList !== undefined &&
                data.commentList.map((item) => {
                    return (
                        <div key={item.commentId}>
                            <div>
                                <div>
                                    <div>{item.accountName}</div>
                                    <div>{item.createdAt}</div>
                                    <div>{data.gu}</div>
                                </div>
                                <div>
                                    {checkOwner.nickName === item.accountName ? (<button onClick={(() => { onDeleteButton(item.commentId) })}>삭제</button>) : ''}
                                </div>
                                <div>{item.comment}</div>
                                <Likes postID={data}></Likes>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Comment