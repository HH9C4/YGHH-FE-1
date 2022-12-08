import React, { useEffect, useState } from "react"
import { contentsApis } from "../../api/instance"
import MyCmt from "./MyCmt"
import length0 from "../../assets/img/length0.png"
const Mynotice = () => {
  const [cmts, setCmts] = useState()

  const getMyNotice = async () => {
    try {
      const res = await contentsApis.mypageNoticeAX()
      return setCmts(res.data.data)
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    getMyNotice()
  }, [])
  return (
    <>
      {cmts &&
        cmts.map((cmt) => {
          return (
            <div key={String(cmt.postId) + String(cmt.commentId)}>
              <MyCmt cmts={cmts} setCmts={setCmts} cmt={cmt} />
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
