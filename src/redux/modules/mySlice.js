import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { contentsApis } from "../../api/instance"

// 마이페이지 내가 작성한 게시글 조회
export const __getMyContent = createAsyncThunk(
  "contents/__getMyContent",
  async (_, thunkAPI) => {
    try {
      const res = await contentsApis.getmypageAX()
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
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const contentsSlice = createSlice({
  name: "my",
  initialState: {
    contents: [],
  },
  reducers: {},
  extraReducers: {
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
      state.contents = action.payload
    },
    [__getMyLikes.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export default contentsSlice.reducer
