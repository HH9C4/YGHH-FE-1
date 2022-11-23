import React from "react"
import Header from "./Header"
import Dock from "./Dock"
import TopBtn from "../elements/TopBtn"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-bbLpurple pb-[96px] max-w-[750px] h-full min-h-[100vh]">
        {children}
      </div>
      <Dock />
      <TopBtn />
    </>
  )
}

export default Layout
