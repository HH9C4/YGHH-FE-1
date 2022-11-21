import React, { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import DaumPostcode from "react-daum-postcode"
import Landing from "../components/features/Landing"

const FindAddress = () => {
  const navigate = useNavigate()
  const [address, setAddress] = useState("")
  const [toggle, setToggle] = useState(false)

  var themeObj = {
    bgColor: "#F6EFFF", //바탕 배경색
    searchBgColor: "#FFFFFF", //검색창 배경색
    contentBgColor: "#FFFFFF", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "#FFFFFF", //페이지 배경색
    textColor: "#444444", //기본 글자색
    queryTextColor: "#222222", //검색창 글자색
    postcodeTextColor: "#FF6FB5", //우편번호 글자색
    emphTextColor: "#9853F0", //강조 글자색
    outlineColor: "#F6EFFF", //테두리
  }

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "100%",
    minHeight: "100vh",
    height: "200px",
    maxHeight: "100vh",
    padding: "7px",
  }
  const handleComplete = (data) => {
    let fullAddress = data.address
    let extraAddress = ""

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
    }
    const userSearched = fullAddress.split(" ", 2)

    if (
      userSearched[0] === "서울"
      // userSearched[1].substring(
      //   userSearched[1].length - 1,
      //   userSearched[1].length
      // ) === "구"
    ) {
      setAddress(fullAddress)
      setToggle(!toggle)
    } else {
      alert("현재는 서울지역만 서비스하고 있어요 😢")
      setToggle(false)
      window.location.reload(`/address`)
    }
  }
  const onClose = () => {
    setToggle(!toggle)
    window.location.reload(`/address`)
  }

  return (
    <>
      <DaumPostcode
        theme={themeObj}
        style={postCodeStyle}
        onComplete={handleComplete}
      />
      {address !== "" && toggle ? (
        <Landing data={address} onClose={onClose} />
      ) : (
        ""
      )}
    </>
  )
}
export default FindAddress
