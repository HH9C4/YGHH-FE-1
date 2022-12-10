import { useEffect } from "react"

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [setToast])

  return (
    <div>
      <p>{text}</p> // 재사용성을 위해 토스트의 내용도 prop로 내려줌
    </div>
  )
}

export default Toast

// const [toast, setToast] = useState(false);
// const copyUrl = async () => {
//   await navigator.clipboard.writeText(url); // 링크 복사 부분
//   setToast(true);
// };
{
  /* <img onClick={copyUrl} src={"/copy.png"} alt="공유하기" /> */
}

// ... // 넣고싶은 위치에 넣으시면 됩니다
// {toast && <Toast setToast={setToast} text="🖇 클립보드에 복사되었습니다." />}
// ...
