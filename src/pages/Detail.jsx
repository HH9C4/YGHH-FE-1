import React from 'react'
import DetailPost from '../components/features/DetailPost'

const Detail = () => {
    return (
        //디테일에서 사용하는 Post 컴포넌트는 유일하게 모양이 다름
        //댓글 기능
        <div>
            <div>
                Navbar 들어갈 곳
            </div>
            {/* 디테일포스트 컴포넌트 호출 */}
            <DetailPost></DetailPost>
            <input placeholder='댓글을 입력해주세요.'></input>
            <button>전송</button>
            {/* 코멘트 컴포넌트 호출 */}
        </div>
    )
}

export default Detail