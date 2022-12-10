import React, { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import FormContainer from "../components/form/FormContainer"
import UpdateFormContainer from "../components/form/UpdateFormContainer"
import Layout from "../components/layout/Layout"

const Write = () => {
  const navigate = useNavigate()
  const params = useParams()
  const state = useLocation()
  const setLocation = (l) => {
    localStorage.setItem("location", l)
  }
  const setGu = (g) => {
    localStorage.setItem("gu", g)
  }
  useEffect(() => {
    setLocation("list")
    setGu(params.gu)
    if (!window.scrollY) return
    // 현재 위치가 이미 최상단일 경우 return
    window.scrollTo({
      top: 0,
    })
  }, [])
  return (
    <Layout>
      <div className="flex relative justify-center pt-6 ml-[25px] mb-8">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 active:animate-ping"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
              fill="#231F20"
            />
          </svg>
        </button>
        <h1 className="text-bb22 font-bold text-lg">
          {params.id !== undefined ? "게시글 수정" : "새 게시물 작성"}
        </h1>
      </div>
      {params.id !== undefined ? (
        <UpdateFormContainer data={state.state} />
      ) : (
        <FormContainer />
      )}
    </Layout>
  )
}

export default Write
