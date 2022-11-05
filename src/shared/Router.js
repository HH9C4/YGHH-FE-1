import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from '../pages/Detail';
import List from "../pages/Home";
import Login from '../pages/Login';
import Map from '../pages/Map';
import Mypage from '../pages/Mypage';
import Search from '../pages/Search';
import Write from '../pages/Write';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={<List />} />
                <Route path="/map" element={<Map />} />
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />

                <Route path="/mypage/:id" element={<Mypage />} />
                <Route path="/detail/:id" element={<Detail />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;



