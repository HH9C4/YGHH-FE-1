import { atom, selector } from "recoil"

export const userInfo = atom({
  key: "userInfo",
  default: {
    email: "",
    nickName: "",
    profileImage: "",
    ageRange: "",
    gender: "",
    site: "",
    location: "",
    gu: "",
    bookmarkList: [],
  },
})

export const postList = atom({
  key: "postList",
  default: [{}],
})

export const searchList = atom({
  key: "searchList",
  default: [{}],
})

export const searchSizes = atom({
  key: "searchSizes",
  default: 0,
})
