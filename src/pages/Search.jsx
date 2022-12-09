import React, { useRef, useState, useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import Post from "../components/list/Post"
import { contentsApis } from "../api/instance"
import { useNavigate, useParams } from "react-router-dom"
import Layout from "../components/layout/Layout"
import { useInView } from "react-intersection-observer"
import { searchList, searchSizes } from "../components/state/store"
import { useRecoilState } from "recoil"
// import { useParams } from "react-router-dom"

const Search = () => {
  const dispatch = useDispatch()
  const [sort, setSort] = useState("new")
  const [search, setSearch, searchHandle] = useInput()
  const navigate = useNavigate()
  const params = useParams()
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
  useEffect(() => {
    setLocation("search")
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

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
    if (inView && !loading) {
      setPage((prevState) => prevState + 1)
    }
  }, [inView, loading])

  useEffect(() => {
    setPage(0)
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [params])

  let obj = {
    type: params.type,
    searchWord: params.searchWord,
    sort: params.sort,
    page: page,
  }

  const onSearch = (e) => {
    e.preventDefault()
    navigate(`/search/0/${search.keyword}/${params.sort}`)
  }
  function onSort(id) {
    navigate(`/search/0/${params.searchWord}/${id}`)
  }

  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Layout>
        <div className="pl-[26px] pr-[25px] pt-[32px]">
          <h1 className="text-[20px] font-bold pb-[12px] mr-1">검색</h1>
          <form className="w-full h-[48px] flex items-center bg-white rounded-[5px]">
            <input
              className="w-full pl-[16px] pt[12px] placeholder:text-b14 text-b14 text-bb22 outline-0 mr-1"
              name="keyword"
              defaultValue={
                params.searchWord !== (undefined || "undefined")
                  ? params.searchWord
                  : search.keyword
              }
              value={search.keyword}
              onChange={searchHandle}
              placeholder="검색어를 입력해주세요."
            ></input>
            <button onClick={onSearch}>
              <svg
                className="mr-[19px] cursor-pointer"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"
                  fill="#231F20"
                />
              </svg>
            </button>
          </form>

          {params.searchWord !== undefined && searchs.length !== 0 ? (
            <div>
              <p className="flex items-end text-bbpurple text-lg font-bold mt-10">
                {params.searchWord}({searchSize})
              </p>

              <div className="mt-[12px] mb-[16px] text-b14">
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
          <div ref={ref}></div>
        </div>
      </Layout>
    </>
  )
}

export default Search
