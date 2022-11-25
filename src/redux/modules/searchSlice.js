import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import { contentsApis } from "../../api/instance"
import { current } from "@reduxjs/toolkit"

const initialState = {
  search: [],
  hotTag: [],
  isLoading: false,
  error: null,
  before: [],
  now: [],
}

export const __getSearch = createAsyncThunk(
  "contents/getSearch",
  async (obj, thunkAPI) => {
    try {
      console.log(obj)
      const res = await contentsApis.searchAX(obj)
      console.log("서치 리스폰스", res)
      const object = {
        payload: obj,
        data: res.data.data,
      }
      console.log("서치 오브젝트", object)
      return thunkAPI.fulfillWithValue(object)
    } catch (error) {
      alert(error.response.data.msg)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
      window.history.back()
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [__getSearch.pending]: (state) => {
      state.isLoading = true
    },
    [__getSearch.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      console.log("action.payload", action.payload)
      const data = action.payload.data.postList
      console.log("리듀서 데이터", data)
      if (action.payload.payload.page === 0) {
        state.search.splice(0)
        // state.search.push(...action.payload.data.postList)
        state.search.push(...data)
      } else {
        state.search.push(...data)
      }
      state.size = action.payload.data.sizeOfList
    },
    [__getSearch.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },

    [__getHotTag.pending]: (state) => {
      state.isLoading = true
    },
    [__getHotTag.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      console.log("action.payload", action.payload)
      state.hotTag = action.payload.data
    },
    [__getHotTag.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
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
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = searchSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default searchSlice.reducer
