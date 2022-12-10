import React from "react"

const TagInput = ({ tag, onKeyUp, onTagChange, onButtonClick }) => {
  return (
    <div className="flex text-sm text-bb22 p-6 items-center h-14 mt-1 rounded-t-md w-full bg-white border-b border-bbBB">
      <p>#</p>
      <input
        className="ml-0.5 outline-0 placeholder:text-bb88 text-sm w-full"
        value={tag}
        type="text"
        maxLength="20"
        onKeyUp={onKeyUp}
        name="tag"
        onChange={onTagChange}
        placeholder="쉼표(,)로 태그를 추가할 수 있어요"
      />
      <button
        type="button"
        onClick={() => onButtonClick()}
        className="shrink-0 hover:cursor-pointer w-6 h-6 ml-[8px] rounded-full bg-[#efefef] flex justify-center items-center"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1042 5.27085H6.72925V0.895854C6.72925 0.702467 6.65242 0.517 6.51568 0.380255C6.37893 0.24351 6.19347 0.166687 6.00008 0.166687C5.80669 0.166687 5.62123 0.24351 5.48448 0.380255C5.34774 0.517 5.27091 0.702467 5.27091 0.895854V5.27085H0.895915C0.702528 5.27085 0.517061 5.34768 0.380316 5.48442C0.243571 5.62117 0.166748 5.80663 0.166748 6.00002C0.166748 6.19341 0.243571 6.37887 0.380316 6.51562C0.517061 6.65236 0.702528 6.72919 0.895915 6.72919H5.27091V11.1042C5.27091 11.2976 5.34774 11.483 5.48448 11.6198C5.62123 11.7565 5.80669 11.8334 6.00008 11.8334C6.19347 11.8334 6.37893 11.7565 6.51568 11.6198C6.65242 11.483 6.72925 11.2976 6.72925 11.1042V6.72919H11.1042C11.2976 6.72919 11.4831 6.65236 11.6198 6.51562C11.7566 6.37887 11.8334 6.19341 11.8334 6.00002C11.8334 5.80663 11.7566 5.62117 11.6198 5.48442C11.4831 5.34768 11.2976 5.27085 11.1042 5.27085Z"
            fill="#222222"
          />
        </svg>
      </button>
    </div>
  )
}

export default TagInput
