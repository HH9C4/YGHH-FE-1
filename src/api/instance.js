import axios from "axios";
import { getCookie } from "../cookie/cookie";


//헤더 없는 인스턴스
export const nhinstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {},
});

//

//헤더 있는 인스턴스
export const hInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Access_Token": getCookie("Access_Token") === undefined ? "" : getCookie("Access_Token"),
    },
    withCredentials: true,
});


export const membersApis = {

    //로그인
    loginAX: (code) => nhinstance.get(`/user/kakao/callback?code=${code}`, {
    }),
    // loginAX: (code) => nhinstance.post(`/auth/kakao/callback?code=${code}`, {
    // }),
    //로그아웃
    logoutAX: () => hInstance.delete(`/api/logout`,),
    //게시글 삭제
    getDeletePostAX: (id) => nhinstance.delete(`/api/posts/${id}`),

    // //마이페이지 계정 수정 페이지
    // putUserInfoAX: (userinfo) => nhinstance.put("/my/update", userinfo),
};

export const commentApis = {

    //댓글 작성
    commentAddAX: (commentInfo) => hInstance.post(`/api/comments/${commentInfo}`, commentInfo),

    //댓글 삭제
    commentDeletePostAX: (id) => hInstance.delete(`/api/comments/${id}`)
};

export const contentsApis = {

    //게시글 작성
    insertContentAX: (contentInfo) => hInstance.post(`/api/posts`, contentInfo),

    //게시글 수정
    updateContentAX: (contentInfo) => hInstance.put(`/api/posts,${contentInfo}`, contentInfo),

    //게시글 삭제
    deleteContentAX: (postId) => hInstance.delete(`/api/posts/${postId}`),

    //게시글 전체 조회(Hot/인기순)(contentInfo안에 ✅gu / ✅hot이 객체로 들어감)
    ContentHotAX: (contentInfo) => hInstance.get(`/api/posts/${contentInfo}/${contentInfo}`),

    //게시글 전체 조회(New/최신순)(contentInfo안에 ✅gu / 🙏sort가 객체로 들어감)
    ContentNewAX: (contentInfo) => hInstance.get(`/api/posts/${contentInfo}/${contentInfo}`),

    //게시글 카테고리별 조회(contentInfo안에 ✅gu / 🙉category가 객체로 들어감)
    ContentCategoryAX: (contentInfo) => hInstance.get(`/api/posts/${contentInfo}/${contentInfo}`),

    //게시글 상세 조회
    getContentDetailAX: (postId) => hInstance.get(`/api/posts/${postId}`),

    //검색
    getSearchAX: (searchword) => hInstance.get(`/api/posts/${searchword}`),

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

};

