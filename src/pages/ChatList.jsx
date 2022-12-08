import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { __getinitialChatList2, __getRoomList } from "../redux/modules/chatSlice";
import { chatApis } from "../api/instance"
import Layout from '../components/layout/Layout';
import useInput from "../hooks/useInput"


const ChatList = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch, searchHandle] = useInput()
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState();
    const params = useParams()

    const fetchRooms = async () => {
        const response = await chatApis.getRoomList()
        setRoom(response.data.data);
        setRooms(response.data.data);
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        setRoom(rooms.filter((item) =>
            item.roomName.includes(search.keyword)));
    }, [search.keyword]);

    // const onSearch = () => {
    //     setRoom(rooms.filter((item) =>
    //         item.roomName.includes(search.keyword)));
    // }

    const onClickChatting = (roomId) => {
        window.location.replace(`/ChatRoomPage/${roomId}`);
    }
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
                        className="w-full pl-[16px] pt[12px] placeholder:text-[14px]  outline-0 mr-1"
                        name="keyword"
                        defaultValue={
                            params.searchWord !== (undefined || "undefined")
                                ? params.searchWord
                                : search.keyword
                        }
                        value={search.keyword}
                        onChange={searchHandle}
                        placeholder="닉네임 검색"
                    ></input>
                    <svg
                        className="mr-[19px]"
                        // onClick={onSearch}
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
                    room !== undefined && room.length !== 0 ?
                        (room.map((item) => {
                            return (
                                <div
                                    key={item.roomId}
                                    onClick={() => onClickChatting(item.roomId)}
                                    className='hover:cursor-pointer flex justify-between mt-[24px] items-start'>
                                    <div className='flex items-center'>
                                        <img
                                            className="rounded-full w-[48px] border-[0.5px] border-bbBB h-[48px] object-cover shrink-0"
                                            alt='profileImg' src={item.otherProfilePic}></img>

                                        <div className='ml-[12px] flex flex-col mt-[4px]'>
                                            <p className='text-[12px] text-bb22 font-bold'>{item.roomName}</p>
                                            <div className='overflow-hidden h-[32px] '>
                                                <p className='break-all leading-[1] mt-[2px] text-[11px] font-medium'>
                                                    {item.lastMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end flex-col items-end w-[55px] ml-[12px] mt-[4px] shrink-0'>
                                        <p className='text-b11 text-bb22'>{item.lastMessageTime}</p>
                                    </div>
                                </div>
                            )
                        })) : (
                            <div className='flex flex-col items-center mt-[100px]'>
                                <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#dgevt5c93a)">
                                        <path d="M39.29 53.57.4 62.24l17.43-15.43L2.59 36.66l23.69-5.37-5.15-8.85 14.49 3.39-3.87-21.85 10.59 19.38L54.36 2.85l1.82 29.34c.65 11.22 2.08 6.71 2.74 17.93-10.57 1.87-9.06 1.58-19.63 3.45z" fill="#FFC700" />
                                        <path d="M45.65 71.87c-8.3-4.63-7.39-15.76-6.58-22.03 2.09-14.35 11.17-17.13 16.58-16.18 6.76 1.19 15.2 4.9 11.32 23.6-3.89 18.71-17.81 16.97-21.32 14.6v.01z" fill="#7F73FF" />
                                        <path d="M45.32 64.37c-4.96-1.76-4.99-8.13-4.84-11.75.47-8.3 6.22-10 8.89-10.4 2.56-.18 8.65.79 7.37 11.73-1.28 10.94-9.29 11.39-11.41 10.41l-.01.01z" fill="#fff" />
                                        <path d="M49.125 53.144c.288-2.847-1.417-5.35-3.807-5.592-2.39-.241-4.561 1.87-4.849 4.717-.288 2.846 1.417 5.35 3.807 5.591 2.39.242 4.561-1.87 4.849-4.716z" fill="#000" />
                                        <path d="M78.04 72.06c-8.3-4.63-7.39-15.76-6.58-22.03 2.09-14.35 11.17-17.13 16.58-16.18 6.76 1.19 15.2 4.9 11.32 23.6-3.89 18.71-17.81 16.97-21.32 14.6v.01z" fill="#7F73FF" />
                                        <path d="M77.71 64.56c-4.96-1.76-4.99-8.13-4.84-11.75.47-8.3 6.22-10 8.89-10.4 2.56-.18 8.65.79 7.37 11.73-1.28 10.94-9.29 11.39-11.41 10.41l-.01.01z" fill="#fff" />
                                        <path d="M81.498 53.347c.288-2.847-1.417-5.35-3.807-5.592-2.39-.241-4.561 1.87-4.849 4.717-.288 2.846 1.417 5.35 3.807 5.591 2.39.242 4.561-1.87 4.849-4.716z" fill="#000" />
                                        <path d="M106.88 17.89h5.49c.55 0 1 .45 1 1l-1 16.7c0 .55-.45 1-1 1h-3.49c-.55 0-1-.45-1-1l-1-16.7c0-.55.45-1 1-1zM109.59 45.85a3.72 3.72 0 1 0 0-7.44 3.72 3.72 0 0 0 0 7.44z" fill="#fff" />
                                    </g>
                                    <defs>
                                        <clipPath id="dgevt5c93a">
                                            <path fill="#fff" d="M0 0h140v80H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='text-b24 text-bb88'>앗!</p>
                                <p className='text-b16 text-bb88'>채팅내역이 존재하지 않습니다.</p>
                            </div>
                        )
                }

            </div>
        </Layout>
    )

}




export default ChatList;