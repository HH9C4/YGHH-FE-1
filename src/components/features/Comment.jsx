import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { __deleteComment } from "../../redux/modules/contentsSlice"
import { useParams } from "react-router-dom";


const Comment = ({ data }) => {
    const dispatch = useDispatch();
    const { id } = useParams()

    console.log("디테일 프롭스 to 코멘트:", data);

    const onDeleteButton = (id) => {
        dispatch(__deleteComment(id))
        // alert("삭제하시겠습니까?")
        // window.location.replace(`/detail/${Id}`)
    };


    return (
        <>
            {
                data.commentList !== undefined &&
                data.commentList.map((item) => {
                    return (
                        <div key={item.commentId}>
                            <div>
                                <div>
                                    {console.log("아이템 개별값", item)}
                                    <div>{item.accountName}</div>
                                    <div>{item.createdAt}</div>
                                    {/* <div>{data.content.gu}</div> */}
                                </div>
                                <div>
                                    <button onClick={onDeleteButton}>삭제</button>
                                </div>
                                <div>{item.comment}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Comment