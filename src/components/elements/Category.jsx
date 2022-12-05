import React from "react"

const Category = ({ postInput, postInputHandle }) => {
  return (
    <ul className=" pt-3 pb-8 flex items-center overflow-x-auto">
      <li className="flex w-full relative items-center ">
        <input
          value="공유"
          onChange={postInputHandle}
          type="radio"
          id="share"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="share"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white w-20 h-10 rounded-full mr-3"
        >
          공유
        </label>
      </li>
      <li className="flex w-full relative items-center">
        <input
          value="질문"
          onChange={postInputHandle}
          type="radio"
          id="ques"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="ques"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white w-20 h-10 rounded-full mr-3"
        >
          질문
        </label>
      </li>
      <li className="flex w-full relative items-center ">
        <input
          value="맛집"
          onChange={postInputHandle}
          type="radio"
          id="tasty"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="tasty"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white w-20 h-10 rounded-full mr-3"
        >
          맛집
        </label>
      </li>
      <li className="flex w-full relative items-center ">
        <input
          value="일상"
          onChange={postInputHandle}
          type="radio"
          id="daily"
          name="category"
          className="peer appearance-none"
        />
        <label
          htmlFor="daily"
          className="hover:cursor-pointer flex items-center justify-center shrink-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-[14px] font-medium bg-white text-bb22 peer-checked:bg-bbpurple peer-checked:text-white w-20 h-10 rounded-full mr-3"
        >
          일상
        </label>
      </li>
    </ul>
  )
}

export default Category
