import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { __returnBookmark } from '../redux/modules/contentsSlice'

const BookMark = () => {

    //페이지 안에서 전부 해결
    const dispatch = useDispatch();
    const bookmarkData = useSelector((state) => state.contents.bookmark)

    console.log("북마크데이터", bookmarkData);
    //GET 요청 디스패치
    useEffect(() => {
        dispatch(__returnBookmark())
    }, [])
    // console.log(bookmarkData[0].gu);

    return (
        <>
            <div>
                <div>
                    <div>
                        <div>정보</div>
                        <div>커뮤니티</div>
                    </div>
                </div>

                {
                    bookmarkData !== undefined &&
                    bookmarkData.map((item) => {
                        return (
                            <div>
                                <div>
                                    <div>⭐️{item.gu}</div>
                                </div>
                            </div>
                        )
                    })

                }

            </div>
        </>
    )
}

export default BookMark
