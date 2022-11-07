const useConfirm = (message = "", onConfirm, onCancel, id) => {
  //message initialState 설정
  //함수가 존재하면 type 확인
  if (!onConfirm && typeof onConfirm !== "function") {
    return
  }
  if (!onCancel && typeof onCancel !== "function") {
    return
  }
  const confirmAction = (id) => {
    if (window.confirm(message)) {
      onConfirm(id)
    } else {
      onCancel()
    }
  }
  return confirmAction
}

export default useConfirm
