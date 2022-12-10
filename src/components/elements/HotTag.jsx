import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { contentsApis } from "../../api/instance"

const HotTag = ({ onHotTag, hotTag }) => {
  const navigate = useNavigate()
  const [hotTags, setHotTags] = useState()
  const gu = localStorage.getItem("gu")
  const onSearch = (tag) => {
    navigate(`/search/1/${tag}/new`)
  }

  const getHotTag = async (gu) => {
    try {
      const res = await contentsApis.hotTagAX(gu)
      return setHotTags(res.data.data.tagList)
    } catch (error) {
      alert(error.response.data.msg)
      return
    }
  }

  useEffect(() => {
    if (hotTag) getHotTag(gu)
  }, [hotTag])

  return (
    <div className="h-[300px]  relative border-[0.5px] border-bbBB bg-white w-full rounded-md mt-[4px] p-[20px]">
      <svg
        onClick={onHotTag}
        className="absolute right-[16px] top-[16px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L13.41 12z"
          fill="#231F20"
        />
      </svg>

      <div className="h-full mt-[36px] flex flex-wrap content-start gap-[8px] ">
        {hotTags &&
          hotTags.map((hot) => {
            if (hot.length !== 0)
              return (
                <button
                  key={hot}
                  className="px-[10px] h-[32px] py-[7px] rounded-[3px] bg-bbyellow text-b12"
                  value={hot}
                  onClick={() => onSearch(hot)}
                >
                  # {hot}
                </button>
              )
          })}
      </div>
    </div>
  )
}

export default HotTag
