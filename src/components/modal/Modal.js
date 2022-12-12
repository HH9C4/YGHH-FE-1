//Modal.js
import React from "react"
import SelectGu from "../features/SelectGu"

const Modal = (props) => {
  return (
    <div>
      <div>
        <SelectGu setModalOn={props.setModalOn} />
      </div>
    </div>
  )
}

export default Modal
