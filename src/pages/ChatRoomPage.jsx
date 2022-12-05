import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getinitialChatList, __getinitialChatList2, ListReducer } from '../redux/modules/chatSlice';
import webstomp from "webstomp-client";
import SockJS from "sockjs-client";

const ChatRoomPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const sock = new SockJS(`${process.env.REACT_APP_URL}/ws/chat`);
    const ws = webstomp.over(sock);
    const dispatch = useDispatch();

    const chatList = useSelector((state) => state.chatting.chatList);
    const chatList2 = useSelector((state) => state.chatting.chatList2);

    console.log("요청하는정보~~", chatList, chatList2)

    let postId = Number(id);
    //여러번 호출안하거나 undefined 
    //onSubmitHandler

    useEffect(() => { //채팅내역을 mount될때마다 
        dispatch(__getinitialChatList({ postId: postId, roomId: 1, }));
        return () => {
            onbeforeunloda();
        }
    }, []);

    //소켓이 끊겼을떄 감지해서 페이지를 이탈했을떄 스토어를 리셋 array splice
    //splice(0) 싹다 날려줌.state.search 
    //state.splice(0) =>0번째 인덱스부터 날린다.

    useEffect(() => {
        wsConnectSubscribe();
        return () => { onbeforeunloda(); };
    },
        [chatList2.roomId]);

    //함수를 return안에 만들어서 리듀서를 비워주는 
    //새로고침 하지 않으면 메시지가 2개로 나오는 issue 떄문에 두번 연결
    //끊어주지 않으면 또 다시 이전화면 다녀오면 2개 나오는 issue때문에

    const [chatBody, setChatBody] = useState("");

    const content = {
        sender: localStorage.getItem("user-nickname"),
        message: chatBody,
    };

    let headers = {
        Access_Token: localStorage.getItem("Access_Token"),
    };

    function wsConnectSubscribe() {
        try {
            ws.connect(headers, (frame) => {
                //roomID가  undefind가 나타남. chatList쪽에 dispatch에 SetTimeout을 설정한후 roomId를 직접 로컬로 받아서 sub에 넣으니까 해결은됨 f5시에 문자가 두개씩나타나는 오류가생김.
                ws.subscribe(`/sub/${chatList2.roomId}`, (response) => {
                    let data = JSON.parse(response.body);
                    dispatch(ListReducer(data));
                })
            });
        } catch (error) { }
    }

    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
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
            ws.disconnect(
                () => {
                    ws.unsubscribe("sub-0");
                    clearTimeout(waitForConnection);
                },

                { Access_Token: localStorage.getItem("Access_Token") }
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
        //event.preventDefault()
        if (chatBody === "" || chatBody === " ") {
            return alert("내용을 입력해주세요.");
        }
        waitForConnection(ws, function () {
            ws.send(
                `/pub/${chatList2.roomId}`,
                JSON.stringify(content),
                {
                    Access_Token: localStorage.getItem("Access_Token"),
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
        <div>ChatRoomPage</div>
    )
}

export default ChatRoomPage