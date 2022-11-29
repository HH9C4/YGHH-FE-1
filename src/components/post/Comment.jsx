import React from "react"
import { useDispatch } from "react-redux"
import { __deleteComment } from "../../redux/modules/contentsSlice"
import { useParams } from "react-router-dom"
import Likes from "./Likes"

const Comment = ({ data }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  //좋아요에 content ID를 넘기기 위해 변수 생성

  const onDeleteButton = (id) => {
    dispatch(__deleteComment(id))
    // alert("삭제하시겠습니까?")
    // window.location.replace(`/detail/${Id}`)
  }
  console.log("코멘트", data)
  //삭제 버튼 작성자 확인
  const checkOwner = {
    nickName: localStorage.getItem("nickName"),
  }
  //댓글 삭제 요청을 위한 level 변수 생성
  const level = 2

  return (
    <>
      {data.commentList !== undefined &&
        data.commentList.map((item) => {
          return (
            <div
              className="w-full px-[24px]
             shrink-0 border-t-[0.5px] border-bbBB 
             shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] 
             last-of-type:rounded-b-md last-of-type:mb-8 bg-white pb-6"
              key={item.commentId}
            >
              <div className="flex justify-between pt-[24px] mb-[8px] ">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]  rounded-full"
                    src={item.profileImage}
                  />
                  <p className=" text-[12px] pl-[3px] text-left font-bold ">
                    {item.accountName}
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <Likes
                    data={item.commentId}
                    level={level}
                    isLiked={item.isLiked}
                    itemId={item.commentId}
                  />
                  <p className="text-[12px] h-[14px] font-semibold ml-1">
                    {item.likeCount}
                  </p>
                </div>
              </div>
              <div className="break-all mb-[8px] text-[12px]">
                {item.comment}
              </div>
              <div className="text-[11px] text-bb66 flex">
                <p>{item.createdAt}</p>
                <p className="mx-2">|</p>
                <p className="">{data.gu}</p>
                {checkOwner.nickName === item.accountName ? (
                  <>
                    <p className="mx-2 text-bb66">|</p>
                    <button
                      className=" text-[11px] font-medium text-bb22 "
                      onClick={() => {
                        onDeleteButton(item.commentId)
                      }}
                    >
                      삭제
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Comment
