import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from '../pages/Detail';
import List from "../pages/Home";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
import Search from '../pages/Search';
import Write from '../pages/Write';
import Search from "../pages/Search"
import HotTag from "../components/features/HotTag"
import List from "../pages/List"
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
               <Route path="/list/:gu/:sort" element={<List />} />
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />
                <Route path="/search/:keyword" element={<Search />} />
                <Route path="/hottest/:gu" element={<HotTag />} />
                <Route path="/mypage/:id" element={<Mypage />} />
                <Route path="/detail/:id" element={<Detail />} />
                
                {/* Redirect uri로 이동하기 전에 인가 코드를 redirect 해주는 주소 */}
                <Route path="/user/kakao/callback" element={<OAuth2RedirectHandler />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
