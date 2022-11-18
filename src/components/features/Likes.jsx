import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { contentsApis } from "../../api/instance"
import {
  __activateCommentLike,
  __deactivateCommentLike,
  __activateLike,
  __deactivateLike,
} from "../../redux/modules/contentsSlice"

function Likes({ data, level, isLiked, itemId }) {
  const dispatch = useDispatch()

  const onLike = () => {
    const obj = {
      contentId: data,
      level: level,
      isLiked: !isLiked,
      itemId: itemId,
    }
    if (!isLiked && level === 1) {
      dispatch(__activateLike(obj))
    } else if (isLiked && level === 1) {
      dispatch(__deactivateLike(obj))
    }
    // 댓글 좋아요 로직
    if (!isLiked && level === 2) {
      dispatch(__activateCommentLike(obj))
    } else if (isLiked && level === 2) {
      dispatch(__deactivateCommentLike(obj))
    }
  }

  return (
    <div>
      <span key="comment-basic-like">
        <div title="Like">
          {/* isLiked로 구분 */}
          <button className="active:animate-ping" onClick={onLike}>
            {isLiked ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99998 17.5C9.8903 17.5006 9.78158 17.4796 9.68005 17.4381C9.57852 17.3967 9.48618 17.3356 9.40831 17.2583L2.93331 10.775C2.12111 9.9543 1.66553 8.84629 1.66553 7.69165C1.66553 6.53701 2.12111 5.429 2.93331 4.60832C3.75186 3.79208 4.86067 3.33371 6.01664 3.33371C7.17262 3.33371 8.28142 3.79208 9.09998 4.60832L9.99998 5.50832L10.9 4.60832C11.7185 3.79208 12.8273 3.33371 13.9833 3.33371C15.1393 3.33371 16.2481 3.79208 17.0666 4.60832C17.8788 5.429 18.3344 6.53701 18.3344 7.69165C18.3344 8.84629 17.8788 9.9543 17.0666 10.775L10.5916 17.2583C10.5138 17.3356 10.4214 17.3967 10.3199 17.4381C10.2184 17.4796 10.1096 17.5006 9.99998 17.5Z"
                  fill="#FF3535"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0029 17V17L9.99708 17C9.95322 17.0003 9.90973 16.9919 9.86912 16.9753C9.82876 16.9588 9.79203 16.9346 9.761 16.9039C9.76081 16.9037 9.76061 16.9035 9.76042 16.9034L3.28869 10.4233C3.28845 10.4231 3.2882 10.4228 3.28795 10.4226C2.56886 9.69556 2.16553 8.71426 2.16553 7.69168C2.16553 6.6693 2.5687 5.68819 3.28753 4.96124C4.01224 4.23919 4.99358 3.83374 6.01664 3.83374C7.04016 3.83374 8.02191 4.23954 8.74672 4.96219C8.74678 4.96226 8.74685 4.96233 8.74692 4.9624L9.64642 5.8619L9.99998 6.21545L10.3535 5.8619L11.253 4.9624C11.2532 4.96227 11.2533 4.96213 11.2534 4.962C11.9782 4.23947 12.9599 3.83374 13.9833 3.83374C15.0064 3.83374 15.9877 4.23918 16.7124 4.96122C17.4312 5.68818 17.8344 6.66929 17.8344 7.69168C17.8344 8.71424 17.4311 9.69551 16.712 10.4225C16.7118 10.4228 16.7115 10.423 16.7113 10.4233L10.2395 16.9034C10.2393 16.9036 10.2391 16.9038 10.2389 16.904C10.2079 16.9346 10.1712 16.9588 10.1308 16.9753C10.0902 16.9919 10.0467 17.0003 10.0029 17Z"
                  stroke="#FF3535"
                />
              </svg>
            )}
          </button>
        </div>
      </span>
    </div>
  )
}

export default Likes
