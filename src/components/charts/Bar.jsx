import React from "react"

const RoundBar = (props) => {
  const getPath = (x, y, width, height) =>
    `M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4V${height}H0V4Z`

  RoundBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }
  return (
    <path
      d={getPath(x, y, width, height)}
      width={props.width}
      height={props.height}
      stroke="none"
      fill={fill}
    />
  )
}

export default Bar
