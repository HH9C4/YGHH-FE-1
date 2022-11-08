import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { __getContentDetail, __deleteContent } from '../../redux/modules/contentsSlice'

const DetailPost = ({ data }) => {

    // const postDetail = useSelector((state) => state.content.content);
    const dispatch = useDispatch();
    const { id } = useParams()


    // 게시글 삭제 버튼
    const onPostDelete = (payload) => {
        dispatch(__deleteContent(payload));
    };

    // return (
    //     <>
    //         {
    //             data !== undefined &&
    //             data.map(() => {
    //                 <div>
    //                     <div>
    //                         {/* 포스트 전체 컨테이너 */}
    //                         <div>
    //                             {/* 좋아요, 조회수, 댓글 수, 수정삭제 컨테이너 */}
    //                             <div>
    //                                 ❤️{item.likeCount}
    //                             </div>
    //                             <div>
    //                                 👀{item.views}
    //                             </div>
    //                             <div>
    //                                 💬{/* 댓글 수 표시할 곳 */}
    //                             </div>
    //                             <div>
    //                                 <button>수정</button><button onClick={onPostDelete}>삭제</button>
    //                             </div>
    //                         </div>
    //                         <div>{item.imageUrl}</div>
    //                         <div>{item.comments.comment}</div>
    //                         <div>
    //                             <div>{item.accountName}</div>
    //                             <div>{item.createdAt}</div>
    //                             <div>{item.gu}</div>
    //                         </div>
    //                         <div>질문 버튼 들어갈 곳</div>
    //                     </div>
    //                 </div>
    //             })
    //         }
    //     </>
    // )
}

export default DetailPost