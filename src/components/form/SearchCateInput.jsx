import React, { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SearchCateInput = ({ params, search, searchHandle }) => {
  const navigate = useNavigate()

  return (
    <ul className="mx-auto flex justify-start items-center text-b14 text-bb22 font-medium">
      <li className="flex">
        <input
          onClick={() =>
            navigate(`/search/0/${params.searchWord}/${params.sort}`)
          }
          defaultChecked={
            params?.type && (params.type === "0" ? "checked" : "")
          }
          value="0"
          onChange={searchHandle}
          type="radio"
          id="일반"
          name="type"
          className="peer appearance-none"
        />
        <label
          htmlFor="일반"
          className="peer-checked:text-bbpurple peer-checked:font-bold hover:cursor-pointer mr-[12px]"
        >
          일반
        </label>
      </li>
      <li className="flex">
        <input
          onClick={() =>
            navigate(`/search/1/${params.searchWord}/${params.sort}`)
          }
          defaultChecked={
            params?.type && (params.type === "1" ? "checked" : "")
          }
          value="1"
          onChange={searchHandle}
          type="radio"
          id="태그"
          name="type"
          className="peer appearance-none"
        />
        <label
          htmlFor="태그"
          className="peer-checked:text-bbpurple peer-checked:font-bold hover:cursor-pointer mr-[12px]"
        >
          태그
        </label>
      </li>
      <li className="flex">
        <input
          onClick={() =>
            navigate(`/search/2/${params.searchWord}/${params.sort}`)
          }
          defaultChecked={
            params?.type && (params.type === "2" ? "checked" : "")
          }
          value="2"
          onChange={searchHandle}
          type="radio"
          id="작성자"
          name="type"
          className="peer appearance-none"
        />
        <label
          htmlFor="작성자"
          className="peer-checked:text-bbpurple peer-checked:font-bold hover:cursor-pointer mr-[12px]"
        >
          작성자
        </label>
      </li>
    </ul>
  )
}

export default SearchCateInput
