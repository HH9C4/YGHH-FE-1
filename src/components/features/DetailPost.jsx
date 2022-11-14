import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getContentDetail,
  __deleteContent,
} from "../../redux/modules/contentsSlice"
import Likes from "../features/Likes"

const DetailPost = ({ data }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log("디테일 프롭스 to 디테일포스트:", data)
  // 게시글 삭제 버튼
  const onPostDelete = (postId) => {
    const obj = {
      postId: postId,
      gu: data.gu,
    }
    dispatch(__deleteContent(obj))
  }

  //삭제 버튼 작성자 확인
  const checkOwner = {
    nickName: localStorage.getItem("nickName"),
  }

  const level = 1


  return (
    <>
      {
        <div >
          <div>
            {/* 포스트 전체 컨테이너 */}
            <div>
              {/* 좋아요, 조회수, 댓글 수, 수정삭제 컨테이너 */}
              <div>
                <Likes data={data.postId} level={level} isLiked={data.isLiked} count={data.likeCount}></Likes>
                ❤️{data.likeCount === undefined ? 0 : data.likeCount}
              </div>
              <div>👀{data.views}</div>
              <div>💬{data.commentCount}</div>
              <div>
                {checkOwner.nickName === data.accountName ? (
                  <button>수정</button>
                ) : (
                  ""
                )}
                {checkOwner.nickName === data.accountName ? (
                  <button
                    onClick={() => {
                      onPostDelete(data.postId)
                    }}
                  >
                    삭제
                  </button>
                ) : (
                  ""
                )}
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
            <div>태그 들어갈 곳</div>
          </div>
        </div>
      }
    </>
  )
}

export default DetailPost
