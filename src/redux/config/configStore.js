import { configureStore } from "@reduxjs/toolkit"
import contents from "../modules/contentsSlice"
<<<<<<< HEAD
=======
import search from "../modules/searchSlice"
import my from "../modules/mySlice"
import members from "../modules/memberSlice"
import chatting from "../modules/chatSlice";
>>>>>>> af41cb44e7068388251d070d80c4d1574bdbcc5b

import members from "../modules/memberSlice"
import chatting from "../modules/chatSlice";

const store = configureStore({
  reducer: {
    contents,
    members,
    my,
    chatting,
  },
  //배포 모드일때 리덕스 데브툴 사용 안함
  devTools: process.env.REACT_APP_MOD !== "production",
})

export default store
//
