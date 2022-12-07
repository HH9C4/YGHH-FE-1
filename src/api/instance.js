import axios from "axios"

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

//헤더 없는 인스턴스
export const nhInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
})

//리프레쉬 인스턴스
export const reFreshInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Refresh: localStorage.getItem("Refresh_Token"),
  },
})

////////////////////////////////////// 인터셉터 시작
let isTokenRefresh = false

hInstance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    const originalConfig = error.config
    if (error.response.data.status === "303 SEE_OTHER") {
      if (!isTokenRefresh) {
        isTokenRefresh = true
        try {
          // const reissue = await reFreshInstance.get(`/user/reissue`)
          const data = await axios({
            url: `https://boombiboombi.o-r.kr/user/reissue`,
            method: "GET",
            headers: {
              Refresh: localStorage.getItem("Refresh_Token"),
            },
          })

          const Access_Token = data.headers.authorization
          localStorage.setItem("Authorization", Access_Token)

          window.location.reload()
          axios(originalConfig)
        } catch (error) {
          localStorage.removeItem("Authorization")
          localStorage.removeItem("Refresh_Token")
          localStorage.removeItem("nickName")
          alert("로그인이 만료되었습니다. 다시 로그인 해주세요.")
          window.location.replace("/login")
        }
      }
    }
    if (error.response.data.status === "401 UNAUTHORIZED") {
      localStorage.removeItem("Authorization")
      localStorage.removeItem("Refresh_Token")
      localStorage.removeItem("nickName")
      alert("로그인이 필요한 페이지입니다. 다시 로그인 해주세요.")
      window.location.replace("/login")
    }
    return Promise.reject(error)
  }
)
///////////////////////////////// 인터셉터 끝

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

  //토큰 재발급
  reIssueToken: () => reFreshInstance.get(`/user/reissue`),

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
  //중복확인
  duplicateName: () => hInstance.get(`/api/namecheck`),
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

  //게시글 작성 시 구별 태그 get
  getGuTags: (gu) => hInstance.get(`api/posts/tags`, { params: { gu: gu } }),

  //게시글 수정
  updateContentAX: (payload) =>
    hInstance.put(`/api/posts/${payload.id}`, payload.obj),

  //컨텐츠 삭제
  deleteContentAX: (data) => hInstance.delete(`/api/posts/${data.postId}`),

  //게시글 전체 조회(Hot/인기순)(contentInfo안에 ✅gu / ✅hot이 객체로 들어감)
  //게시글 전체 조회(New/최신순)(contentInfo안에 ✅gu / 🙏sort가 객체로 들어감)
  getContentAX: (obj) =>
    hInstance.get(`/api/posts`, {
      params: {
        gu: obj.gu,
        sort: obj.sort,
        category: obj.category,
        page: obj.page,
      },
    }),
  // {
  //   let decode = decodeURI(decodeURIComponent(obj.gu))
  //   hInstance.get(`/api/posts?gu=${decode}&sort=${obj.sort}`)
  // },
  //검색

  searchAX: (obj) =>
    hInstance.get(`api/posts/search`, {
      params: {
        type: obj.type,
        searchWord: obj.searchWord,
        sort: obj.sort,
        page: obj.page,
      },
    }),
  // hInstance.get(`api/posts/search`, {
  //   params: `{ type= ${obj.type}&searchWord=${obj.searchWord}&sort= ${obj.sort}&page=${obj.page}`,
  // }),
  // hInstance.get(`api/posts/search?type=${obj.type}&searchWord=${obj.searchWord}&sort= ${obj.sort}&page=${obj.page}`,
  // ),

  //핫태그
  hotTagAX: (gu) => hInstance.get(`/api/posts/hottag`, { params: { gu: gu } }),

  //게시글 상세 조회
  getContentDetailAX: (postId) => hInstance.get(`/api/posts/${postId}`),

  //게시글 좋아요
  postlikesAX: (postId) => hInstance.get(`/api/posts/likes/${postId}`),

  //마이페이지 내가 작성한 글
  getmypageAX: () => hInstance.get(`/api/myposts`),

  //마이페이지 수정
  modifyAX: (data) => hInstance.put(`/api/myinfo`, data),

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
    hInstance.put(`/api/likes?level=${postInfo.level}&id=${postInfo.postId}`),

  //좋아요 취소

  cancelLikesAX: (postInfo) =>
    hInstance.put(`/api/likes?level=${postInfo.level}&id=${postInfo.postId}`),

  // 지역구별 정보
  infoAX: (gu) =>
    hInstance.get(`/api/guinfo`, {
      params: { gu: gu },
    }),

  // 홈 정보
  homeInfoAX: () => hInstance.get(`api/maininfo`),
}
