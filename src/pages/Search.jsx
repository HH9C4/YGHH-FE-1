import React, { useState, useEffect, useCallback } from "react"
import useInput from "../hooks/useInput"
import Post from "../components/list/Post"
import { contentsApis } from "../api/instance"
import { useNavigate, useParams } from "react-router-dom"
import Layout from "../components/layout/Layout"
import length0 from "../assets/img/length0.png"
import { useInView } from "react-intersection-observer"
import { searchList, searchSizes } from "../components/state/store"
import { useRecoilState } from "recoil"
import SearchFormContainer from "../components/form/SearchFormContainer"
// import { useParams } from "react-router-dom"

const Search = () => {
  const [search, setSearch, searchHandle] = useInput()
  const navigate = useNavigate()
  const params = useParams()
  const [tab, setTag] = useState(false)
  const onTab = () => {
    setTag(!tab)
  }

  const [page, setPage] = useState(0) //페이지수
  const [loading, setLoading] = useState(false)
  const [ref, inView] = useInView()

  const [searchs, setSearchs] = useRecoilState(searchList)
  const [searchSize, setSearchSize] = useRecoilState(searchSizes)
  const getSearch = async (payload) => {
    const res = await contentsApis.searchAX(payload)
    const searchList = res.data.data.postList
    setSearchSize(res.data.data.sizeOfList)
    if (page === 0) {
      setSearchs(searchList)
    } else {
      setSearchs([...searchs, ...searchList])
    }
    return
  }

  const setLocation = (l) => {
    localStorage.setItem("location", l)
  }

  /**  서버에서 아이템을 가지고 오는 함수 */
  const getItems = useCallback(async () => {
    //의존하는 값(deps)들이 바뀌지 않는 한 기존 함수를 재사용할 수 있습니다.
    getSearch(obj)
  }, [page, params])

  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (searchs.length !== 0 && inView && !loading) {
      setPage((prevState) => prevState + 1)
    }
  }, [inView, loading])

  useEffect(() => {
    setPage(0)
    setLocation("search")
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
    })
  }, [params])

  let obj = {
    type: params.type,
    searchWord: params.searchWord,
    sort: params.sort,
    page: page,
  }

  const onSearch = (e) => {
    if (search.keyword !== "") {
      e.preventDefault()
      navigate(`/search/${params.type}/${search.keyword}/${params.sort}`)
    } else {
      alert("검색어를 입력해주세요.")
    }
  }
  function onSort(id) {
    navigate(`/search/${params.type}/${params.searchWord}/${id}`)
  }

  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Layout>
        <div className="pl-[26px] pr-[25px] pt-[32px]">
          <div className="flex relative items-start">
            <h1 className="text-[20px] font-bold pb-[12px] mr-1">검색</h1>
            <button onClick={onTab} className="ml-[2px] mt-[7px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7.25"
                  stroke="#666666"
                  stroke-width="1.5"
                />
                <g clip-path="url(#clip0_894_2043)">
                  <path
                    d="M8 8.5C7.605 8.5 7.28625 8.1875 7.28625 7.80125C7.28625 7.415 7.60625 7.1025 8 7.1025C8.86625 7.1025 9.57125 6.49625 9.57125 5.75125C9.57125 5.00625 8.86625 4.4 8 4.4C7.13375 4.4 6.42875 5.00625 6.42875 5.75125C6.42875 6.1375 6.10875 6.45 5.715 6.45C5.32125 6.45 5 6.13625 5 5.75C5 4.23375 6.34625 3 8 3C9.65375 3 11 4.23375 11 5.75C11 7.26625 9.65375 8.5 8 8.5Z"
                    fill="#666666"
                  />
                  <path
                    d="M8.03125 10.125C7.6175 10.125 7.28125 9.8 7.28125 9.39875V7.85C7.28125 7.44875 7.6175 7.12375 8.03125 7.12375C8.445 7.12375 8.78125 7.44875 8.78125 7.85V9.39875C8.78125 9.8 8.445 10.125 8.03125 10.125Z"
                    fill="#666666"
                  />
                  <path
                    d="M8.03125 13C8.58353 13 9.03125 12.5523 9.03125 12C9.03125 11.4477 8.58353 11 8.03125 11C7.47897 11 7.03125 11.4477 7.03125 12C7.03125 12.5523 7.47897 13 8.03125 13Z"
                    fill="#666666"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_894_2043">
                    <rect
                      width="6"
                      height="10"
                      fill="white"
                      transform="translate(5 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div
              className={
                tab
                  ? "flex items-center absolute top-[-16px] left-[54px]"
                  : "hidden"
              }
            >
              <svg
                className="ml-[8px]"
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 10V0L0 5L8 10Z" fill="white" />
              </svg>
              <div
                onClick={onTab}
                className="rounded-md bg-white px-[12px] py-[4px] text-b11 text-bb66"
              >
                <p>일반 : 콘텐츠와 태그 내용을 한번에 검색해요</p>
                <p>태그 : 태그만 검색해요</p>
                <p>작성자 : 닉네임으로 검색해요</p>
              </div>
            </div>
          </div>
          <SearchFormContainer
            search={search}
            setSearch={setSearch}
            searchHandle={searchHandle}
            params={params}
            onSearch={onSearch}
          />

          {params.searchWord !== "undefined" && searchSize !== -1 ? (
            <div>
              <p className="flex items-end text-bb22 text-b18 font-bold mt-[40px]">
                {params.searchWord} ({searchSize})
              </p>

              <div className="mt-[8px] mb-[16px] text-b14">
                <button
                  className={
                    params.sort === "new"
                      ? "mr-3 font-bold text-bb22 "
                      : "text-bb88 font-medium mr-3"
                  }
                  onClick={() => onSort("new")}
                >
                  최신순
                </button>
                |
                <button
                  className={
                    params.sort === "new"
                      ? "text-bb88 font-medium ml-3"
                      : "text-bb22 font-bold ml-3"
                  }
                  onClick={() => onSort("hot")}
                >
                  인기순
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <Post posts={searchs} />
          {searchSize === 0 ? (
            <div className="text-center mt-[102px] text-bb88 font-medium">
              <img className="w-[140px] mb-[8px] mx-auto" src={length0} />
              <p className="text-b24 ">앗!</p>
              <p className="text-b16">검색 결과가 없어요.</p>
            </div>
          ) : (
            ""
          )}
          <div ref={ref}></div>
        </div>
      </Layout>
    </>
  )
}

export default Search
