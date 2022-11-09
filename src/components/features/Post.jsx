import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getContentDetail,
  __deleteContent,
} from "../../redux/modules/contentsSlice"

const DetailPost = ({ posts }) => {
  // const postDetail = useSelector((state) => state.content.content);
  const dispatch = useDispatch()
  const { id } = useParams()

  // 게시글 삭제 버튼
  const onPostDelete = (payload) => {
    dispatch(__deleteContent(payload))
  }

  return (
    <>
      {posts.map((data) => {
        if (posts.length !== 0)
          return (
            <div>
              <div>
                {/* 포스트 전체 컨테이너 */}
                <div>
                  {/* 좋아요, 조회수, 댓글 수, 수정삭제 컨테이너 */}
                  <div>❤️{data.likeCount}</div>
                  <div>👀{data.views}</div>
                  <div>💬{/* 댓글 수 표시할 곳 */}</div>
                  <div>
                    <button>수정</button>
                    <button onClick={onPostDelete}>삭제</button>
                  </div>
                </div>
                <img
                  src={data.imageUrl}
                  style={{
                    display: data.imageUrl !== undefined ? "block" : "none",
                  }}
                />
                <div>{data.content}</div>
                <div>
                  <div>{data.accountName}</div>
                  <div>
                    {data.createdAt === data.modifiedAt
                      ? `${data.modifiedAt}`
                      : `${data.modifiedAt} 수정됨`}
                  </div>
                  <div>{data.gu}</div>
                </div>
                <div>질문 버튼 들어갈 곳</div>
              </div>
            </div>
          )
      })}
    </>
  )
}

export default DetailPost
