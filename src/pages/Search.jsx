import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import Post from "../components/features/Post"
import { __getSearch } from "../redux/modules/searchSlice"
import { useParams } from "react-router-dom"
// import { useParams } from "react-router-dom"

const Search = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  const [search, setSearch, searchHandle] = useInput()
  //   const gu = useParams()
  const param = useParams()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(__getSearch(search.word))
  }

  useEffect(() => {
    dispatch(__getSearch(param.keyword))
  })
  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Flex>
        <Flex>
          <input
            name="word"
            defaultValue={param.keyword}
            value={search.word}
            onChange={searchHandle}
            placeholder="검색어를 입력해주세요."
          ></input>
          <button onClick={onSubmit}>검색</button>
        </Flex>
      </Flex>
      <Post posts={posts} />
    </>
  )
}
export default Search

const Flex = styled.div`
  display: flex;
`
