import React from "react"
import Spinner from "../../assets/spinner.gif"

//이 컴포넌트의 목적은 로딩 시, 사용자에게 빈 화면을 보여주지 않고
//스피너를 통해 로딩 중이라는 것을 보여주기 위한 목적.

export default () => {
  return (
    <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#ffffb7] z-20 flex flex-column items-center justify-center">
      <p className="text-[14px] text-center">잠시만 기다려 주세요.</p>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  )
}
