import React, { useEffect, useRef, useState } from "react"
import { contentsApis } from "../../api/instance"
import useInput from "../../hooks/useInput"
import useImgUpload from "../../hooks/useImgUpload"
import { useParams } from "react-router-dom"
import CategoryInput from "./CategoryInput"
import TagSearch from "./TagSearch"
import TagInput from "./TagInput"
import ContentInput from "./ContentInput"
import ImgInput from "./ImgInput"

const Form = () => {
  const [tagList, setTagList] = useState()
  const [searchTag, setSearchTag] = useState()

  // 인풋창과 일치하는 태그 리스트 반환
  const searchTags = (payload) => {
    if (tagList !== (undefined || null) && payload !== "") {
      setSearchTag(tagList.filter((t) => t.includes(payload)))
    } else if (payload === "") {
      setSearchTag()
    }
  }

  //게시글 작성 시 구에 등록된 태그 가져오기
  const getGuTag = async (payload) => {
    const res = await contentsApis.getGuTags(payload)
    setTagList(res.data.data.tagList)
  }
  //게시글 등록
  const insertContent = async (payload) => {
    const res = await contentsApis.insertContentAX(payload)
    window.alert("게시글이 등록되었습니다.")
    window.location.replace(`/list/${res.data.data.gu}/all/new`)
    return
  }

  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    category: "",
    content: "",
  })
  const param = useParams("")

  //태그
  const [tag, setTag] = useState("")

  const onTagChange = (e) => {
    setTag(e.target.value)
  }
  const [tags, setTags] = useState([])
  const insertTags = (e) => {
    setTags([...tags, e])
  }
  const removeTags = (e) => {
    setTags(tags.filter((t) => t !== e))
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  const onKeyUp = (e) => {
    if (e.keyCode === 188) {
      onButtonClick()
    }
  }

  const onButtonClick = (click) => {
    if (click === undefined) {
      const filtered = tag.replace(
        /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf ]/g,
        ""
      )
      if (filtered !== "") {
        insertTags(filtered)
        setTag("")
      } else {
        alert("태그를 입력해주세요.")
      }
    } else {
      insertTags(click)
      setTag("")
    }
  }

  //이미지 업로드 훅
  const [files, fileUrls, uploadHandle, imgDelete] = useImgUpload(
    10,
    true,
    0.2,
    1000,
    false
  )
  //이미지 업로드 인풋돔 선택 훅
  const imgRef = useRef()

  //submit
  const onPost = (e) => {
    e.preventDefault()
    if (postInput.category === "") {
      alert("카테고리를 선택해주세요.")
      return
    }
    if (postInput.content === "") {
      alert("내용을 입력해주세요.")
      return
    }

    const formData = new FormData()
    //폼 데이터 관리
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append("imageList", file)
      })
    } else {
    }

    let obj = {
      category: postInput.category,
      gu: param.gu,
      content: postInput.content,
      tagList: tags,
    }

    formData.append(
      "contents",
      new Blob([JSON.stringify(obj)], { type: "application/json" })
    )
    insertContent(formData)
  }

  useEffect(() => { }, [files])

  useEffect(() => {
    searchTags(tag)
  }, [tag])

  useEffect(() => {
    getGuTag(param.gu)
  }, [])
  return (
    <>
      <form onKeyDown={onKeyDown} className="pl-[25px] pb-[190px]">
        <p className="text-sm text-bb22 font-medium">
          카테고리를 선택해주세요.
        </p>
        <CategoryInput postInput={postInput} postInputHandle={postInputHandle} />
        <div className="pr-[26px]">
          <ImgInput
            uploadHandle={uploadHandle}
            imgRef={imgRef}
            fileUrls={fileUrls}
            imgDelete={imgDelete}
          />
          <ContentInput
            postInput={postInput}
            postInputHandle={postInputHandle}
          />
          <TagInput
            tag={tag}
            onKeyUp={onKeyUp}
            onTagChange={onTagChange}
            onButtonClick={onButtonClick}
          />
          <TagSearch
            tags={tags}
            searchTag={searchTag}
            removeTags={removeTags}
            onButtonClick={onButtonClick}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="hover:cursor-pointer w-[128px] h-10 mt-3 rounded-full bg-gradient-to-r from-bbpink to-bbgradientp text-white text-sm font-medium"
              onClick={onPost}
              color="reverse"
              size="medium"
            >
              등록하기
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
