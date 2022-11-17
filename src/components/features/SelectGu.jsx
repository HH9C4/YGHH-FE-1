import React from "react"
import { useNavigate } from "react-router-dom"

const SelectGu = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={() => navigate(`/list/강남구/new`)}>강남구</button>
        <button onClick={() => navigate(`/list/강동구/new`)}>강동구</button>
        <button onClick={() => navigate(`/list/강북구/new`)}>강북구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/강서구/new`)}>강서구</button>
        <button onClick={() => navigate(`/list/구로구/new`)}>구로구</button>
        <button onClick={() => navigate(`/list/금천구/new`)}>금천구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/관악구/new`)}>관악구</button>
        <button onClick={() => navigate(`/list/광진구/new`)}>광진구</button>
        <button onClick={() => navigate(`/list/노원구/new`)}>노원구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/도봉구/new`)}>도봉구</button>
        <button onClick={() => navigate(`/list/동대문구/new`)}>동대문구</button>
        <button onClick={() => navigate(`/list/동작구/new`)}>동작구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/마포구/new`)}>마포구</button>
        <button onClick={() => navigate(`/list/서대문구/new`)}>서대문구</button>
        <button onClick={() => navigate(`/list/서초구/new`)}>서초구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/성동구/new`)}>성동구</button>
        <button onClick={() => navigate(`/list/성북구/new`)}>성북구</button>
        <button onClick={() => navigate(`/list/송파구/new`)}>송파구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/양천구/new`)}>양천구</button>
        <button onClick={() => navigate(`/list/영등포구/new`)}>영등포구</button>
        <button onClick={() => navigate(`/list/용산구/new`)}>용산구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/은평구/new`)}>은평구</button>
        <button onClick={() => navigate(`/list/종로구/new`)}>종로구</button>
        <button onClick={() => navigate(`/list/중구/new`)}>중구</button>
      </div>
      <div>
        <button onClick={() => navigate(`/list/중랑구/new`)}>중랑구</button>
      </div>
    </div>
  )
}

export default SelectGu
