import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { __getHotTag } from "../redux/modules/searchSlice"
import Layout from "../components/layout/Layout"

const HotTag = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const hotTag = useSelector((store) => store.search.hotTag.tagList)
  const param = useParams("")
  console.log(hotTag)
  const onSearch = (tag) => {
    navigate(`/search/1/${tag}/new`)
  }

  useEffect(() => {
    dispatch(__getHotTag(param.gu))
  }, [params])

  return (
    <Layout>
      <div className="pt-[32px] pl-[25px] pr-[26px] text-bb22">
        <p className="text-b14 font-medium">지금</p>
        <h1 className="text-b20 font-bold">
          {param.gu.length > 2 ? param.gu.slice(0, -1) : param.gu}붐비의{" "}
          <span className="text-[#ff3535]">HOT-TAG 20</span>
        </h1>

        <div className="flex flex-wrap bg-white w-full rounded-md mt-[7px] p-[20px]">
          {hotTag &&
            hotTag.map((hot) => {
              if (hot.length !== 0)
                return (
                  <button
                    className="px-[10px] py-[7px] rounded-[3px] bg-bbyellow ml-[8px] mt-[8px] text-b12"
                    value={hot}
                    onClick={() => onSearch(hot)}
                  >
                    # {hot}
                  </button>
                )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default HotTag
