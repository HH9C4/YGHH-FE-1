
import { configureStore } from "@reduxjs/toolkit"
import contents from "../modules/contentsSlice"
import search from "../modules/searchSlice"

const store = configureStore({
  reducer: {
    contents,
    search,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})


export default store
//
