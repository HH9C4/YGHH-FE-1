import { atom, selector } from "recoil"

export const postList = atom({
  key: "postList",
  default: [],
})

export const searchList = atom({
  key: "searchList",
  default: [],
})

export const searchSizes = atom({
  key: "searchSizes",
  default: -1,
})

export const postDetail = atom({
  key: "postDetail",
  default: {},
})

export const chatList = atom({
  key: "chatList",
  default: {},

})

export const sse = atom({
  key: "sse",
  default: {},

})