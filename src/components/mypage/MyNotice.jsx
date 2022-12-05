import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { __getMyNotice } from "../../redux/modules/mySlice"
import MyCmt from "./MyCmt"
// import { useParams } from "react-router-dom"
import length0 from "../../assets/img/length0.png"
const Mynotice = () => {
  const cmts = useSelector((store) => store.my.cmts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getMyNotice())
  }, [dispatch])
  return (
    <>
      {cmts &&
        cmts.map((cmt) => {
          return (
            <div key={String(cmt.postId) + String(cmt.commentId)}>
              <MyCmt cmt={cmt} />
            </div>
          )
        })}
      {cmts && cmts.length === 0 ? (
        <div className="text-center mt-[102px] text-bb88 font-medium">
          <img className="w-[96px] mx-auto" src={length0} />
          <p className="text-b24 ">저런!</p>
          <p className="text-b16">아직 새로운 알림이 없어요.</p>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Mynotice
