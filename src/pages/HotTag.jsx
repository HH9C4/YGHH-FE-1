import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import __getContent from "../redux/modules/contentsSlice"

const HotTag = () => {
  const navigate = useNavigate()
  const hotTag = useSelector((store) => store.search.hotTag)
  const param = useParams("")
  console.log("param", param)
  console.log("param.gu")

  const onSearch = () => {
    navigate(`/search/${this.value}`)
  }
  return (
    <>
      <div className="flex">
        <h1>{param.gu.length > 2 ? param.gu.slice(0, -1) : param.gu}붐비</h1>
        <div>🔥HOT-TAG 20</div>
      </div>
      <div className="flex">
        {hotTag &&
          hotTag.map((hot) => {
            if (hot.length !== 0)
              return (
                <button value={hot} onClick={onSearch}>
                  {hot}
                </button>
              )
          })}
      </div>
    </>
  )
}

export default HotTag
