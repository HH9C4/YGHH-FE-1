import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import navbarLogo from "../../assets/img/navbarLogo.svg"
import { setGu } from "../../redux/modules/memberSlice"
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const nickName = localStorage.getItem("nickName")
  const profileImage = localStorage.getItem("profileImage")

  useEffect(() => {
    if (params.gu !== undefined && params.gu !== "undefined") {
      dispatch(setGu(params.gu))
    }
  }, [params])

  return (
    <div className="flex items-center fixed top-0 px-6 w-full bg-bbLpurple border-b-[0.5px] border-bbBB h-[52px]">
      <div className="max-w-[420px] mx-auto w-full flex justify-between items-center">
        <img alt='navbarLogo' onClick={() => navigate("/home")} src={navbarLogo}></img>
        <div className="flex items-center">
          {nickName !== (undefined || null) ? (
            <dl
              onClick={() => navigate("/mypage")}
              className="flex justify-end items-center cursor-pointer"
            >
              <dt>
                <img
                  alt='pro'
                  className="m-3 object-cover rounded-full w-[18px] h-[18px]"
                  src={profileImage}
                />
              </dt>

              <dd className="text-xs text-bb22 after:ml-1">
                <span className="font-medium">{nickName}</span>님
              </dd>
            </dl>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-xs text-bb22 font-medium cursor-pointer"
            >
              로그인
            </button>
          )}
          <svg
            onClick={() => navigate("/chat")}
            className='mx-[12px]'
            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_801_894)">
              <path d="M8.88337 3C5.08604 3 2 5.68451 2 9C2 10.3308 2.50478 11.5468 3.33078 12.5449L2.90631 14.4379C2.826 14.782 3.22753 15.0803 3.61759 14.9771L5.90057 14.4034C6.80688 14.782 7.80497 15 8.87189 15C12.6692 15 15.7553 12.3155 15.7553 9C15.7553 5.68451 12.6692 3 8.87189 3H8.88337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_801_894">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            onClick={() => navigate("/search/0/undefined/new")}
            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#bxdvyg8zna)" stroke="#000" stroke-width="1.5" stroke-miterlimit="10">
              <path d="M8.047 13.635c3.003 0 5.438-2.468 5.438-5.512 0-3.045-2.434-5.513-5.438-5.513-3.003 0-5.437 2.468-5.437 5.513 0 3.044 2.434 5.512 5.437 5.512z" />
              <path d="M15.39 15.39 12 11.955" stroke-linecap="round" />
            </g>
            <defs>
              <clipPath id="bxdvyg8zna">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
