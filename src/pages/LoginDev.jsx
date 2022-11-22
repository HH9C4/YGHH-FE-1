import React from "react"
import { useDispatch } from "react-redux"
import { __testLogin } from "../redux/modules/memberSlice"

const LoginDev = () => {
  const dispatch = useDispatch()
  const onLogin = () => {
    dispatch(__testLogin())
  }
  return (
    <>
      <div onClick={onLogin}>로그인</div>
    </>
  )
}

export default LoginDev
