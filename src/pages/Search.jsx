import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import Post from "../components/features/Post"
import { __getSearch } from "../redux/modules/searchSlice"
import { useNavigate, useParams } from "react-router-dom"
import DetailPost from "../components/features/DetailPost"
import Layout from '../components/layout/Layout'
// import { useParams } from "react-router-dom"

const Search = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  const [sort, setSort] = useState("new")
  const [search, setSearch, searchHandle] = useInput()
  //   const gu = useParams()
  const navigate = useNavigate()
  const params = useParams()
  let obj = {
    type: 0,
    searchWord: params.searchWord,
    sort: params.sort,
  }

  const onSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${search.keyword}/${params.sort}`)
  }
  function onSort(id) {
    console.log(id)
    navigate(`/search/${params.searchWord}/${id}`)
  }

  useEffect(() => {
    dispatch(__getSearch(obj))
  }, [params])
  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Layout>
        <div className='pl-[26px] pr-[25px] pt-[32px] '>
          <p className='text-[20px] font-bold pb-[12px]'>검색</p>
          <div className='w-full h-[48px] flex items-center bg-white rounded-[5px]'>
            <input
              className='w-full pl-[16px] pt[12px] placeholder:text-[14px]  outline-0'
              name="keyword"
              defaultValue={
                params.searchWord !== undefined
                  ? params.searchWord
                  : search.keyword
              }
              value={search.keyword}
              onChange={searchHandle}
              placeholder="#을 붙이면 태그로 검색할 수 있어요"
            >
            </input>
            <svg
              className='mr-[19px]'
              onClick={onSearch}
              width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="#231F20" />
            </svg>
          </div>

          {
            posts && posts.length !== 0 ?
              <div>
                <div className='flex items-end text-bbpurple text-lg font-bold mt-10'>
                  {/* <p>{params.searchWord}</p> */}
                  용산 (5)
                </div>

                <div className='mt-6 mb-4'>
                  {params.sort === "new" ? (
                    <button
                      className="mr-3 font-bold text-bb22"
                      onClick={() => onSort("new")}
                    >
                      최신순
                    </button>
                  ) : (
                    <button
                      className="text-bb88 font-medium mr-3"
                      onClick={() => onSort("new")}
                    >
                      최신순
                    </button>
                  )}
                  |
                  {params.sort === "new" ? (
                    <button
                      className="text-bb88 font-medium ml-3"
                      onClick={() => onSort("hot")}
                    >
                      인기순
                    </button>
                  ) : (
                    <button
                      className="text-bb22 font-bold ml-3"
                      onClick={() => onSort("hot")}
                    >
                      인기순
                    </button>
                  )}
                </div>
              </div>
              : ""
          }



          <Post posts={posts} />
        </div>
      </Layout>


    </>
  )
}

export default Search

const Flex = styled.div`
  display: flex;
`
