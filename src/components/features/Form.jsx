import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  __insertContent,
  __updataContent,
  __getContentDetail,
} from "../../redux/modules/contentsSlice"
import useInput from "../../hooks/useInput"
import useImgUpload from "../../hooks/useImgUpload"
import styled from "styled-components"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const Editor = () => {
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    tag: "",
    content: "",
  })
  const param = useParams("")
  const [tag, setTag] = useState("")

  const { isSuccess, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = param.id

  const state = useLocation()
  const data = state.state
  //뒤로가기
  const goback = () => {
    window.history.back()
  }
  //이미지 업로드 훅
  const [files, fileUrls, uploadHandle] = useImgUpload(10, true, 0.3, 1000)

  //이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef()

  //submit
  const onPost = (e) => {
    e.preventDefault()
    const formData = new FormData()
    //폼 데이터 관리
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("imageList", file)
      })
    } else {
    }

    let obj = {
      gu: param.gu,
      content: postInput.content,
      tagList: [postInput.tag],
    }

    // formData.append("contents", JSON.stringify(obj))
    formData.append(
      "contents",
      new Blob([JSON.stringify(obj)], { type: "application/json" })
    )
    dispatch(__insertContent(formData))
  }

  const onEdit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("imageList", file)
      })
    } else {
    }
    let obj = {
      gu: param.gu,
      content: postInput.content,
      tag: postInput.tag,
      deleteUrl: [],
    }
    formData.append(
      "contents",
      new Blob([JSON.stringify(obj)], { type: "application/json" })
    )
    let editObj = {
      obj: formData,
      id: id,
    }
    dispatch(__updataContent(editObj))
  }

  console.log()
  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    } else {
      if (error !== undefined) console.log(error)
    }
  }, [isSuccess, error, navigate])

  useEffect(() => {
    console.log(files)
  }, [files])
  return (
    <>
      <div>
        <input
          style={{ display: "none" }}
          accept="image/*"
          id="imgFile"
          name="imgFile"
          type="file"
          multiple
          onChange={uploadHandle}
          ref={imgRef}
        />

        <label for="imgFile">
          <div className="flex flex-row flex-nowrap overflow-x-scroll">
            <button
              className="w-[100px] h-[100px] bg-white rounded-md shrink-0 my-3 mr-3"
              onClick={() => {
                imgRef.current.click()
              }}
            >
              <svg
                className="mx-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                  fill="#231F20"
                />
              </svg>
            </button>
            <div className="flex">
              {id !== undefined
                ? data.imageUrl.map((img) => {
                    return (
                      <img
                        className="w-[100px] h-[100px] rounded-md my-3 mr-3 shrink-0 object-cover"
                        src={img}
                      />
                    )
                  })
                : fileUrls.map((value) => {
                    return (
                      <img
                        className="w-[100px] h-[100px] rounded-md my-3 mr-3 shrink-0 object-cover"
                        src={value ? value : ""}
                        alt="image"
                      />
                    )
                  })}
            </div>
          </div>
        </label>
      </div>
      <input
        defaultValue={data !== null ? data.tag : postInput.tag || ""}
        type="text"
        maxLength="20"
        // value={postInput.tag || ""}
        name="tag"
        onChange={postInputHandle}
        placeholder="태그를 입력하세요"
      />
      <input
        defaultValue={data !== null ? data.content : postInput.contents || ""}
        // value={postInput.content || ""}
        name="content"
        onChange={postInputHandle}
        placeholder="내용을 입력하세요"
      />
      <button onClick={goback} size="medium">
        취소하기
      </button>
      <button
        onClick={id !== undefined ? onEdit : onPost}
        color="reverse"
        size="medium"
      >
        {id !== undefined ? "수정하기" : "등록하기"}
      </button>
    </>
  )
}

export default Editor

const ImgBox = styled.div`
  display: flex;
  text-align: center;
  width: 900px;
  margin: 0 auto;
  img {
    margin: 0 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
    height: 200px;
    object-fit: cover;
  }
`
