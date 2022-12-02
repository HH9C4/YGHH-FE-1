import React from "react"
import Header from "./Header"
import Dock from "./Dock"
import TopBtn from "../elements/TopBtn"

const Layout = ({ children }) => {
  return (
    <div className="bg-bbLpurple w-full h-full min-h-[100vh] overflow-scroll">
      <div className="bg-bbLpurple mx-auto pt-[44px] pb-[96px] max-w-[420px] h-full min-h-[100vh]">
        <div className="z-0">{children}</div>
      </div>
      <Header />
      <Dock />
      <TopBtn />
    </div>
  )
}

export default Layout
