import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { contentsApis } from "../../api/instance"
import { __activateCommentLike, __deactivateCommentLike, __activateLike, __deactivateLike } from '../../redux/modules/contentsSlice'

function Likes({ data, level, isLiked, itemId }) {
  const dispatch = useDispatch();

  const onLike = () => {
    const obj = {
      contentId: data,
      level: level,
      isLiked: !isLiked,
      itemId: itemId,
    }
    if (!isLiked && (level === 1)) {
      dispatch(__activateLike(obj))
    } else if (isLiked && (level === 1)) {
      dispatch(__deactivateLike(obj))
    }
    // 댓글 좋아요 로직
    if (!isLiked && (level === 2)) {
      dispatch(__activateCommentLike(obj))
    } else if (isLiked && (level === 2)) {
      dispatch(__deactivateCommentLike(obj))
    }
  }

  return (
    <div>
      <span key="comment-basic-like">
        <div title="Like">
          {/* isLiked로 구분 */}
          <button onClick={onLike}>{isLiked ? "❤️" : "♡"}</button>
        </div>
      </span>
    </div>
  )
}

export default Likes
