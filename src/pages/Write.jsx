import React from "react"
import { useNavigate } from "react-router-dom"
import Form from "../components/features/Form"
import Layout from "../components/layout/Layout"

const Write = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className="flex pt-6 ml-[25px] mb-8">
        <button
          onClick={() => navigate(-1)}
          className="active:animate-ping mr-[88px]"
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
        <h1 className="text-bb22 font-bold text-lg">새 게시물 작성</h1>
      </div>
      <Form />
    </Layout>
  )
}

export default Write
