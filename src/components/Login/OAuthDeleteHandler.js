import React from "react"
import { useEffect } from "react"
import Loading from "./Loading"
import { membersApis } from "../../api/instance"

const OAuthDeleteHandler = () => {
  //연결끊기 Thunk
  const kakaoDelete = async (payload) => {
    try {
      const res = await membersApis.kakaodeleteAX(payload)

      if (res.data.status === "200 OK") {
        localStorage.removeItem("Authorization")
        localStorage.removeItem("Refresh_Token")
        localStorage.removeItem("nickName")
        localStorage.removeItem("profileImage")
        localStorage.removeItem("ageRange")
        localStorage.removeItem("email")
        localStorage.removeItem("gender")
        localStorage.removeItem("bookmarkList")
        localStorage.removeItem("sse")
        window.location.replace("/")
      }
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    kakaoDelete()
  }, [])

  return <Loading />
}

export default OAuthDeleteHandler
