import React from "react"
import Header from "./Header"
import Floating from "../elements/Floating"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-bbLpurple pb-[52px] max-w-[750px] h-full min-h-[100vh]">
        {children}
      </div>
      <footer />
      <Floating />
    </>
  )
}

export default Layout
