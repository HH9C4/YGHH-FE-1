import React from 'react'

const DetailPost = () => {
    return (
        //디자인에 따라 달라질 수 있음, 아직 사용여부 미정.와이어프레임 4번째 
        <div>
            <div>
                포스트 카드 감쌀곳
                <div>
                    좋아요, 조회수, 댓글 수, 수정삭제 감쌀곳
                    <div>
                        좋아요 들어갈 곳
                    </div>
                    <div>
                        조회수 표시할 곳
                    </div>
                    <div>
                        댓글 수 표시할 곳
                    </div>
                    <div>
                        <button>수정</button><button>삭제</button>
                    </div>
                </div>
                <div>카드 이미지 들어갈 곳</div>
                <div>카드 코멘트 들어갈 곳</div>
                <div>작성자, 작성일자, 구 들어갈 곳</div>
                <div>질문 버튼 들어갈 곳</div>
            </div>
        </div>
    )
}

export default DetailPost