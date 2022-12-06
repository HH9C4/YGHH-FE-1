import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { __deleteContent } from "../../redux/modules/contentsSlice"
import { __CreateRoom } from "../../redux/modules/chatSlice"
const UserToggle = ({ data }) => {
    const [display, setDisplay] = useState(false)
    const onToggle = () => {
        setDisplay(!display)
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // 게시글 삭제 버튼
    const onPostDelete = (id, gu) => {
        const obj = {
            postId: id,
            gu: gu,
        }
        dispatch(__deleteContent(obj))
    }

    const onClickChatting = () => {
        const obj = {
            otherUserNickname: data.accountName
        }
        const username = localStorage.getItem("nickName");
        if (username !== data.accountName) {
            dispatch(__CreateRoom(obj));
        }
        // setTimeout(
        //   function () {
        //     // 연결되었을 때 콜백함수 실행
        //     // navigate(`/ChatRoomPage/${chatList2.roomId}`);
        //     navigate(`/ChatRoomPage/1`);
        //   },
        //   300,
        // );
    }

    return (
        <>
            {localStorage.getItem("nickName") !== data.accountName ? (
                <div className="flex  hover:cursor-pointer relative">
                    <button
                        onClick={onToggle}
                        className="flex w-[40px] h-[40px]  absolute top-[-20px] left-[-30px]">
                    </button>
                    {display ? (
                        <div className="h-24 w-24 rounded-md absolute mt-[24px] left-[-33px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                            <button
                                className="h-12 text-center w-24 text-sm text-bb22"
                                onClick={onClickChatting}
                            >
                                채팅하기
                            </button>
                            <hr className="w-[88px] mx-1 font-medium border-bbBB" />
                            <button
                                className="h-12 text-center w-24 text-sm text-bb22"
                                onClick={() => {
                                    onPostDelete(data.postId, data.gu)
                                }}
                            >
                                신고하기
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    )
}

export default UserToggle
