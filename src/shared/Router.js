import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HotTag from "../components/features/HotTag"
import Detail from "../pages/Detail"
import List from "../pages/List"
import Login from "../pages/Login"
import Mypage from "../pages/Mypage"
import Search from "../pages/Search"
import Write from "../pages/Write"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list/:gu/:sort" element={<List />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/write" element={<Write />} />
        <Route path="/hottest/:gu" element={<HotTag />} />
        <Route path="/mypage/:id" element={<Mypage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
