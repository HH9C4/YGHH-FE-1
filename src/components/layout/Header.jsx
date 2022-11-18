import React from "react"

const Header = () => {
  return (
    <>
      <div className="flex justify-end items-center h-[50px]">
        <div>
          {localStorage.getItem("nickName")}
          <span>님</span>
        </div>
        <img
          className="m-3 object-cover rounded-full w-[40px] h-[40px]"
          src={localStorage.getItem("profileImage")}
        ></img>
      </div>
    </>
  )
}

export default Header
