import { createAsyncThunk } from "@reduxjs/toolkit"
import { contentsApis } from "../../api/instance"

//마이페이지 수정
export const __mypageModify = createAsyncThunk(
  "contents/__mypageModify",
  async (payload, thunkAPI) => {
    try {
      const res = await contentsApis.modifyAX(payload)
      //나중에 리듀서로 리팩토링 예정
      localStorage.setItem("profileImage", res.data.data.profileImage)
      localStorage.setItem("nickName", res.data.data.accountName)
      window.alert("프로필 수정이 완료되었습니다.")
      window.location.replace("/mypage")
      // window.location.replace("/mypage")
      // return thunkAPI.fulfillWithValue(res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export default __mypageModify
