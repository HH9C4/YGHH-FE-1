import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { __insertContent } from "../../redux/modules/contentsSlice"
import useInput from "../../hooks/useInput"
import useImgUpload from "../../hooks/useImgUpload"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Editor = () => {
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    postTitle: "",
    postTag: [""],
    postContent: "",
  })

  const [tag, setTag] = useState("")

  const { isSuccess, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
        formData.append("file", file)
      })
    } else {
      formData.append("file", null)
    }

    let obj = {
      postContent: postInput.contents,
      postTag: [postInput.tag],
    }

    formData.append("contents", JSON.stringify(obj))
    dispatch(__insertContent(formData))
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    } else {
      if (error !== undefined) console.log(error)
    }
  }, [isSuccess, error, navigate])

  return (
    <>
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
        <button
          onClick={() => {
            imgRef.current.click()
          }}
        >
          사진 추가하기
        </button>
        {fileUrls.map((value) => {
          return <img src={value ? value : ""} alt="image" />
        })}
      </label>
      <input
        type="text"
        maxLength="20"
        value={postInput.tag || ""}
        name="tag"
        onChange={postInputHandle}
        placeholder="태그를 입력하세요"
      />
      <input
        value={postInput.contents || ""}
        name="contents"
        onChange={postInputHandle}
        placeholder="내용을 입력하세요"
      />
      <button onClick={goback} size="medium">
        취소하기
      </button>
      <button onClick={onPost} color="reverse" size="medium">
        등록하기
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
