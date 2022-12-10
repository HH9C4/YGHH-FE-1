import { data } from "autoprefixer"
import React, { useState } from "react"
import { useEffect } from "react"

const ReportCateInput = ({ data, postInput, postInputHandle, level }) => {
  const [type, setType] = useState()
  useEffect(() => {
    setType(level)
  }, [type])

  return (
    <ul className="mx-auto pt-[12px] pb-[20px] flex justify-start overflow-x-auto scrollbar-hide">
      <li className="flex">
        <input
          value="1"
          onChange={postInputHandle}
          type="radio"
          id="share"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="share"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white px-[12px] h-[40px] rounded-full mr-[12px]"
        >
          유저/닉네임
        </label>
      </li>
      <li className="flex">
        <input
          defaultChecked={type && (type === 1 ? "checked" : "")}
          value="2"
          onChange={postInputHandle}
          type="radio"
          id="ques"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="ques"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white px-[12px] h-[40px] rounded-full mr-[12px]"
        >
          게시글 내용
        </label>
      </li>
      <li className="flex">
        <input
          defaultChecked={type && (type === 2 ? "checked" : "")}
          value="3"
          onChange={postInputHandle}
          type="radio"
          id="tasty"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="tasty"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white px-[12px] h-[40px] rounded-full"
        >
          댓글 내용
        </label>
      </li>
    </ul>
  )
}

export default ReportCateInput
