import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { membersApis } from "../../api/instance"
import axios from "axios"
// import { delCookie } from "../../cookie/cookie"

<<<<<<< HEAD
=======

>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
//테스트 로그인
export const __testLogin = createAsyncThunk(
  "members/__testLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.testloginAX(payload)
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("Refresh_Token", res.headers.refresh)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("site", "kakao")
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      window.location.replace("/")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//카카오 로그인
export const __kakaoLogin = createAsyncThunk(
  "members/__kakaoLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.kakaologinAX(payload)
      const Access_Token = res.headers.authorization
      console.log(res.data.data)
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("Refresh_Token", res.headers.refresh)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("site", "kakao")
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      window.location.replace("/")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

<<<<<<< HEAD
=======

>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
//네이버 로그인
export const __naverLogin = createAsyncThunk(
  "members/__naverLogin",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.naverloginAX(payload)
      console.log("넘어온 값", res) // 토큰이 넘어올 것임
      const Access_Token = res.headers.authorization
      localStorage.setItem("Authorization", Access_Token)
      localStorage.setItem("Refresh_Token", res.headers.refresh)
      localStorage.setItem("nickName", res.data.data.accountName)
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("ageRange", res.data.data.ageRange)
      localStorage.setItem("email", res.data.data.email)
      localStorage.setItem("gender", res.data.data.gender)
      localStorage.setItem("site", "naver")
      alert(`${localStorage.getItem("nickName")}님 환영합니다!`)
      // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
      window.location.replace("/")
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//중복확인 Thunk
export const __duplicateName = createAsyncThunk(
  "members/__duplicateName",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.duplicateName()
<<<<<<< HEAD
      console.log("중복확인 리스폰", res)
=======
      console.log("중복확인 리스폰", res);
>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
      const obj = {
        nickNameList: res.data.data,
        payload: payload,
      }
      return thunkAPI.fulfillWithValue(obj)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//로그아웃 Thunk
export const __kakaoLogout = createAsyncThunk(
  "members/__kakaoLogout",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.logoutAX(payload)
      if (res.data.status === "200 OK") {
        console.log("로그아웃 res 값", res)
        localStorage.removeItem("Authorization")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("site")
        localStorage.removeItem("gu")
        window.location.replace("/")
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//연결끊기 Thunk
export const __kakaoDelete = createAsyncThunk(
  "members/__kakaoDelete",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.kakaodeleteAX(payload)
      // if (res.data.status === "200 OK") {
      //   console.log("로그아웃 res 값", res)
      //   localStorage.removeItem("Authorization")
      //   localStorage.removeItem("nickName")
      //   localStorage.removeItem("profileImage")
      //   localStorage.removeItem("ageRange")
      //   localStorage.removeItem("email")
      //   localStorage.removeItem("gender")
      //   localStorage.removeItem("site")
      //   window.location.replace("/")
      // }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//네이버 로그아웃
export const __naverLogout = createAsyncThunk(
  "members/__naverLogout",
  async (payload, thunkAPI) => {
    try {
      const res = await membersApis.logoutAX(payload)
      if (res.data.status === "200 OK") {
        console.log("로그아웃 res 값", res)
        localStorage.removeItem("Authorization")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("site")
        window.location.replace("/")
      }
      return thunkAPI.fulfillWithValue(res.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const memberSlice = createSlice({
  name: "members",
  initialState: {
    memberNickNames: [],
    name: {},
  },
  reducers: {
    name(state, action) {
<<<<<<< HEAD
      const userInput = action.payload
      console.log("userInput", userInput)
      const result = state.memberNickNames.findIndex(
        (item) => item === userInput
=======
      const userInput = action.payload;
      console.log("userInput", userInput);
      const result = state.memberNickNames.findIndex((item) =>
        item === userInput
>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
      )
      console.log("result", result)

      if (result !== -1) {
        state.name = false
      } else {
        state.name = true
      }
<<<<<<< HEAD
=======

>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
    },
  },
  extraReducers: {
    [__duplicateName.pending]: (state) => {
      state.isLoading = true
    },
    [__duplicateName.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false

<<<<<<< HEAD
      const nickNameList = action.payload.nickNameList
      state.memberNickNames = nickNameList
=======
      const nickNameList = action.payload.nickNameList;
      state.memberNickNames = nickNameList;
>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
      // const userInput = action.payload.payload;
      // console.log("nickNameList", nickNameList)
      // console.log("액션 페이로드 리듀서", action.payload)
      // // state.memberNickNames = nickNameList;

      // const result = nickNameList.filter((item) =>
      //   item === userInput
      // )
      // console.log("result", result)

      // if (result === []) {
      //   state.name = true
      // } else {
      //   state.name = false
      // }
<<<<<<< HEAD
=======

>>>>>>> 0a004e595623fb92c070574bd7aad9b706854ff5
    },
    [__duplicateName.rejected]: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const {} = searchSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { name } = memberSlice.actions
export default memberSlice.reducer
