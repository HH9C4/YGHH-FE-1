import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Layout from "../layout/Layout"

const Landing = ({ data, onClose }) => {
  //   const state = useLocation()
  //   //   const [data, setData] = useState()
  //   const address = state.state
  //   useEffect(() => {
  //     window.location.reload()
  //     //   setData(address)
  //   }, [address])

  //   console.log("랜딩 스테이트", address)
  return (
    <Layout>
      <button
        className="mx-[26px] mt-[24px] text-[14px] border-2 w-[330px] h-[48px] rounded-[90px] text-white bg-bbpink"
        onClick={onClose}
      >
        원하는 장소 다시 찾아보기
      </button>
      <div>{data}</div>
    </Layout>
  )
}

export default Landing
