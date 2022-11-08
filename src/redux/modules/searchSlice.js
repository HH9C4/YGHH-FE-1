import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import contentsApis from "../../api/instance"

const initialState = {
  search: [],
  hotTag: [],
  isLoading: false,
  error: null,
}

export const __getSearch = createAsyncThunk(
  "contents/getSearch",
  async (searchword, thunkAPI) => {
    try {
      const res = await contentsApis.searchAX(searchword)
      return thunkAPI.fulfillWithValue(res.data)
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
      state.search = action.payload.data
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
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = searchSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default searchSlice.reducer
