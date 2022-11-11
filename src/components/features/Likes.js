import React, { useEffect, useState } from "react"

import { contentsApis } from "../../api/instance"

function Likes({ data, level }) {
  console.log("좋아요 level", level)
  console.log("data ", data)
  //유즈 셀렉터로 츄르 뽈스 가져오셈

  // const [Likes, setLikes] = useState(0);
  const [LikeAction, setLikeAction] = useState("")

  const onLike = () => {
    const obj = {
      contentId: data,
      level: level,
    }

    if (LikeAction === "") {
      contentsApis.likesAX(obj).then((response) => {
        console.log("좋아요 리스폰스값", response)
        setLikeAction("liked")
      })
    } else {
      contentsApis.cancelLikesAX(obj).then((response) => {
        setLikeAction("")
      })

      // useEffect((id) => {
      //     contentsApis.likesAX(id).then((response) => {
      //         if (response.data.msg === "success Likes!") {
      //             //얼마나 많은 좋아요를 받았는지
      //             setLikes(response.data.likes.length);
      //             //내가 좋아요를 이미 눌렀는지
      //             response.data.likes.map((like) => {
      //                 if (like.userId === props.userId) {
      //                     //pros.userId는 로그인한 사용자의 Id이기때문
      //                     setLikeAction('liked');
      //                 }
      //             });
      //         } else {
      //             alert('Like에 대한 정보를 가져오지 못했습니다.');
      //         }
      //     });
      // }, []);
    }
  }

  return (
    <div>
      <span key="comment-basic-like">
        <div title="Like">
          {/* isLiked로 구분 */}
          {LikeAction === "" ? (
            <button onClick={onLike}>♡</button>
          ) : (
            <button onClick={onLike}>❤️</button>
          )}
        </div>
        {/* <span style={{ paddingLeft: '4px', cursor: 'auto' }}> {}</span> */}
      </span>
    </div>
  )
}

export default Likes
