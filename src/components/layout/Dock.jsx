import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import hg from "../../assets/img/dock/home_g.svg"
import hb from "../../assets/img/dock/home_b.svg"
import ig from "../../assets/img/dock/info_g.svg"
import ib from "../../assets/img/dock/info_b.svg"
import cg from "../../assets/img/dock/com_g.svg"
import cb from "../../assets/img/dock/com_b.svg"
import bg from "../../assets/img/dock/book_g.svg"
import bb from "../../assets/img/dock/book_b.svg"
import mg from "../../assets/img/dock/mem_g.svg"
import mb from "../../assets/img/dock/mem_b.svg"
import SelectGuInfo from "../elements/SelectGuInfo"

const Dock = () => {
  const [location, setLocation] = useState()
  const [select, setSelect] = useState(false)
  const navigate = useNavigate()
  const lo = localStorage.getItem("location")
  const gu = localStorage.getItem("gu")
  const nickName = localStorage.getItem("nickName")
  const toLogin = () => {
    alert("로그인이 필요한 서비스입니다:(")
    navigate("/login")
  }
  const onList = () => {
    console.log(gu)
    if (
      gu === null ||
      gu === "null" ||
      gu === undefined ||
      gu === "undefined"
    ) {
      alert("구가 선택되지 않았습니다.")
      setSelect(true)
      console.log(select)
    } else if (!nickName) {
      toLogin()
    } else {
      navigate(`/list/${gu}/all/new`)
    }
  }

  const onInfo = () => {
    console.log(gu)
    if (
      gu === null ||
      gu === "null" ||
      gu === undefined ||
      gu === "undefined"
    ) {
      alert("구가 선택되지 않았습니다.")
      setSelect(true)
    } else if (!nickName) {
      toLogin()
    } else {
      navigate(`/info/${gu}`)
    }
  }

  useEffect(() => {
    if (lo !== undefined) setLocation(lo)
  }, [lo])
  return (
    <div key={Math.random()}>
      {select ? (
        <div className="fixed bottom-[0px] left-0">
          <div className="w-[100vw] h-[100vh] overflow-hidden bg-bbLpurple">
            <div className="max-w-[420px] mx-auto pl-[25px] pr-[26px]">
              <div className="w-full text-right mt-[24px]">
                <button
                  className="rotate-45 transition-transform duration-300 mx-auto mt-[52px]"
                  onClick={() => setSelect(false)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                      fill="#222222"
                    />
                  </svg>
                </button>
              </div>
              <SelectGuInfo />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="fixed bottom-0 w-full h-[80px] bg-bbLpurple">
        <hr className="border-[0.5px] border-t-0 border-bbBB w-full" />
        <dl className="w-full h-[52px] max-w-[420px] mx-auto bg-bbLpurple text-bb66 text-[10px] flex justify-evenly items-center">
          <div
            onClick={onInfo}
            className="hover:cursor-pointer w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img src={location === "info" ? ib : ig} />
            </dt>
            <dd className="mt-1">정보</dd>
          </div>
          <div
            onClick={onList}
            className="hover:cursor-pointer w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img className="mt-1" src={location === "list" ? cb : cg} />
            </dt>
            <dd className="mt-1">커뮤니티</dd>
          </div>
          <div
            onClick={() => navigate("/home")}
            className="hover:cursor-pointer w-12 pt-2 pb-1 flex flex-col items-center cursor-pointer"
          >
            <dt>
              <img src={location === "home" ? hb : hg} />
            </dt>
            <dd className="mt-1">홈</dd>
          </div>
          <div
            onClick={() => (nickName ? navigate(`/bookmark`) : toLogin())}
            className="hover:cursor-pointer w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img src={location === "book" ? bb : bg} />
            </dt>
            <dd className="mt-0.5">북마크</dd>
          </div>
          <div
            onClick={() => (nickName ? navigate(`/mypage`) : toLogin())}
            className="hover:cursor-pointer w-12 pt-2 pb-2 flex flex-col items-center"
          >
            <dt>
              <img className="mt-1" src={location === "my" ? mb : mg} />
            </dt>
            <dd className="mt-[3px]">마이페이지</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Dock
