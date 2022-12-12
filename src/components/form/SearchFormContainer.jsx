import React from "react"
import SearchCateInput from "./SearchCateInput"

const SearchFormContainer = ({
  onSearch,
  search,
  setSearch,
  searchHandle,
  params,
}) => {
  return (
    <div>
      <SearchCateInput
        search={search}
        searchHandle={searchHandle}
        params={params}
      />
      <form className="w-full mt-[12px] h-[48px] flex items-center bg-white rounded-[5px]">
        <input
          className="w-full pl-[16px] placeholder:text-b14 text-b14 text-bb22 outline-0 mr-1"
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
    </div>
  )
}

export default SearchFormContainer
