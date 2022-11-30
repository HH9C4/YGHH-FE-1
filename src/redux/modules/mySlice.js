import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import { contentsApis } from "../../api/instance"
const initialState = {
  cmt: [],
  contents: [],
  likes: [],
  isLoading: false,
  error: null,
}

// 마이페이지 내 게시글 새 댓글 조회
export const __getMyNotice = createAsyncThunk(
  "contents/mypageNoticeAX",
  async (_, thunkAPI) => {
    try {
      const res = await contentsApis.mypageNoticeAX()
      console.log("mynotice", res)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 마이페이지 내 게시글 새댓글 확인완료
export const __postMyNotice = createAsyncThunk(
  "contents/mypageNoticeConfirmAX",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.mypageNoticeConfirmAX(payload)
      console.log("mynoticeConfirm", res.data.data)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 마이페이지 내가 작성한 게시글 조회
export const __getMyContent = createAsyncThunk(
  "contents/__getMyContent",
  async (_, thunkAPI) => {
    try {
      const res = await contentsApis.getmypageAX()
      console.log("myposts", res.data.data)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 내가 좋아요한 게시글 조회
export const __getMyLikes = createAsyncThunk(
  "contents/__getMyLikes",
  async (_, thunkAPI) => {
    try {
      const res = await contentsApis.mypageLikedAX()
      console.log("mylikes", res)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const contentsSlice = createSlice({
  name: "my",
  initialState,
  reducers: {},
  extraReducers: {
    //마이페이지 내 게시글 새댓글 조회
    [__getMyNotice.pending]: (state) => {
      state.isLoading = true
    },
    [__getMyNotice.fulfilled]: (state, action) => {
      state.isLoading = false
      state.cmts = action.payload
    },
    [__getMyNotice.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //마이페이지 내가 작성한 게시글 조회
    [__getMyContent.pending]: (state) => {
      state.isLoading = true
    },
    [__getMyContent.fulfilled]: (state, action) => {
      state.isLoading = false
      state.contents = action.payload
    },
    [__getMyContent.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //마이페이지 내가 좋아요한 게시글 조회
    [__getMyLikes.pending]: (state) => {
      state.isLoading = true
    },
    [__getMyLikes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.likes = action.payload
    },
    [__getMyLikes.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export default contentsSlice.reducer
