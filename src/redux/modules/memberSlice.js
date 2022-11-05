import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApis } from "../../apis/apiInstance"
import { delCookie } from "../../cookie/cookie"



//로그아웃 Thunk
export const __logout = createAsyncThunk(
    "members/__logout",
    async (payload, thunkAPI) => {
        try {
            loginApis.logoutAX()
                .then((res) => {
                    if (res.data.status === 200) {
                        delCookie("Access_Token")
                        delCookie("nickname")
                        alert("로그아웃 되었습니다")
                        window.location.replace("/")
                    }
                })
                .catch((error) => {
                    if (error.response.data.status === 400) {
                        delCookie("Access_Token")
                        delCookie("nickname")
                        alert("로그아웃 되었습니다")
                        window.location.replace("/")
                    }

                })

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)