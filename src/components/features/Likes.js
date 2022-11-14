import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { contentsApis } from "../../api/instance"
import { __getContentDetail, __activateLike, __deactivateLike } from '../../redux/modules/contentsSlice'

function Likes({ data, level, isLiked, count }) {
  console.log("넘어오는 이즈라익드", isLiked);
  const dispatch = useDispatch();
  const [LikeAction, setLikeAction] = useState("")

  // console.log("프롭스로 받아온 카운트 값", count);
  const onLike = () => {
    const obj = {
      contentId: data,
      level: level,
      isLiked: !isLiked,
      // likeCount: count,
    }
    if (!isLiked) {
      dispatch(__activateLike(obj))
      // setLikeAction("Liked!")
    } else {
      dispatch(__deactivateLike(obj))
      // setLikeAction("")
    }
  }



  return (
    <div>
      <span key="comment-basic-like">
        <div title="Like">
          {/* isLiked로 구분 */}
          <button onClick={onLike}>{isLiked ? "❤️" : "♡"}</button>
          {/* {!LikeAction ? (
            <button onClick={onLike}>♡</button>
          ) : (
            <button onClick={onLike}>❤️</button>
          )} */}
        </div>
        {/* <span style={{ paddingLeft: '4px', cursor: 'auto' }}> {}</span> */}
      </span>
    </div>
  )
}

export default Likes
