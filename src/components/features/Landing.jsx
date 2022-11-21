import React from "react"
import Layout from "../layout/Layout"


const Landing = ({ data, onClose }) => {
  //   const state = useLocation()
  //   //   const [data, setData] = useState()
  //   const address = state.state
  //   useEffect(() => {
  //     window.location.reload()
  //     //   setData(address)
  //   }, [address])

  //   console.log("랜딩 스테이트", address)


  const gu = data.split(" ", 2)

  return (
    <Layout>
      <div className='w-[400px] flex flex-wrap flex-row justify-center '>
        <p className='mt-[51px] mb-[60px] text-center font-bold'>찾고 계신 장소의 지역구를<br />
          여기에서 검색해보세요</p>
        <button
          className="mx-[26px] text-[20px] w-[330px] h-[48px]  text-white bg-bbpink text-center"
          onClick={onClose}
        >
          원하는 장소 다시 찾아보기
        </button>
        <div className='bg-white mt-[12px] pt-2.5 w-[330px] h-[46px] text-sm font-semibold text-center'>{data}</div>
        <button
          onClick={() => window.location.replace(`/list/${gu[1]}/new`)}
          className='mx-[26px] mt-[24px] text-[20px] w-[330px] h-[48px]  text-white bg-bbpink'>선택한 지역 커뮤니티 바로가기</button>
        <button
          onClick={() => window.location.replace(`/info/${gu[1]}`)}
          className='mx-[26px] mt-[24px] text-[20px] w-[330px] h-[48px]  text-white bg-bbpink'>선택한 지역 정보 바로가기</button>
      </div>
    </Layout>
  )
}

export default Landing
