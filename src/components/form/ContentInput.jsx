import React from "react"

const ContentInput = ({ data, postInput, postInputHandle }) => {
  return (
    <textarea
      className="outline-0 mt-3 w-full rounded-md h-[324px] text-start p-6 text-sm text-bb22 placeholder:text-bb88 overflow-y-auto break-all"
      defaultValue={data ? data.content : postInput.content}
      // value={postInput.content || ""}
      name="content"
      maxLength="250"
      onChange={postInputHandle}
      placeholder="내용을 입력하세요"
    />
  )
}

export default ContentInput
