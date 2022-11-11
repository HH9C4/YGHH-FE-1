import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import Post from "../components/features/Post"
import { useNavigate, useParams } from "react-router-dom"
import DetailPost from "../components/features/DetailPost"
import { __getMyContent } from "../../redux/modules/contentsSlice"
// import { useParams } from "react-router-dom"

const MyPosts = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  //   const gu = useParams()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    dispatch(__getMyContent())
  }, [params])
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

export default MyPosts

const Flex = styled.div`
  display: flex;
`
