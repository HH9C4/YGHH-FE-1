import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Splash from '../components/elements/Splash';
import Detail from "../pages/Detail"
import List from "../pages/List"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Mypage from "../pages/Mypage"
import Search from "../pages/Search"
import Write from "../pages/Write"
import BookMark from "../pages/BookMark"
import OAuth2LoginHandler from "../components/Login/OAuth2LoginHandler"
import OAuth2LogoutHandler from "../components/Login/OAuth2LogoutHandler"
import OAuthNaverLogin from "../components/Login/OAuthNaverLogin"
import FindAddress from "../pages/FindAddress"
import PopulationInfo from "../pages/PopulationInfo"
import LoginDev from "../pages/LoginDev"
import Setting from "../pages/Setting"
import WalkThrough from "../pages/WalkThrough"
import ChatRoomPage from "../pages/ChatRoomPage"
import ChatList from "../pages/ChatList"
import Report from "../pages/Report"


// const Detail = lazy(() => import("../pages/Detail"))
// const Login = lazy(() => import("../pages/Login"))
// const Home = lazy(() => import("../pages/Home"))
// const List = lazy(() => import("../pages/List"))
// const Mypage = lazy(() => import("../pages/Mypage"))
// const Search = lazy(() => import("../pages/Search"))
// const Write = lazy(() => import("../pages/Write"))
// const BookMark = lazy(() => import("../pages/BookMark"))
// const FindAddress = lazy(() => import("../pages/FindAddress"))
// const PopulationInfo = lazy(() => import("../pages/PopulationInfo"))
// const LoginDev = lazy(() => import("../pages/LoginDev"))
// const Setting = lazy(() => import("../pages/Setting"))
// const WalkThrough = lazy(() => import("../pages/WalkThrough"))
// const ChatRoomPage = lazy(() => import("../pages/ChatRoomPage"))
// const ChatList = lazy(() => import("../pages/ChatList"))
// const Report = lazy(() => import("../pages/Report"))
const Router = () => {

  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<WalkThrough />} />
      </Routes> */}
      {/* <Suspense fallback={<Splash />}> */}
      <Routes>
        <Route path="/" element={<WalkThrough />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info/:gu" element={<PopulationInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/dev" element={<LoginDev />} />
        <Route path="/list/:gu/:category/:sort" element={<List />} />
        <Route path="/write/:gu" element={<Write />} />
        <Route path="/write/:gu/:id" element={<Write />} />
        <Route path="/search/:type/:searchWord/:sort" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/address" element={<FindAddress />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chatRoomPage/:id" element={<ChatRoomPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/user/kakao/callback" element={<OAuth2LoginHandler />} />
        <Route
          path="/user/kakao/logout/callback"
          element={<OAuth2LogoutHandler />}
        />
        <Route path="/user/naver/callback" element={<OAuthNaverLogin />} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  )
}

export default Router

