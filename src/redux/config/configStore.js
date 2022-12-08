import { configureStore } from "@reduxjs/toolkit"
import contents from "../modules/contentsSlice"

import members from "../modules/memberSlice"

const store = configureStore({
  reducer: {
    contents,
    members,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
//
