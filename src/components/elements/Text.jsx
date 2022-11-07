import React, { Children } from "react"
import styled from "styled-components"

const Text = (props) => {
  const {
    border,
    bold,
    bg,
    color,
    text,
    _onClick,
    is_float,
    children,
    margin,
    padding,
  } = props

  const styles = {
    border: border,
    bold: bold,
    margin: margin,

    padding: padding,
    bg: bg,
    color: color,
  }
  //
  if (is_float) {
    return (
      <React.Fragment>
        <Text {...styles} onClick={_onClick}>
          {text ? text : children}
        </Text>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <ElText {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElText>
    </React.Fragment>
  )
}

Text.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "49%",
  padding: "12px 0px",
  bg: "rgb(255, 111, 97)",
  color: "#ffffff",
  bold: false,
  height: "52px",
  border: "none",
}

const ElText = styled.p`
  border: ${(props) => props.border};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  ${(props) => (props.bold ? `font-weight: 600;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
  overflow: visible;
`

const H1 = styled.h1`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: #495057;
  text-align: center;
  font-weight: 600;
`
const H2 = styled.h2`
  font-size: 1.3125rem;
  color: #212529;
  line-height: 1.5;
  display: block;
  margin: 0px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

const H4 = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #868e96;
  line-height: 1.5;
  margin: 0px;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

const Span = styled.span`
  margin-right: 0.25rem;
  text-align: right;
  line-height: 1.5;
`

const Body = styled.body`
  margin: 0px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
    "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #212529;
  box-sizing: border-box;
`
const Link = styled.div`
  display: inline-block;
  font-weight: bold;
  color: #12b886;
  cursor: pointer;
`

export { Text, H1, H2, H4, Span, Body, Link }
