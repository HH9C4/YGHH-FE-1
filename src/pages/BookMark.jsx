import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/layout/Layout"
import { __returnBookmark } from "../redux/modules/contentsSlice"

const BookMark = () => {
  //페이지 안에서 전부 해결
  const dispatch = useDispatch()
  const bookmarkData = useSelector((state) => state.contents.bookmark)

  console.log("북마크데이터", bookmarkData)
  //GET 요청 디스패치
  useEffect(() => {
    dispatch(__returnBookmark())
  }, [])
  // console.log(bookmarkData[0].gu);

  return (
    <Layout>
      <>
        <p className="pl-[25px] pt-[32px] text-[20px] font-bold">나의 북마크</p>
        {bookmarkData !== undefined && bookmarkData.length !== 0 ? (
          bookmarkData.map((item) => {
            return (
              <div>
                <div>
                  <div>⭐️{item.gu}</div>
                  <BookMark></BookMark>
                </div>
                <div>
                  <div>정보</div>
                  <div>커뮤니티</div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="w-full">
            <p className="pl-[105px] pt-[232px] text-[16px] font-medium text-bb88">
              북마크한 지역이 없습니다
            </p>
          </div>
        )}
      </>
    </Layout>
  )
}

export default BookMark
