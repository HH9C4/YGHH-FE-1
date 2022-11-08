import axios from "axios"
import { getCookie } from "../cookie/cookie"

//헤더 없는 인스턴스
export const nhInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
})

//

//헤더 있는 인스턴스
export const hInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      getCookie("accesstoken") === undefined ? "" : getCookie("accesstoken"),
  },
  withCredentials: true,
})

export const loginApis = {
  //로그인
  loginAX: (loginInfo) => nhInstance.post(`/auth/login`, loginInfo),
  //로그아웃
  logoutAX: () => hInstance.delete(`/api/logout`),
  //회원가입
  joinAX: (joinInfo) => nhInstance.post(`/auth/signup`, joinInfo),

  //회원가입 이메일 중복 체크
  // loginEmailCheckAX: (email) => nhInstance.post(`/auth/idCheck`, email),

  //회원가입 이메일, 닉네임 중복 체크
  loginCheckAX: (userinfo) => nhInstance.post(`${userinfo.url}`, userinfo.data),

  //게시글 삭제
  getDeletePostAX: (id) => hInstance.delete(`/api/posts/${id}`),

  //마이페이지 계정 수정 페이지
  putUserInfoAX: (userinfo) => hInstance.put("/my/update", userinfo),
}

export const commentApis = {
  ///api/{postId}/comment
  //댓글 작성
  commentAddAX: (obj) => hInstance.post(`/api/${obj.id}/comment`, obj.comment),

  //댓글 삭제
  //명세서 /api/comment/{commetId}
  commentDeletePostAX: (id) => hInstance.delete(`/api/comment/${id}`),
}

export const contentsApis = {
  //컨텐츠 작성
  insertContentAX: (contentInfo) => hInstance.post(`/api/posts`, contentInfo),

  //컨텐츠 전체 불러오기
  getContentAX: (obj) =>
    hInstance.get(
      `/api/posts
  ?gu=${obj.gu}&sort=${obj.sort}`,
      obj.contentInfo
    ),

  //컨텐츠 상세 불러오기
  ///api/posts/{postId}
  getContentDetailAX: (contentInfo) =>
    hInstance.get(`/api/posts/${contentInfo}`),

  //컨텐츠 삭제
  deleteContentAX: (contentInfo) =>
    hInstance.delete(`/api/posts/${contentInfo}`),

  //컨텐츠 수정
  updateContentAX: (obj) =>
    hInstance.post(`/api/posts/${obj.id}`, obj.contentInfo),

  //마이페이지
  mypageAX: () => hInstance.get(`/api/myPage`),

  //검색
  searchAX: (searchword) => hInstance.get(`api/posts/${searchword}`),
  //핫태그
  hotTagAX: (gu) => hInstance.get(`/api/posts/${gu}/hottest`),
}

export default { hInstance, nhInstance }
