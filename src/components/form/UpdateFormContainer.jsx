import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  __insertContent,
  __updataContent,
  __getContentDetail,
  insertTags,
  removeTags,
} from "../../redux/modules/contentsSlice"
import useInput from "../../hooks/useInput"
import useImgUpload from "../../hooks/useImgUpload"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Category from "../elements/Category"
import { searchTags, __getGuTag } from "../../redux/modules/searchSlice"
import ContentInput from "./ContentInput"
import TagInput from "./TagInput"
import TagSearch from "./TagSearch"

const UpdateForm = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const param = useParams()
  const id = data.postId

  const searchTag = useSelector((state) => state.search.searchTags)
  //커스텀 훅 사용
  const [postInput, setPostInput, postInputHandle] = useInput({
    category: "",
    content: "",
  })

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
  // const tags = useSelector((state) => state.contents.tagList)

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
  const { isSuccess, error } = useSelector((state) => state)

  const [deleteUrl, setDeleteUrl] = useState([])
  const [editUrl, setEditUrl] = useState([...data.imageUrl])
  const beforeDelete = (e) => {
    setDeleteUrl([...deleteUrl, e])
    setEditUrl(editUrl.filter((url) => url !== e))
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
      gu: data.gu,
      category: postInput.category === "" ? data.category : postInput.category,
      content: postInput.content === "" ? data.content : postInput.content,
      tagList: tags,
      deleteUrl: deleteUrl,
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

  // useEffect(() => {
  //   dispatch(insertTags(...data.tagList))
  // }, [])

  useEffect(() => {
    setEditUrl([...editUrl])
  }, [files])

  useEffect(() => {
    dispatch(searchTags(tag))
  }, [tag])

  useEffect(() => {
    dispatch(__getGuTag(param.gu))
    setTags([...data.tagList])
  }, [])

  return (
    <>
      <form onKeyDown={onKeyDown} className="pl-[25px] pb-[190px]">
        <p className="text-sm text-bb22 font-medium">
          카테고리를 선택해주세요.
        </p>
        <Category
          data={data}
          postInput={postInput}
          postInputHandle={postInputHandle}
        />
        <div className="pr-[26px]">
          <p className="text-sm text-bb22 font-medium">
            이미지를 업로드해주세요. (최대 10장, 1:1비율로 자동 조정)
          </p>

          <div
            className="
            flex flex-row flex-nowrap overflow-x-auto"
          >
            <label
              htmlFor="img-File"
              className="hover:cursor-pointer w-[100px] h-[100px] bg-white rounded-md shrink-0 mt-3 mr-3"
            >
              <input
                style={{ display: "none" }}
                accept="image/*"
                id="img-File"
                name="imgFile"
                type="file"
                multiple
                onChange={uploadHandle}
                ref={imgRef}
              />

              <svg
                className="mx-auto my-9"
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
            </label>

            {fileUrls.reverse().map((value) => {
              return (
                <div className="relative shrink-0 ">
                  <img
                    className="border-[0.5px] border-bbBB w-[100px] h-[100px] rounded-md my-3 mr-3 shrink-0 object-cover"
                    src={value.url ? value.url : ""}
                    alt="image"
                    key={Math.random()}
                  />
                  <div
                    onClick={() => imgDelete(value)}
                    className="bg-white hover:cursor-pointer absolute right-[4px] top-[8px] rounded-full w-[24px] h-[24px]"
                  >
                    <svg
                      className="mx-auto mt-[4px] origin-center rotate-45 transition-transform duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                        fill="#222222"
                      />
                    </svg>
                  </div>
                </div>
              )
            })}
            {editUrl.reverse().map((img) => {
              return (
                <div key={img} className="relative shrink-0 ">
                  <img
                    className="border-[0.5px] border-bbBB w-[100px] h-[100px] rounded-md my-3 mr-3 shrink-0 object-cover"
                    src={img}
                  />
                  <div
                    onClick={() => beforeDelete(img)}
                    className="bg-white hover:cursor-pointer absolute right-[4px] top-[8px] rounded-full w-[24px] h-[24px]"
                  >
                    <svg
                      className="mx-auto mt-[4px] origin-center rotate-45 transition-transform duration-300"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                        fill="#222222"
                      />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
          <ContentInput
            data={data}
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
              className="w-[128px] h-10 mt-3 rounded-full bg-gradient-to-r from-bbpink to-bbgradientp text-white text-sm font-medium"
              onClick={onEdit}
              color="reverse"
              size="medium"
            >
              수정하기
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdateForm
