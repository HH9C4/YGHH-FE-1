import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import { chatApis } from "../../api/instance"

export const __CreateRoom = createAsyncThunk(
    "/chat/__CreateRoom",
    async (payload, thunkAPI) => {
        try {
            console.log("생성 페이로드", payload);
            const response = await chatApis.CreateRoom(payload)
            console.log("생성 리스폰스임", response);
            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const __getRoomList = createAsyncThunk(
    "/chat/__getRoomList",
    async (payload, thunkAPI) => {
        try {
            const response = await chatApis.getRoomList()
            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const __getinitialChatList = createAsyncThunk(
    "/chat/__getInitialChatList",
    async (payload, thunkAPI) => {
        try {
            console.log("어케 들어오는겨", payload)
            const response = await chatApis.getInitialChatList(payload)
            console.log("어케다른겨", response)
            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (error) {
            console.log("채팅방 입장 에러", error);
            return thunkAPI.rejectWithValue(error.response.data.data);
        }
    }
);


export const __getinitialChatList2 = createAsyncThunk(
    "/chat/__getInitialChatList2",
    async (payload, thunkAPI) => {
        try {
            const response = await chatApis.getInitialChatList(payload)
            console.log("어떤값주니 2", response)
            return thunkAPI.fulfillWithValue(response.data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.data);
        }
    }
);

export const __complete = createAsyncThunk(
    "/chat/__complete",
    async (payload, thunkAPI) => {
        try {
            const response = await chatApis.complete(payload)

            console.log("컴플리트22222222222", response)

            return thunkAPI.fulfillWithValue(response.data.msg);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.data);
        }
    }
);


export const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        chatListTest: [],
        complete: [],
        createRoom: [],
        roomList: [],
        chatList: [],
        chatList2: [],
        listReducer: [],
        chatTrueFalse: false,
        isLoading: false,
        roomId: null,
        err: null,
    },
    reducers: {
        postChat: (state, action) => {
            state.chatList.unshift(action.payload);
        },
        clearChat: (state, action) => {
            state.chatList = new Array(0);
        },
        trueChat: (state, action) => {
            state.chatTrueFalse = action.payload.mode
        },
        ListReducer: (state, action) => {
            console.log("어떤값?", current(state), "어떤값?", action.payload)
            console.log("리스트 리듀서 내", action.payload);
            state.chatList.chatList.push(action.payload)
        },
    },
    extraReducers: {
        [__CreateRoom.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__CreateRoom.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.chatList = action.payload;
        },
        [__CreateRoom.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload;
        },
        [__complete.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__complete.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.complete = action.payload;
        },
        [__complete.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload;
        },
        [__getRoomList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getRoomList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.roomList = action.payload;
        },
        [__getRoomList.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload;
        },
        [__getinitialChatList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getinitialChatList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.chatList = action.payload;
        },
        [__getinitialChatList.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload;
        },
        [__getinitialChatList2.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getinitialChatList2.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.chatList2 = action.payload;
        },
        [__getinitialChatList2.rejected]: (state, action) => {
            state.isLoading = false;
            state.err = action.payload;
        },
    },
})
export const { postChat, clearChat, trueChat, ListReducer } = chatSlice.actions;

export default chatSlice.reducer
