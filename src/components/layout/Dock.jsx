import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
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

const Dock = () => {
  const navigate = useNavigate()
  const gu = localStorage.getItem("gu")

  const location = localStorage.getItem("location")

  const toLogin = () => {
    alert("로그인이 필요한 서비스입니다🥲")
    navigate("/login")
  }

  const onInfo = () => {
    alert(
      "확인하려는 위치가 선택되지 않았습니다. 홈화면에서 구를 선택하여 주십시오😀"
    )
  }

  return (
    <>
      <div className="fixed bottom-0 w-full h-[80px] bg-bbLpurple">
        <hr className="border-[0.5px] border-t-0 border-bbBB w-full" />
        <dl className="w-full h-[52px] bg-bbLpurple text-bb66 text-[10px] flex justify-evenly items-center">
          <div
            onClick={() => navigate("/home")}
            className="w-12 pt-2 pb-1 flex flex-col items-center cursor-pointer"
          >
            <dt>
              <img src={location === "home" ? hb : hg} />
            </dt>
            <dd className="mt-1">홈</dd>
          </div>
          <div
            onClick={() =>
              gu === null || undefined ? onInfo() : navigate(`/info/${gu}`)
            }
            className="w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img src={location === "info" ? ib : ig} />
            </dt>
            <dd className="mt-1">정보</dd>
          </div>
          <div
            onClick={() =>
              localStorage.getItem("nickName")
                ? navigate(`/list/${gu}/all/new`)
                : toLogin()
            }
            className="w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img className="mt-1" src={location === "com" ? cb : cg} />
            </dt>
            <dd className="mt-1">커뮤니티</dd>
          </div>
          <div
            onClick={() =>
              localStorage.getItem("nickName")
                ? navigate(`/bookmark`)
                : toLogin()
            }
            className="w-12 pt-2 pb-1 flex flex-col items-center"
          >
            <dt>
              <img src={location === "book" ? bb : bg} />
            </dt>
            <dd className="mt-0.5">북마크</dd>
          </div>
          <div
            onClick={() =>
              localStorage.getItem("nickName") ? navigate(`/mypage`) : toLogin()
            }
            className="w-12 pt-2 pb-2 flex flex-col items-center"
          >
            <dt>
              <img className="mt-1" src={location === "my" ? mb : mg} />
            </dt>
            <dd className="mt-[3px]">마이페이지</dd>
          </div>
        </dl>
      </div>
    </>
  )
}

export default Dock
