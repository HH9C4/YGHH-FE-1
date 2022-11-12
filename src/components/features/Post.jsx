import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getContentDetail,
  __deleteContent,
} from "../../redux/modules/contentsSlice"

const DetailPost = ({ posts }) => {
  // const postDetail = useSelector((state) => state.content.content);
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  // 게시글 삭제 버튼
  const onPostDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(__deleteContent(id))
      window.alert("게시글이 삭제되었습니다.")
    }
  }

  const checkOwner = {
    nickName: localStorage.getItem("nickName"),
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

                    {checkOwner.nickName === data.accountName ? (
                      <button onClick={() =>
                        navigate(`/write/${data.gu}/${data.postId}`, {
                          state: data,
                        })
                      }>수정</button>
                    ) : (
                      ""
                    )}
                    {checkOwner.nickName === data.accountName ? (
                      <button onClick={() => {
                        onPostDelete(data.postId)
                      }}>삭제</button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
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
                  <button
                    onClick={() =>
                      navigate(`/search/${data.tag.split(" ")[0]}/new`)
                    }
                  >
                    {data.tag.split(" ")[0]}
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/search/${data.tag.split(" ")[1]}/new`)
                    }
                  >
                    {data.tag.split(" ")[1]}
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/search/${data.tag.split(" ")[2]}/new`)
                    }
                  >
                    {data.tag.split(" ")[2]}
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/search/${data.tag.split(" ")[3]}/new`)
                    }
                  >
                    {data.tag.split(" ")[3]}
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/search/${data.tag.split(" ")[4]}/new`)
                    }
                  >
                    {data.tag.split(" ")[4]}
                  </button>
                </div>
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
