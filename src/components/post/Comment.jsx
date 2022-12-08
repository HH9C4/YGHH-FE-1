import React from "react"
import Likes from "./Likes"
import { commentApis } from "../../api/instance"

import { useRecoilState } from "recoil"
import { postDetail } from "../state/store"
const Comment = () => {
  const [data, setData] = useRecoilState(postDetail)
  // const data = useSelector((state) => state.contents.content)
  const nickName = localStorage.getItem("nickName")

  const deleteComment = async (id) => {
    try {
      // const res = await commentApis.commentDeletePostAX(payload)
      if (window.confirm("작성하신 댓글을 삭제하시겠습니까?")) {
        const res = await commentApis.commentDeletePostAX(id)
        const del = {
          ...data,
          commentList: data.commentList.filter((cmt) => cmt.commentId !== id),
        }
        setData(del)
        return
      }
    } catch (error) {}
  }

  const onDeleteButton = (id) => {
    deleteComment(id)
  }

  //삭제 버튼 작성자 확인
  const checkOwner = {
    nickName: nickName,
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
                    alt="profileIMG"
                    className="w-[20px] h-[20px] border-[0.5px] border-bbBB rounded-full"
                    src={item.profileImage}
                  />
                  <p className=" text-[12px] pl-[3px] text-left font-bold ">
                    {item.accountName}
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <Likes
                    level={level}
                    isLiked={item.isLiked}
                    count={item.likeCount}
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
