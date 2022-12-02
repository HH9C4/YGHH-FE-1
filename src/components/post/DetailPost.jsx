import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  __getContentDetail,
  __deleteContent,
} from "../../redux/modules/contentsSlice"
import Likes from "./Likes"
import EditToggle from "../elements/EditToggle"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const DetailPost = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.contents.content)
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

  const settings = {
    dots: true,
    dotsClass: "post",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeen: 200,
  }

  useEffect(() => { }, [])

  const level = 1

  return (
    <>
      <div className="mx-6 bg-white p-6  rounded-t-md shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={data.profileImage}
                className="w-8 h-8 rounded-full object-cover"
              ></img>
              <div className="ml-2 text-sm text-bb22 font-bold">
                {data.accountName}
              </div>
            </div>
            <div className="z-20">
              <EditToggle data={data} />
            </div>
          </div>
          {data.imageUrl && data.imageUrl.length !== 0 ? (
            <>
              <Slider {...settings}>
                {data.imageUrl.map((img) => {
                  return (
                    <img
                      className="mt-[12px] shrink-0 w-full h-[300px] object-cover"
                      key={img}
                      onClick={() => navigate(`/detail/${data.postId}`)}
                      src={img}
                    />
                  )
                })}
              </Slider>
            </>
          ) : (
            ""
          )}

          {/* 좋아요, 조회수, 댓글 수, 수정삭제 컨테이너 */}
          <div className="flex justify-between items-end">
            <div className="mt-6 flex items-center">
              <Likes
                data={data.postId}
                level={level}
                isLiked={data.isLiked}
                count={data.likeCount}
              />
              <div className="ml-1 text-lg text-bb22 font-semibold">
                {data.likeCount}
              </div>
            </div>
            <div className="w-[48px] h-[24px] border-bb66 text-b12 leading-6 border-[0.5px] text-center rounded-full text-bb66">
              {data.category}
            </div>
          </div>
          <div
            className="break-all text-sm text-bb22 mt-6 mb-4"
            onClick={() => navigate(`/detail/${data.postId}`)}
          >
            {data.content}
          </div>
          <div className="flex flex-wrap">
            {data.tagList &&
              data.tagList.map((postTag) => {
                return (
                  <button
                    key={postTag}
                    className="w-15 h-8 mr-2 mb-2 text-bb22 rounded px-[9px] bg-bbyellow text-xs "
                    onClick={() => navigate(`/search/1/${postTag}/new`)}
                  >
                    # {postTag}
                  </button>
                )
              })}
          </div>
          <div className="mt-6 flex justify-between text-bb66 text-[13px] ">
            <div className="flex">
              <div className="mr-3">
                {data.createdAt === data.modifiedAt
                  ? `${data.modifiedAt}`
                  : `${data.modifiedAt} 수정됨`}
              </div>
              <div>|</div>
              <div className="ml-3">{data.gu}</div>
            </div>
            <div className="flex">
              <div className="flex mr-4 items-center">
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.58 7.667c-.427-.74-2.773-4.454-6.76-4.334-3.687.094-5.82 3.334-6.4 4.334a.667.667 0 0 0 0 .666c.42.727 2.667 4.334 6.593 4.334h.167c3.687-.094 5.827-3.334 6.4-4.334a.667.667 0 0 0 0-.666zm-6.433 3.666C5.273 11.4 3.4 8.94 2.813 8 3.48 6.927 5.22 4.733 7.887 4.667c2.86-.074 4.74 2.393 5.333 3.333-.687 1.073-2.407 3.267-5.073 3.333z"
                    fill="#666"
                  />
                  <path
                    d="M8 5.667a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    fill="#666"
                  />
                </svg>
                {data.views}
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334zM10.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334zM5.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334z"
                    fill="#666"
                  />
                  <path
                    d="M12.713 3.287A6.667 6.667 0 0 0 1.86 10.62a.707.707 0 0 1 .06.427l-.587 2.82a.666.666 0 0 0 .404.753c.084.033.173.049.263.047h.133l2.854-.574a.841.841 0 0 1 .426.06A6.666 6.666 0 0 0 12.747 3.3l-.034-.013zm.554 5.573a5.334 5.334 0 0 1-7.334 4.053 2.174 2.174 0 0 0-.833-.173c-.125 0-.25.012-.373.033l-1.88.38.38-1.88a2.06 2.06 0 0 0-.14-1.206 5.334 5.334 0 1 1 10.18-1.207z"
                    fill="#666"
                  />
                </svg>
                {data.commentCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPost
