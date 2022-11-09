import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import Post from "../components/features/Post"
import { __getSearch } from "../redux/modules/searchSlice"
import { useNavigate, useParams } from "react-router-dom"
import DetailPost from "../components/features/DetailPost"
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
    searchWord: params.searchWord,
    sort: params.sort,
  }
  console.log(params)

  const onSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${search.keyword}/${params.sort}`)
    dispatch(__getSearch(obj))
  }
  function onSort(id) {
    console.log(id)
    navigate(`/search/${search.keyword}/${id}`)
    dispatch(__getSearch(obj))
  }

  useEffect(() => {
    dispatch(__getSearch(obj))
  }, [dispatch])
  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Flex>
        <Flex>
          <input
            name="keyword"
            defaultValue={
              params.searchWord !== undefined
                ? params.searchWord
                : search.keyword
            }
            value={search.keyword}
            onChange={searchHandle}
            placeholder="검색어를 입력해주세요."
          ></input>
          <button onClick={onSearch}>검색</button>
        </Flex>
      </Flex>
      <div>
        <button onClick={() => onSort("new")}>최근</button>
        <button onClick={() => onSort("hot")}>인기있는</button>
      </div>
      <Post posts={posts} />
    </>
  )
}

export default Search

const Flex = styled.div`
  display: flex;
`
