import axios from "axios"

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
      localStorage.getItem("Authorization") === undefined
        ? ""
        : localStorage.getItem("Authorization"),
  },
  withCredentials: true,
})

//카카오 탈퇴 인스턴스
export const kakaoinstance = axios.create({
  baseURL: "https://kapi.kakao.com",
  headers: {
    Authorization:
      localStorage.getItem("Authorization") === undefined
        ? ""
        : localStorage.getItem("Authorization"),
  },
  withCredentials: true,
})

export const membersApis = {
  //로컬용 테스트로그인
  testloginAX: () => nhInstance.get("https://boombiboombi.o-r.kr/user/tester"),

  //카카오 로그인
  kakaologinAX: (code) => nhInstance.get(`/user/signin/kakao?code=${code}`),
  //로그아웃 서버통신
  logoutAX: () => hInstance.delete(`/api/logout`),

  //카카오 연결끊기
  kakaodeleteAX: () => kakaoinstance.post(`/v1/user/unlink`),

  //네이버 로그인
  naverloginAX: (loginData) =>
    nhInstance.get(
      `/user/signin/naver?code=${loginData.code}&state=${loginData.state}`
    ),
}

export const commentApis = {
  //댓글 작성

  commentAddAX: (commentInfo) =>
    hInstance.post(`/api/comments/${commentInfo.commentLevel}`, commentInfo),

  //댓글 삭제
  commentDeletePostAX: (id) => hInstance.delete(`/api/comments/${id}`),
}

export const contentsApis = {
  //게시글 작성
  insertContentAX: (contentInfo) => hInstance.post(`/api/posts`, contentInfo),

  //게시글 수정
  updateContentAX: (payload) =>
    hInstance.put(`/api/posts/${payload.id}`, payload.obj),

  //컨텐츠 삭제
  deleteContentAX: (data) => hInstance.delete(`/api/posts/${data.postId}`),

  //게시글 전체 조회(Hot/인기순)(contentInfo안에 ✅gu / ✅hot이 객체로 들어감)
  //게시글 전체 조회(New/최신순)(contentInfo안에 ✅gu / 🙏sort가 객체로 들어감)
  getContentAX: (obj) =>
    hInstance.get(`/api/posts`, {
      params: { gu: obj.gu, sort: obj.sort, category: obj.category },
    }),
  // {
  //   let decode = decodeURI(decodeURIComponent(obj.gu))
  //   hInstance.get(`/api/posts?gu=${decode}&sort=${obj.sort}`)
  // },
  //검색

  searchAX: (obj) =>
    hInstance.get(`api/posts/search`, {
      params: { type: obj.type, searchWord: obj.searchWord, sort: obj.sort },
    }),

  //핫태그
  hotTagAX: (gu) => hInstance.get(`/api/posts/${gu}/hottest`),

  //게시글 상세 조회
  getContentDetailAX: (postId) => hInstance.get(`/api/posts/${postId}`),

  //게시글 좋아요
  postlikesAX: (postId) => hInstance.get(`/api/posts/likes/${postId}`),

  //마이페이지 내가 작성한 글
  getmypageAX: () => hInstance.get(`/api/myposts`),

  //   (👎미정)마이페이지 좋아요
  mypageLikedAX: () => hInstance.get(`/api/mylikes`),

  // 마이페이지 알림탭
  mypageNoticeAX: () => hInstance.get(`api/alarm`),

  // 마이페이지 알림 확인완료
  mypageNoticeConfirmAX: (commentId) =>
    hInstance.post(`api/alarm/${commentId}`),

  //북마크
  bookMarkAX: (gu) => hInstance.post(`/api/bookmarks/${gu}`),

  //북마크 반환
  returnBookMarkAX: () => hInstance.get(`api/mybookmarks`),

  //북마크 취소
  bookMarkOffAX: (gu) => hInstance.delete(`/api/bookmarks/${gu}`),

  //좋아요
  likesAX: (postInfo) =>
    hInstance.post(
      `/api/likes?level=${postInfo.level}&id=${postInfo.contentId}`
    ),

  //좋아요 취소

  cancelLikesAX: (postInfo) =>
    hInstance.delete(
      `/api/likes?level=${postInfo.level}&id=${postInfo.contentId}`
    ),
}

export default { hInstance, nhInstance }
