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
  default: 0,
})

export const postDetail = atom({
  key: "postDetail",
  default: {},
})

export const chatList = atom({
  key: "chatList",
  default: {},
})
