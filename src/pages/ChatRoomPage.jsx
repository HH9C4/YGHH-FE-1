import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getinitialChatList, __getinitialChatList2, ListReducer } from '../redux/modules/chatSlice';
import SockJS from "sockjs-client";
import Layout from '../components/layout/Layout';
import webstomp from 'webstomp-client';


const ChatRoomPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chatList2 = useSelector((state) => state.chatting.chatList);
    const [readStatus, setReadStatus] = useState();
    const sock = new SockJS(`https://boombiboombi.o-r.kr/ws`);
    const ws = webstomp.over(sock);
    console.log(" 룸아이디 체크해야함", chatList2)
    console.log("아이디", id)

    // ⭐️채팅방 입장
    useEffect(() => { //페이지가 마운트 될 때마다 띄어준 후 연결한 뒤 나갔을때 끊어준다.
        // dispatch(__getinitialChatList({ chatList2.roomId }));
        wsConnectSubscribe();
        // dispatch(__getinitialChatList(1));
        dispatch(__getinitialChatList(id));
        return () => {
            onbeforeunloda();
        }
        // }, [chatList2.roomId]);
    }, [id]);
    // }, []);

    // 다민님꺼 
    // useEffect(() => {
    //     console.log("listReducer", listReducer);
    //     if (roomId !== undefined) {
    //     dispatch(
    //     __getinitialChatList({
    //     roomId: roomId,
    //     })
    //     );
    //     return () => {
    //     onbeforeunloda();
    //     };
    //     }
    //     }, [roomId]);

    // useEffect(() => {
    //     wsConnectSubscribe();

    //     return () => {
    //         onbeforeunloda();
    //     };
    // }, [chatList2.roomId, chatList2]);

    //소켓이 끊겼을때 감지해서 페이지를 이탈했을때 스토어를 리셋 array splice

    const [chatBody, setChatBody] = useState("");
    const content = {
        sender: localStorage.getItem("nickName"),
        message: chatBody,
    };

    let headers = {
        Authorization: localStorage.getItem("Authorization"),
    };


    //🧏통신 시도
    function wsConnectSubscribe() {
        try {
            ws.connect(headers, (frame) => {
                // ws.subscribe(`/sub/${chatList2.roomId}`, (response) => {
                ws.subscribe(`/sub/${id}`, (response) => {
                    console.log("섭 되나?");
                    let data = JSON.parse(response.body);
                    // dispatch(__getinitialChatList(1));
                    dispatch(ListReducer(data));
                    console.log("데이터!!!!!!!!!!!", data)
                })
            });
        } catch (error) { }
    }
    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
                console.log("여기2");
                // 연결되었을 때 콜백함수 실행
                if (ws.ws.readyState === 1) {
                    callback();
                    // 연결이 안 되었으면 재호출
                } else {
                    waitForConnection(ws, callback);
                }
            }, 1 // 밀리초 간격으로 실행
        );
    }//stomp 메시지 에러 waitForConnection함수로 해결

    const onbeforeunloda = () => {
        try {
            console.log("여기3");
            ws.disconnect(
                () => {
                    ws.unsubscribe("sub-0");
                    clearTimeout(waitForConnection);
                },

                { Access_Token: localStorage.getItem("Authorization") }
            );
        } catch (e) {
            // console.log("연결구독해체 에러", e);
        }
    };


    //채팅 메시지 여러개로 나오는것 구독해제로 해결
    const inputHandler = (e) => {
        setChatBody(e.target.value);
    };

    const onSubmitHandler = (event) => {
        if (chatBody === "" || chatBody === " ") {
            return alert("내용 입력 좀 .");
        }
        waitForConnection(ws, function () {
            console.log("여기1");
            // ws.send(`/pub/${chatList2.roomId}`,
            ws.send(`/pub/${id}`,
                JSON.stringify(content),
                {
                    headers: {
                        Authorization:
                            localStorage.getItem("Authorization")
                    }
                },
                setChatBody("")
            );
        });
    };
    const appKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmitHandler();
            setChatBody("");
        }
    };
    //enter시 메시지 보냄
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef) {
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    }, [chatList2]);
    //채팅창 치면 맨 밑으로 내려감.

    return (
        <Layout>
            <div>
                <header>
                    <div>
                        <div onClick={
                            () => navigate(-1)
                        } />
                    </div>
                    <div>
                        <div>{chatList2.postNickname}</div>
                        <div>30분 전 접속 </div>
                    </div>
                    {
                        localStorage.getItem("nickName") === chatList2.hostName ?
                            <>
                                <div>모달용</div>
                            </>
                            : null
                    }
                </header>
                <section>
                    <div>
                        <img src='#' alt='profileImage'>{chatList2.postImg}</img>
                    </div>
                    <div>
                    </div>
                </section>
                <div>날짜 오늘</div>
                <div sx={{ height: "80%", overflow: "scroll" }}>
                    {
                        chatList2.chatList !== undefined &&
                        chatList2.chatList !== null &&
                        chatList2.chatList.map((item, i) => {
                            return localStorage.getItem("nickName") == item.sender ?
                                (
                                    <div className='flex flex-col'>
                                        <img src={localStorage.getItem("profileImage")} alt="" />
                                        <div >작성자 : {item.sender}</div>
                                        <div className='pl-[10px]'>내용 : {item.message}</div>
                                    </div>
                                ) :
                                (
                                    <div>
                                        {/* <div>{item.message}</div> */}
                                        <div>{item.message}</div>
                                    </div>
                                );
                        })}

                    <div ref={scrollRef}></div>
                </div>
                <div>
                    <input
                        value={chatBody}
                        onKeyPress={appKeyPress}
                        onChange={inputHandler}
                    ></input>
                    {/* <button onSubmit={appKeyPress} onClick={onSubmitHandler}>전송</button> */}
                </div>
            </div>
        </Layout>
    );
}

export default ChatRoomPage