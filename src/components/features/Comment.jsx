import React from "react"
import { useDispatch } from "react-redux"
import { __deleteComment } from "../../redux/modules/contentsSlice"
import { useParams } from "react-router-dom"
import Likes from "../features/Likes"

const Comment = ({ data }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  //좋아요에 content ID를 넘기기 위해 변수 생성

  const onDeleteButton = (id) => {
    dispatch(__deleteComment(id))
    // alert("삭제하시겠습니까?")
    // window.location.replace(`/detail/${Id}`)
  };
  console.log("코멘트", data);
  //삭제 버튼 작성자 확인
  const checkOwner = {
    'nickName': localStorage.getItem("nickName")
  }
  //댓글 삭제 요청을 위한 level 변수 생성 
  const level = 2;

  return (
    <>
      {
        data.commentList !== undefined &&
        data.commentList.map((item) => {
          return (
            <div
              className='w-[324px] py-6 px-[26px] mx-[25px] mb-6
              shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white rounded-[8px]'
              key={item.commentId}>

              <div className='flex justify-between mb-6'>
                <div className='flex items-center'>
                  <img className='w-[32px] h-[32px] rounded-full'
                    src={item.profileImage} />
                  <p className='w-[76px]  text-[14px] pl-[8px] text-left font-bold '>
                    {item.accountName}</p>
                </div>

                <div className=''>
                  {checkOwner.nickName === item.accountName ?
                    (<button
                      className='w-[25px] text-[14px] font-medium '
                      onClick={(() => { onDeleteButton(item.commentId) })}>삭제</button>) : ''}
                </div>
              </div>
              <div className='flex mb-6'>
                <Likes data={item.commentId} level={level} isLiked={item.isLiked} itemId={item.commentId}></Likes>
                <p className='text-[18px] font-semibold ml-1'>{item.likeCount}</p>
              </div>
              <div className='break-all  mb-8 text-[14px]'>{item.comment}</div>
              <div className=' mb-2 text-[13px] text-bbBB flex'>
                <p>{item.createdAt}</p>
                <p className='mx-[12px]'>|</p>
                <p className='w-[70px]'>{data.gu}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Comment
