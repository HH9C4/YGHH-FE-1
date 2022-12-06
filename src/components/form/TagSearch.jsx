import React from "react"

const TagSearch = ({ tags, searchTag, removeTags, onButtonClick }) => {
  return (
    <ul className="relative rounded-b-md bg-white h-[240px] px-[24px] py-[16px] overflow-auto">
      <div className="flex flex-wrap">
        {tags.map((tag) => {
          return (
            <div
              key={tag + Math.random()}
              name={tag}
              onClick={() => removeTags(tag)}
              className="hover:cursor-pointer text-[12px] text-bb22 bg-bbyellow mr-[8px] mb-[8px] px-[9px] py-[7px] rounded-md"
            >
              # {tag}
            </div>
          )
        })}
        {0 < tags.length && tags.length < 11 ? (
          <p className="text-b11 text-bbpurple absolute bottom-[0px] left-0 py-[8px] px-[24px] bg-white w-full">
            ※ 태그를 클릭해서 등록한 태그를 삭제할 수 있어요.
          </p>
        ) : (
          ""
        )}
      </div>
      {searchTag && (
        <div
          className={
            searchTag.length !== 0
              ? "absolute top-0 left-0 w-full rounded-b-md bg-white h-[240px] overflow-auto"
              : "hidden"
          }
        >
          {searchTag.map((search) => {
            return (
              <li
                onClick={() => onButtonClick(search)}
                key={search + Math.random()}
                className="hover:cursor-pointer last-of-type:rounded-b-md active:bg-[#fff6c9] flex p-6 items-center text-bb22 text-sm w-full h-14 bg-white"
              >
                # {search}
              </li>
            )
          })}
        </div>
      )}
    </ul>
  )
}

export default TagSearch
