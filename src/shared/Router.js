import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from '../pages/Detail';
import List from "../pages/Home";
import Login from '../pages/Login';
import Map from '../pages/Map';
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
import Search from '../pages/Search';
import Write from '../pages/Write';
import KakaoLogin from '../components/features/KakaoLogin';
import OAuth2RedirectHandler from "../components/features/OAuth2RedirectHandler"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={<List />} />
                <Route path="/map" element={<Map />} />
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />
                <Route path="/mypage/:id" element={<Mypage />} />
                <Route path="/detail/:id" element={<Detail />} />
                {/* Redirect uri로 이동하기 전에 인가 코드를 redirect 해주는 주소 */}
                <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;



