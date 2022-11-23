import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { contentsApis, commentApis } from "../../api/instance"
import { current } from '@reduxjs/toolkit'
//게시글 작성
export const __insertContent = createAsyncThunk(
  "contents/__insertContent",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.insertContentAX(payload)
      window.alert("게시글이 등록되었습니다.")
      window.location.replace(`/list/${res.data.data.gu}/all/new`)
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

//게시글 좋아요 활성화
export const __activateLike = createAsyncThunk(
  "contents/__activateLike",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.likesAX(payload)
      const obj = {
        id: payload.contentId,
        data: res.data.data,
      }
      return thunkAPI.fulfillWithValue(obj)
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
      const obj = {
        id: payload.contentId,
        data: res.data.data,
      }
      return thunkAPI.fulfillWithValue(obj)
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
        likeCount: res.data.data.likeCount,
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
        likeCount: res.data.data.likeCount,
      }
      return thunkAPI.fulfillWithValue(obj)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//북마크 조회
export const __returnBookmark = createAsyncThunk(
  "contents/__returnBookmark",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.returnBookMarkAX(payload)
      console.log("조회 북마크", res);
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
      console.log("북마크 활성화", res);
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
      console.log(res, "북마크 비활성화");
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//북마크 페이지 비활성화
export const __deactivateBookmarkPage = createAsyncThunk(
  "contents/__deactivateBookmarkPage",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.bookMarkOffAX(payload)
      console.log(res, "북마크 페이지 비활성화");
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
      const obj = {
        payload: payload,
        data: res.data.data
      }
      return thunkAPI.fulfillWithValue(obj)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
//게시글 상세조회
export const __getContentDetail = createAsyncThunk(
  "contents/__getContentDetail",
  async (payload, thunkAPI) => {
    console.log("상세조회 payload", payload)
    try {
      const res = await contentsApis.getContentDetailAX(payload)
      console.log("상세조회 res", res)
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
        window.location.replace(`/list/${res.data.data}/all/new`)
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
    bookmarks: [],
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
      console.log(action.payload)
      state.content.likeId = action.payload.id
      state.content.isLiked = action.payload.data.isLiked
      state.content.likeCount = action.payload.data.likeCount
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
      state.content.likeId = action.payload.id
      state.content.isLiked = action.payload.data.isLiked
      state.content.likeCount = action.payload.data.likeCount
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
          return true
        }
        return false
      })
      state.content.commentList[indexID].isLiked = action.payload.isLiked
      state.content.commentList[indexID].likeCount = action.payload.likeCount
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
          return true
        }
        return false
      })
      state.content.commentList[indexID].isLiked = action.payload.isLiked
      state.content.commentList[indexID].likeCount = action.payload.likeCount
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

    // 북마크 페이지 비활성화
    [__deactivateBookmarkPage.pending]: (state) => {
      state.isLoading = true
    },
    [__deactivateBookmarkPage.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log();
      // const indexID = state.bookmarks.findIndex((item) => {
      //   if (item.gu === action.payload.gu) {
      //     return true
      //   }
      //   return false
      // }
      state.bookmarks = state.bookmarks.filter((item) => item.gu !== action.payload.gu)
    },
    [__deactivateBookmarkPage.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 북마크 조회
    [__returnBookmark.pending]: (state) => {
      state.isLoading = true
    },
    [__returnBookmark.fulfilled]: (state, action) => {
      state.isLoading = false

      state.bookmarks = action.payload
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
      console.log("게시글 전체조회 액션 페이로드", action.payload);
      state.isLoading = false
      if (action.payload.payload.page === 0) {
        state.contents.splice(0)
        state.contents.push(...action.payload.data.postList)
      } else {
        state.contents.push(...action.payload.data.postList)// 기존에 있던 리스트에서 뒤에 붙여줘야하기 때문에 push를 써줘야함
      }
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
