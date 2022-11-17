import React from "react"
import { useNavigate } from "react-router-dom"
import SelectGu from "../components/features/SelectGu"
const Home = () => {
  const navigate = useNavigate()

  //1
  return (
    <>
      <div style={{ margin: "auto", textAlgin: "center" }}>
        <h1>원하는 장소 직접 찾아보기</h1>

        <button onClick={() => navigate(`/address`)}>장소 검색</button>
      </div>
      <div>
        <h2>
          원하는 장소가
          <br />
          어느 구인지 이미 아시나요?
        </h2>
        <SelectGu />
      </div>
    </>
  )
}

export default Home
