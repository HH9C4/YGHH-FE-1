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
                <div className="w-full relative flex justify-center items-center">
                    <button
                        onClick={() => navigate(-1)} className="absolute left-0 active:animate-ping">
                        <svg width="7" height="15" viewBox="0 0 7 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055
13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488
7.63125C0.0804063 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804063
6.54019 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114
0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137
6.63749 0.231252C6.84171 0.400991 6.97013 0.644902 6.99451
0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749
7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133
12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018
13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852
14.0035 5.83749 14.0013Z"
                                fill="#222222" />
                        </svg>
                    </button>
                    <h1 className="text-bb22  font-bold text-[20px]">채팅</h1>
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
                        width="24"
                        height="24"
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
                            <div className='flex justify-between pt-[24px] items-start'>
                                <div className='flex items-center'>
                                    <img
                                        className="rounded-full w-[48px] h-[48px] object-cover shrink-0"
                                        alt='profileImg' src={item.otherProfilePic}></img>

                                    <div className='ml-[12px] flex flex-col'>
                                        <p className='text-[12px] text-bb22 font-bold'>{item.roomName}</p>
                                        <p className='break-all overflow-hidden h-[32px] text-[11px] mt-[4px] font-medium'>asdjkhqwdhjqwhdjhqwjdhqwjdhjqwdhjqwhdjqwhdjhqwjdhjqwdasdasdasdasdasdasdasdasdasdhjqwhdj</p>
                                    </div>
                                </div>
                                <div className='flex justify-end flex-col items-end w-[55px] ml-[12px] shrink-0'>
                                    <p className='text-b11 text-bb22'>{item.lastMessageTime}</p>
                                    <div className='flex justify-center items-center bg-bbred w-[16px] mt-[4px] h-[16px] text-white  rounded-full font-medium text-b12'>1</div>
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