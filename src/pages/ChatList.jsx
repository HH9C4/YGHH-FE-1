import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __getinitialChatList2, __getRoomList } from "../redux/modules/chatSlice";
import Layout from '../components/layout/Layout';

const ChatList = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const Room = useSelector((state) => state.chatting.roomList);


    console.log("받아오는 룸값", Room);

    useEffect(() => {
        dispatch(__getRoomList());
    }, []);

    const onClickChatting = (item) => {
        navigator(`/ChatRoomPage/${item.postId}`)
        setTimeout(
            function () {
                dispatch(__getinitialChatList2({
                    roomId: item.roomId
                }
                )
                );
            }
            , 200);
    }


    //여기 부분을 풀면 채팅 이 잘나오고 방이 안들어가짐
    //방들어갈떄 API한개.
    //roomID가  undefind가 나타남. 방연결이 되었다안되었다함
    // chatList쪽에 dispatch에 SetTimeout을 설정한후 roomId를 직접 로컬로 받아서 sub에 넣으니까 해결은됨 f5시에 문자가 두개씩나타나는 오류가생김.

    //들어갈때 get요청

    // window.onload = function(event) {
    //   window.location.reload()
    //   //event.preventDefault()
    // };


    return (
        <Layout>
            <div className="w-full pt-6 pl-[25px] pr-[26px] pb-8">
                <div className="w-full flex items-center">
                    <button onClick={() => navigate(-1)} className="active:animate-ping">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                fill="#231F20"
                            />
                        </svg>
                    </button>
                    <h1 className="text-bb22 pl-[158px] font-bold text-[20px]">채팅</h1>
                </div>
                <div className="w-full h-[48px]  mt-[20px] flex items-center bg-white rounded-[5px]">
                    <input
                        // className="w-full pl-[16px] pt[12px] placeholder:text-[14px]  outline-0 mr-1"
                        className="w-full pl-[16px] pt[12px] placeholder:text-[14px]  outline-0 mr-1"
                        name="keyword"
                        //   defaultValue={
                        //     params.searchWord !== (undefined || "undefined")
                        //       ? params.searchWord
                        //       : search.keyword
                        //   }
                        //   value={search.keyword}
                        //   onChange={searchHandle}
                        placeholder="닉네임 검색"
                    ></input>
                    <svg
                        className="mr-[19px]"
                        //   onClick={onSearch}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"
                            fill="#231F20"
                        />
                    </svg>
                </div>
                {
                    Room !== undefined &&
                    Room.map((item) => {
                        return (
                            <div className='flex pt-[24px]'>
                                <img
                                    className="rounded-full w-[48px] h-[48px] object-cover"
                                    alt='profileImg' src={item.otherProfilePic}></img>
                                <div className='pl-[12px] flex flex-col'>
                                    <div className='text-[12px] font-bold'>{item.roomName}</div>
                                    <div className='text-[11px] pt-[8px] font-medium	'>{item.lastMessage}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )

}




export default ChatList;