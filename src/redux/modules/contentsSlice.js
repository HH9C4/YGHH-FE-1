import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { contentsApis, commentApis } from "../../api/instance"
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
      if (res.data.status === "201 CREATED") {
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
      // const res = await commentApis.commentDeletePostAX(payload)
      if (window.confirm("작성하신 댓글을 삭제하시겠습니까?")) {
        const res = await commentApis.commentDeletePostAX(payload)
        return thunkAPI.fulfillWithValue(payload)
      }
      // return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// try {
//   const res = await contentsApis.returnBookMarkAX()
//   console.log("북마크 반환 리스폰스값", res)
//   console.log("북마크  리스폰스값", res.data)

//   return thunkAPI.fulfillWithValue(res.data.data)
// } catch (error) {
//   return thunkAPI.rejectWithValue(error)
// }

//게시글 좋아요 활성화
export const __activateLike = createAsyncThunk(
  "contents/__activateLike",
  async (payload, thunkAPI) => {

    try {
      const res = await contentsApis.likesAX(payload)
      // const obj = {
      //   level: payload.level,
      //   data: res.data.data,
      // }
      console.log("좋아요 리스폰", res);
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//게시글 좋아요 비활성화
export const __deactivateLike = createAsyncThunk(
  "contents/__deactivateLike",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.cancelLikesAX(payload)
      console.log("좋아요 리스폰", res);
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//댓글 좋아요 활성화
export const __activateCommentLike = createAsyncThunk(
  "contents/__activateCommentLike",
  async (payload, thunkAPI) => {

    try {
      const res = await contentsApis.likesAX(payload)
      const obj = {
        commentId: payload.itemId,
        isLiked: res.data.data.isLiked,
      }

      return thunkAPI.fulfillWithValue(obj)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//댓글 좋아요 비활성화
export const __deactivateCommentLike = createAsyncThunk(
  "contents/__deactivateCommentLike",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.cancelLikesAX(payload)
      const obj = {
        commentId: payload.itemId,
        isLiked: res.data.data.isLiked,
      }
      return thunkAPI.fulfillWithValue(obj)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//북마크 반환
export const __returnBookmark = createAsyncThunk(
  "contents/__returnBookmark",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.returnBookMarkAX()
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//북마크 활성화
export const __activateBookmark = createAsyncThunk(
  "contents/__activateBookmark",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.bookMarkAX(payload)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//북마크 비활성화
export const __deactivateBookmark = createAsyncThunk(
  "contents/__deactivateBookmark",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.bookMarkOffAX(payload)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)



// 게시글 전체조회
export const __getContent = createAsyncThunk(
  "contents/__getContent",
  async (payload, thunkAPI) => {

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
    console.log("상세조회 payload", payload);
    try {
      const res = await contentsApis.getContentDetailAX(payload)
      console.log("상세조회 res", res);
      return thunkAPI.fulfillWithValue(res.data.data)
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

      if (window.confirm("게시글을 삭제하시겠습니까?")) {
        const res = await contentsApis.deleteContentAX(payload)
        window.location.replace(`/list/${res.data.data}/new`)
      }
      // const res = await contentsApis.deleteContentAX(payload)
      // const obj = {
      //     delContentId: payload,
      //     data: res.data,
      // }
      // console.log("삭제 리스폰스 값 : ", res);
      // if (window.confirm("게시글을 삭제하시겠습니까?")) {
      //   window.location.replace(`/list/${res.data.data}`)
      // }
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
    bookmark: [],
  },
  reducers: {},
  extraReducers: {
    //__댓글 작성
    [__insertComment.fulfilled]: (state, action) => {
      state.content.commentList.push(action.payload)
    },
    [__insertComment.rejected]: (state, action) => {
      state.error = action.payload
    },
    //댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.content.commentList = state.content.commentList.filter(
        (comment) => comment.commentId !== action.payload
      )
    },
    // 게시글 상세 조회
    [__getContentDetail.pending]: (state) => {
      state.isLoading = true
    },
    [__getContentDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.content = action.payload

    },
    [__getContentDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false //
      state.error = action.payload //
    },
    // 게시글 좋아요 활성화
    [__activateLike.pending]: (state) => {
      state.isLoading = true
    },
    [__activateLike.fulfilled]: (state, action) => {
      state.isLoading = false
      state.content.isLiked = action.payload.isLiked
      state.content.likeCount = action.payload.likeCount

    },
    [__activateLike.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //게시글 좋아요 비활성화
    [__deactivateLike.pending]: (state) => {
      state.isLoading = true
    },
    [__deactivateLike.fulfilled]: (state, action) => {
      state.isLoading = false
      state.content.isLiked = action.payload.isLiked
      state.content.likeCount = action.payload.likeCount
    },
    [__deactivateLike.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 댓글 좋아요 활성화
    [__activateCommentLike.pending]: (state) => {
      state.isLoading = true
    },
    [__activateCommentLike.fulfilled]: (state, action) => {
      state.isLoading = false
      const indexID = state.content.commentList.findIndex((id) => {
        if (id.commentId === action.payload.commentId) {
          return true;
        }
        return false;
      });
      state.content.commentList[indexID].isLiked = action.payload.isLiked

    },
    [__activateCommentLike.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //댓글 좋아요 비활성화
    [__deactivateCommentLike.pending]: (state) => {
      state.isLoading = true
    },
    [__deactivateCommentLike.fulfilled]: (state, action) => {
      state.isLoading = false
      const indexID = state.content.commentList.findIndex((id) => {
        if (id.commentId === action.payload.commentId) {
          return true;
        }
        return false;
      });
      state.content.commentList[indexID].isLiked = action.payload.isLiked
    },
    [__deactivateCommentLike.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 북마크 활성화
    [__activateBookmark.pending]: (state) => {
      state.isLoading = true
    },
    [__activateBookmark.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookmark = action.payload.bookmarked
    },
    [__activateBookmark.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 북마크 비활성화
    [__deactivateBookmark.pending]: (state) => {
      state.isLoading = true
    },
    [__deactivateBookmark.fulfilled]: (state, action) => {
      state.isLoading = false
      state.bookmark = action.payload.bookmarked
    },
    [__deactivateBookmark.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 북마크 반환
    [__returnBookmark.pending]: (state) => {
      state.isLoading = true
    },
    [__returnBookmark.fulfilled]: (state, action) => {
      state.isLoading = false
      action.payload.map((item) => {
        state.bookmark.push(item)
      })
    },
    [__returnBookmark.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    //게시글 삭제
    [__deleteContent.pending]: (state) => {
      state.isLoading = true //
    },
    [__deleteContent.fulfilled]: (state, action) => {
      state.isLoading = false //
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
    //__게시글 전체 조회
    [__getContent.pending]: (state) => {
      state.isLoading = true
    },
    [__getContent.fulfilled]: (state, action) => {
      state.isLoading = false
      state.contents = action.payload.postList
      state.bookmark = action.payload.isBookmarked
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
