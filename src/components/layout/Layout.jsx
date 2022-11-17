import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-bblp max-w-[750px] h-full min-h-[100vh]">
        {children}
      </div>
      <footer />
    </>
  )
}

export default Layout
