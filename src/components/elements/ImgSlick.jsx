import React from "react"
import Slider from "react-slick"

const ImgSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
    </Slider>
  )
}

export default ImgSlick
