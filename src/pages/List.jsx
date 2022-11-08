import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCookie } from "../cookie/cookie"
import Post from "../components/features/Post"
import { __getContent } from "../redux/modules/contentsSlice"

const List = () => {
  const [gu, setGu] = useState("")
  const { contents } = useSelector((state) => state.contents)
  const params = useParams()
  console.log(params)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let obj = {
    gu: params.gu,
    sort: params.sort,
  }

  useEffect(() => {
    dispatch(__getContent(obj))
  }, [dispatch])

  return (
    <>
      <div>지금</div>
      <select
        name="gu"
        defaultValue={params.gu}
        onChange={(e) => {
          // setGu(e.target.value)
          navigate(`/list/${e.target.value}/${params.sort}`)
        }}
      >
        <option value={"강남구"}>강남붐비</option>
        <option value={"강동구"}>강동붐비</option>
        <option value={"강북구"}>강북붐비</option>
        <option value={"강서구"}>강서붐비</option>
        <option value={"관악구"}>관악붐비</option>
        <option value={"광진구"}>광진붐비</option>
        <option value={"구로구"}>구로붐비</option>
        <option value={"금천구"}>금천붐비</option>
        <option value={"노원구"}>노원붐비</option>
        <option value={"도봉구"}>도봉붐비</option>
        <option value={"동대문구"}>동대문붐비</option>
        <option value={"마포구"}>마포붐비</option>
        <option value={"서대문구"}>서대문붐비</option>
        <option value={"서초구"}>서초붐비</option>
        <option value={"성동구"}>성동붐비</option>
        <option value={"성북구"}>성북붐비</option>
        <option value={"송파구"}>송파붐비</option>
        <option value={"양천구"}>양천붐비</option>
        <option value={"용산구"}>용산붐비</option>
        <option value={"은평구"}>은평붐비</option>
        <option value={"종로구"}>종로붐비</option>
        <option value={"중구"}>중구붐비</option>
      </select>
      <div>
        {getCookie("accountName")}
        <span>님</span>
      </div>
      <img src={getCookie("accountImg")}></img>

      <div>
        <button onClick={() => navigate(`/list/${params.gu}/new`)}>최근</button>
        <button onClick={() => navigate(`/list/${params.gu}/hot`)}>
          인기있는
        </button>
        <button onClick={() => navigate(`/hottest/${params.gu}`)}>
          🔥HOT-TAG 20
        </button>
      </div>

      {/* <Post posts={contents} /> */}
    </>
  )
}

export default List
