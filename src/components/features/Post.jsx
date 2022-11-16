import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getContentDetail,
  __deleteContent,
} from "../../redux/modules/contentsSlice"

const Post = ({ posts }) => {
  // const postDetail = useSelector((state) => state.content.content);
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  // 게시글 삭제 버튼
  const onPostDelete = (id, gu) => {
    // if (window.confirm("정말 삭제하시겠습니까?")) {
    //   dispatch(__deleteContent(id))
    //   window.alert("게시글이 삭제되었습니다.")
    // }
    const obj = {
      postId: id,
      gu: gu,
    }
    console.log("포스트 페지", obj)
    dispatch(__deleteContent(obj))
  }

  const checkOwner = {
    nickName: localStorage.getItem("nickName"),
  }
  return (
    <>
      {posts !== undefined &&
        posts.map((data) => {
          if (posts.length !== 0)
            return (
              <div key={String(data.postId) + Math.random()}>
                <div>
                  {/* 포스트 전체 컨테이너 */}
                  <div>
                    {/* 좋아요, 조회수, 댓글 수, 수정삭제 컨테이너 */}
                    <div>❤️{data.likeCount}</div>
                    <div>👀{data.views}</div>
                    <div>💬{data.commentCount}</div>
                    <div>
                      {checkOwner.nickName === data.accountName ? (
                        <button
                          onClick={() =>
                            navigate(`/write/${data.gu}/${data.postId}`, {
                              state: data,
                            })
                          }
                        >
                          수정
                        </button>
                      ) : (
                        ""
                      )}
                      {checkOwner.nickName === data.accountName ? (
                        <button
                          onClick={() => {
                            onPostDelete(data.postId, data.gu)
                          }}
                        >
                          삭제
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div onClick={() => navigate(`/detail/${data.postId}`)}>
                    {data.imageUrl.map((img) => {
                      return (
                        <img
                          src={img}
                          style={{
                            display:
                              data.imageUrl !== undefined ? "block" : "none",
                          }}
                        />
                      )
                    })}
                  </div>
                  <div>
                    {data.tagList !== (undefined || null) &&
                      data.tagList.map((postTag) => {
                        return (
                          <button
                            onClick={() =>
                              navigate(`/search/${postTag.substring(1)}/new`)
                            }
                          >
                            {postTag}
                          </button>
                        )
                      })}
                  </div>
                  <div onClick={() => navigate(`/detail/${data.postId}`)}>
                    {data.content}
                  </div>
                  <div>
                    <div>{data.accountName}</div>
                    <div>
                      {data.createdAt === data.modifiedAt
                        ? `${data.modifiedAt}`
                        : `${data.modifiedAt} 수정됨`}
                    </div>
                    <div>{data.gu}</div>
                  </div>
                  <div>태그 자리</div>
                </div>
              </div>
            )
        })}
    </>
  )
}

export default Post
