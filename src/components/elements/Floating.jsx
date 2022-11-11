import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

const Floating = () => {
  const navigate = useNavigate()
  const param = useParams()
  return <Button onClick={() => navigate(`/write/${param.gu}`)}>작성</Button>
}

export default Floating

const Button = styled.button`
  position: fixed;
  bottom: 78px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 0;
  background-color: #ff8a00;
  color: #fff;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    bottom: 80px;
    cursor: pointer;
  }
`
