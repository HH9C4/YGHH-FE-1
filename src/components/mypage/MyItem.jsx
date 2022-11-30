import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Likes from "../post/Likes"
import { useNavigate } from "react-router-dom"

const MyItem = ({ post }) => {
  const level = 2
  const navigate = useNavigate()
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeen: 200,
  }
  return (
    <div
      onClick={() => navigate(`/detail/${post.postId}`)}
      className="mt-[12px] w-full h-[80px] flex bg-white rounded-md px-[20px] py-[16px]"
    >
      {post.imageUrl.length !== 0 ? (
        <div className="w-[22%] h-[48px] mr-[12px] ">
          <img
            className="w-[48px] h-[48px] rounded-md object-cover mr-[0px]"
            key={post.imageUrl[0]}
            src={post.imageUrl[0]}
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col w-full">
        <div className="flex justify-end items-center w-full">
          <Likes
            data={post.postId}
            level={level}
            isLiked={post.isLiked}
            count={post.likeCount}
          />
          <p className="font-semibold text-[10px] text-bb22 ml-[4px]">
            {post.likeCount}
          </p>
          <div className="ml-[8px] w-[32px] text-center rounded-full border-[0.5px] border-bb66 text-bb66 text-[10px]">
            {post.category}
          </div>
        </div>
        <p className="flex line-clamp-2 h-[52px] leading-[0.85rem] overflow-hidden break-all mt-[4px] text-b11 text-bb22">
          {post.content}
        </p>
      </div>
    </div>
  )
}

export default MyItem
