import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const TopBtn = () => {
  const navigate = useNavigate()
  const param = useParams()

  //top 버튼
  const handleTop = (e) => {
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <button
      className="fixed bottom-[152px] right-[30px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-full w-[56px] h-[56px] active:bg-[#efefef]"
      onClick={handleTop}
    >
      <svg
        className="mx-auto"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 20C23.6884 20.0006 23.3865 19.8921 23.1467 19.6933L16 13.72L8.83998 19.48C8.7036 19.5907 8.54667 19.6734 8.37822 19.7233C8.20977 19.7732 8.03311 19.7894 7.85841 19.7708C7.6837 19.7522 7.51439 19.6993 7.36021 19.615C7.20603 19.5308 7.07001 19.4169 6.95998 19.28C6.84923 19.1436 6.76652 18.9867 6.71661 18.8182C6.6667 18.6497 6.65058 18.4731 6.66916 18.2984C6.68775 18.1237 6.74068 17.9544 6.82491 17.8002C6.90914 17.646 7.02302 17.51 7.15998 17.4L15.16 10.96C15.3986 10.7639 15.6978 10.6566 16.0066 10.6566C16.3155 10.6566 16.6147 10.7639 16.8533 10.96L24.8533 17.6266C24.9883 17.7386 25.0999 17.876 25.1817 18.0312C25.2635 18.1863 25.3139 18.356 25.33 18.5307C25.3461 18.7053 25.3276 18.8814 25.2756 19.0489C25.2235 19.2163 25.1389 19.3719 25.0267 19.5066C24.9026 19.6596 24.7462 19.7831 24.5686 19.8684C24.3911 19.9537 24.1969 19.9987 24 20Z"
          fill="#222222"
        />
      </svg>
    </button>
  )
}

export default TopBtn
