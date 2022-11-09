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
    Access_Token:
      localStorage.getItem("token") === undefined
        ? ""
        : localStorage.getItem("token"),
  },
  withCredentials: true,
})

export const membersApis = {
  //로그인
  loginAX: (code) => nhInstance.get(`/user/kakao/callback?code=${code}`, {}),
  // loginAX: (code) => nhinstance.post(`/auth/kakao/callback?code=${code}`, {
  // }),
  //로그아웃
  logoutAX: () => hInstance.delete(`/api/logout`),
}

export const commentApis = {
  //댓글 작성
  commentAddAX: (commentInfo) =>
    hInstance.post(`/api/comments/${commentInfo}`, commentInfo),

  //댓글 삭제
  commentDeletePostAX: (id) => hInstance.delete(`/api/comments/${id}`),
}

export const contentsApis = {
  //게시글 작성
  insertContentAX: (contentInfo) => hInstance.post(`/api/posts`, contentInfo),

  //게시글 수정
  updateContentAX: (obj) =>
    hInstance.post(`/api/posts/${obj.id}`, obj.contentInfo),

  //게시글 전체 조회(Hot/인기순)(contentInfo안에 ✅gu / ✅hot이 객체로 들어감)
  //게시글 전체 조회(New/최신순)(contentInfo안에 ✅gu / 🙏sort가 객체로 들어감)
  getContentAX: (obj) =>
    hInstance.get(`/api/posts`, {
      params: { gu: obj.gu, sort: obj.sort },
    }),
  // {
  //   let decode = decodeURI(decodeURIComponent(obj.gu))
  //   hInstance.get(`/api/posts?gu=${decode}&sort=${obj.sort}`)
  // },
  //검색
  searchAX: (obj) =>
    hInstance.get(`api/posts/search`, {
      params: { searchWord: obj.searchWord, sort: obj.sort },
    }),

  //핫태그
  hotTagAX: (gu) => hInstance.get(`/api/posts/${gu}/hottest`),

  //게시글 상세 조회
  getContentDetailAX: (postId) => hInstance.get(`/api/posts/${postId}`),

  //게시글 좋아요
  postlikesAX: (postId) => hInstance.get(`/api/posts/likes/${postId}`),

  //마이페이지 내가 작성한 글
  getmypageAX: () => hInstance.get(`/api/myposts`),

  //마이페이지 북마크
  mypageMarkedAX: () => hInstance.get(`/api/bookmarks`),

  // (👎미정)마이페이지 좋아요
  // mypageLikedAX: () => hInstance.get(`/api/bookmarks`),

  //북마크
  bookMarkAX: (gu) => hInstance.post(`/api/bookmarks/${gu}`),

  //북마크 취소
  bookMarkOffAX: (gu) => hInstance.delete(`/api/bookmarks/${gu}`),

  //좋아요
  likesAX: (postId) => hInstance.post(`/api/likes/${postId}`),

  //좋아요 취소
  cancelLikesAX: (postId) => hInstance.delete(`/api/likes/${postId}`),
}

export default { hInstance, nhInstance }
