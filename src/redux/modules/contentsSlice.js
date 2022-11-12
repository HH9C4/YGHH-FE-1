import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { contentsApis, commentApis } from "../../api/instance"
import { current } from "@reduxjs/toolkit"

//게시글 작성
export const __insertContent = createAsyncThunk(
  "contents/__insertContent",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.insertContentAX(payload)
      window.alert("게시글이 등록되었습니다.")
      window.location.replace(`/list/${res.data.data.gu}/new`)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response) //.data);
    }
  }
)
//댓글 작성
export const __insertComment = createAsyncThunk(
  "contents/__insertComment",
  async (payload, thunkAPI) => {
    try {
      const res = await commentApis.commentAddAX(payload)

      console.log("댓글 작성 응답값", res)

      if (res.data.status === "200 OK") {
        return thunkAPI.fulfillWithValue(res.data.data)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//댓글 삭제
export const __deleteComment = createAsyncThunk(
  "contents/__deleteComment",
  async (payload, thunkAPI) => {
    try {
      console.log("댓글 삭제 페이로드", payload)
      const res = await commentApis.commentDeletePostAX(payload)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 게시글 전체조회
export const __getContent = createAsyncThunk(
  "contents/__getContent",
  async (payload, thunkAPI) => {
    console.log("axios 이전", payload)
    try {
      const res = await contentsApis.getContentAX(payload)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//게시글 상세조회
export const __getContentDetail = createAsyncThunk(
  "contents/__getContentDetail",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.getContentDetailAX(payload)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//게시글 수정
export const __updataContent = createAsyncThunk(
  "contents/__updataContent",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.updateContentAX(payload)

      window.alert("게시글 수정이 완료되었습니다.")
      window.location.replace(`/detail/${payload.id}`)
    } catch (error) {
      // return thunkAPI.fulfillWithValue(obj);
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//게시글 삭제
export const __deleteContent = createAsyncThunk(
  "contents/__deleteContent",
  async (payload, thunkAPI) => {
    try {
      console.log(payload, "삭제 페이로드")
      const res = await contentsApis.deleteContentAX(payload)
      // const obj = {
      //     delContentId: payload,
      //     data: res.data,
      // }
      console.log(res, "리스폰스")
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __mypage = createAsyncThunk(
  "contents/__mypage",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.mypageAX()
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
export const contentsSlice = createSlice({
  name: "contents",
  initialState: {
    contents: [],
    content: {},
  },
  reducers: {},
  extraReducers: {
    //__댓글 작성
    [__insertComment.fulfilled]: (state, action) => {
      console.log("댓글 액션 페이로드 값", action.payload)
      state.content.commentList.push(action.payload)
    },
    [__insertComment.rejected]: (state, action) => {
      state.error = action.payload
    },
    //댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true //
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false //
      // state.content.commentList.commentId = state.content.commentList.commentId.splice(action.payload, 1)
      state.content.commentList = state.content.commentList.filter(
        (comment) => comment.commentId !== action.payload
      )
    },

    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false //
      state.error = action.payload //
    },
    // 게시글 상세 조회
    [__getContentDetail.pending]: (state) => {
      state.isLoading = true
    },
    [__getContentDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.content = action.payload.data
      // state.comments = action.payload.comments;
    },
    [__getContentDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //게시글 삭제
    [__deleteContent.pending]: (state) => {
      state.isLoading = true //
    },
    [__deleteContent.fulfilled]: (state, action) => {
      state.isLoading = false //
      if (action.payload.data.status === "OK") {
        state.contents.splice(action.payload, 1)
        window.location.replace("/mypage")
      }
    },
    [__deleteContent.rejected]: (state, action) => {
      state.isLoading = false //
      state.error = action.payload //
    },
    //__게시글 작성
    [__insertContent.fulfilled]: (state, action) => {
      if (action.payload.status === 200) {
        alert("글작성 성공!")
      }
    },
    [__insertContent.rejected]: (state, action) => {
      state.error = action.payload
    },
    //__게시글 조회
    [__getContent.pending]: (state) => {
      state.isLoading = true
    },
    [__getContent.fulfilled]: (state, action) => {
      state.isLoading = false
      state.contents = action.payload
    },
    [__getContent.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //게시글 수정
    [__updataContent.fulfilled]: (state, action) => {
      state.contents = action.payload
    },
    [__updataContent.rejected]: (state, action) => {
      state.error = action.payload //
    },
  },
})
export default contentsSlice.reducer
