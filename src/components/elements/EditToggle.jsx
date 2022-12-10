import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { contentsApis } from "../../api/instance"

const EditToggle = ({ data }) => {
  const navigate = useNavigate()
  const [display, setDisplay] = useState(false)
  const onToggle = () => {
    setDisplay(!display)
  }

  const deleteContent = async (payload) => {
    try {
      if (window.confirm("게시글을 삭제하시겠습니까?")) {
        const res = await contentsApis.deleteContentAX(payload)
        navigate(`/list/${res.data.data}/all/new`)
      }
      return
    } catch (error) {
      return
    }
  }

  // 게시글 삭제 버튼
  const onPostDelete = (id, gu) => {
    const obj = {
      postId: id,
      gu: gu,
    }
    deleteContent(obj)
  }
  return (
    <>
      {localStorage.getItem("nickName") === data.accountName ? (
        <div className="flex relative">
          <button onClick={onToggle} className="flex">
            <div className="w-1 h-1  bg-bb66 rounded-full"></div>
            <div className="w-1 h-1 ml-1 bg-bb66 rounded-full"></div>
            <div className="w-1 h-1 ml-1 bg-bb66 rounded-full"></div>
          </button>
          {display ? (
            <div className="h-24 w-24 rounded-md absolute mt-3 right-[0] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
              <button
                className="h-12 text-center w-24 text-sm text-bb22"
                onClick={() =>
                  navigate(`/write/${data.gu}/${data.postId}`, {
                    state: data,
                  })
                }
              >
                수정하기
              </button>
              <hr className="w-[88px] mx-1 font-medium border-bbBB" />
              <button
                className="h-12 text-center w-24 text-sm text-bb22"
                onClick={() => {
                  onPostDelete(data.postId, data.gu)
                }}
              >
                삭제하기
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default EditToggle
