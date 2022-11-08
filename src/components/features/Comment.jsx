import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { __deleteComment } from "../../redux/modules/contentsSlice"
import { useParams } from "react-router-dom";


const Comment = ({ data }) => {
    const dispatch = useDispatch();
    const { id } = useParams()


    const onDeleteButton = (id) => {
        dispatch(__deleteComment(id))
        // alert("삭제하시겠습니까?")
        // window.location.replace(`/detail/${Id}`)
    };
    const commentDetail = useSelector((state) => state.contentsSlice.content);
    console.log(commentDetail);

    // return (
    //     <>
    //         {
    //             data !== undefined &&
    //             data.map((item) => {
    //                 <div>
    //                     <div key={item.comments.commentId}>
    //                         <div>
    //                             <div>item.comments.accountName</div>
    //                             <div>item.comments.createdAt</div>
    //                             <div>item.gu</div>
    //                         </div>
    //                         <div>
    //                             <button onClick={onDeleteButton}>삭제</button>
    //                         </div>
    //                         <div>{item.comments.comment}</div>
    //                     </div>
    //                 </div>
    //             })
    //         }
    //     </>
    // )

}

export default Comment