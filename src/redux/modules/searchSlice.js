import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import { contentsApis, membersApis } from "../../api/instance"

const initialState = {
  search: [],
  hotTag: [],
  isLoading: false,
  error: null,
  before: [],
  now: [],
  home: {},
  //getGuTag용 스토어
  tags: [],
  //온체인지 발생시마다 필터 돌아가는 스토어
  searchTags: [],
}

//에러코드 발급 요청

export const __getHome = createAsyncThunk(
  "contents/__getHome",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.homeInfoAX()
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// export const __getSearch = createAsyncThunk(
//   "contents/getSearch",
//   async (obj, thunkAPI) => {
//     try {
//       const res = await contentsApis.searchAX(obj)
//       const object = {
//         payload: obj,
//         data: res.data.data,
//       }
//       return thunkAPI.fulfillWithValue(object)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

export const __getHotTag = createAsyncThunk(
  "contents/getHotTag",
  async (gu, thunkAPI) => {
    try {
      const res = await contentsApis.hotTagAX(gu)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      alert(error.response.data.msg)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __getInfo = createAsyncThunk(
  "contents/__getInfo",
  async (gu, thunkAPI) => {
    try {
      const res = await contentsApis.infoAX(gu)
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      alert(error.response.data.message)
      if (localStorage.getItem("nickName") !== null || undefined) {
        window.location.replace(`/list/${gu}/all/new`)
      } else {
        window.location.replace("/login")
      }
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//게시글 작성 시 태그 가져오기
export const __getGuTag = createAsyncThunk(
  "contents/__getGuTag",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.getGuTags(payload)
      return thunkAPI.fulfillWithValue(res.data.data.tagList)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.message)
    }
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTags(state, action) {
      const tagList = state.tags
      if (tagList !== (undefined || null) && action.payload !== "") {
        state.searchTags = tagList.filter((t) => t.includes(action.payload))
      } else if (action.payload === "") {
        state.searchTags.splice(0)
      }
    },
  },

  extraReducers: {
    //홈
    [__getHome.pending]: (state) => {
      state.isLoading = true
    },
    [__getHome.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.home = action.payload.data
    },
    [__getHome.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
    // //검색
    // [__getSearch.pending]: (state) => {
    //   state.isLoading = true
    // },
    // [__getSearch.fulfilled]: (state, action) => {
    //   state.isLoading = false
    //   state.isSuccess = false
    //   const data = action.payload.data.postList
    //   if (action.payload.payload.page === 0) {
    //     state.search.splice(0)
    //     // state.search.push(...action.payload.data.postList)
    //     state.search.push(...data)
    //   } else {
    //     state.search.push(...data)
    //   }
    //   state.size = action.payload.data.sizeOfList
    // },
    // [__getSearch.rejected]: (state, action) => {
    //   state.isLoading = false
    //   state.isSuccess = false
    //   state.error = action.payload
    // },
    //핫태그 페이지
    [__getHotTag.pending]: (state) => {
      state.isLoading = true
    },
    [__getHotTag.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.hotTag = action.payload.data
    },
    [__getHotTag.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
    //정보 페이지
    [__getInfo.pending]: (state) => {
      state.isLoading = true
    },
    [__getInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.info = action.payload
    },
    [__getInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
    //__게시글 태그 목록 겟

    [__getGuTag.pending]: (state) => {
      state.isLoading = true
    },
    [__getGuTag.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.tags = action.payload
    },
    [__getGuTag.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = searchSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { searchTags } = searchSlice.actions
export default searchSlice.reducer
