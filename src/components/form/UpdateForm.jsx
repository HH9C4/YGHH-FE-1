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
    console.log(e)
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
    console.log("click", click)
    if (click === undefined) {
      const filtered = tag.replace(
        /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf ]/g,
        ""
      )
      console.log("filtered", filtered)
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
                      transform="rotate(45)"
                      className="mx-auto mt-[4px]"
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
                      transform="rotate(45)"
                      className="mx-auto mt-[4px]"
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
          <textarea
            className="outline-0 mt-3 w-full rounded-md h-[324px] text-start p-6 text-sm text-bb22 placeholder:text-bb88 overflow-y-auto break-all"
            defaultValue={data.content}
            // value={postInput.content || ""}
            name="content"
            onChange={postInputHandle}
            placeholder="내용을 입력하세요"
          />
          <div className="flex text-sm text-bb22 p-6 items-center h-14 mt-1 rounded-t-md w-full bg-white border-b border-bbBB">
            <p>#</p>
            <input
              className="ml-0.5 outline-0 placeholder:text-bb88 text-sm w-full"
              value={tag}
              type="text"
              maxLength="20"
              onKeyUp={onKeyUp}
              name="tag"
              onChange={onTagChange}
              placeholder="쉼표(,)로 태그를 추가할 수 있어요"
            />
            <div
              onClick={() => onButtonClick()}
              // onKeyUp={onKeyUp}
              className="hover:cursor-pointer w-6 h-6 ml-[8px] rounded-full  bg-[#efefef] flex justify-center items-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1042 5.27085H6.72925V0.895854C6.72925 0.702467 6.65242 0.517 6.51568 0.380255C6.37893 0.24351 6.19347 0.166687 6.00008 0.166687C5.80669 0.166687 5.62123 0.24351 5.48448 0.380255C5.34774 0.517 5.27091 0.702467 5.27091 0.895854V5.27085H0.895915C0.702528 5.27085 0.517061 5.34768 0.380316 5.48442C0.243571 5.62117 0.166748 5.80663 0.166748 6.00002C0.166748 6.19341 0.243571 6.37887 0.380316 6.51562C0.517061 6.65236 0.702528 6.72919 0.895915 6.72919H5.27091V11.1042C5.27091 11.2976 5.34774 11.483 5.48448 11.6198C5.62123 11.7565 5.80669 11.8334 6.00008 11.8334C6.19347 11.8334 6.37893 11.7565 6.51568 11.6198C6.65242 11.483 6.72925 11.2976 6.72925 11.1042V6.72919H11.1042C11.2976 6.72919 11.4831 6.65236 11.6198 6.51562C11.7566 6.37887 11.8334 6.19341 11.8334 6.00002C11.8334 5.80663 11.7566 5.62117 11.6198 5.48442C11.4831 5.34768 11.2976 5.27085 11.1042 5.27085Z"
                  fill="#222222"
                />
              </svg>
            </div>
          </div>
          <ul className="relative rounded-b-md bg-white h-[240px] px-[24px] py-[16px]">
            <div className="flex flex-wrap">
              {tags.map &&
                tags.map((tag) => {
                  return (
                    <div
                      key={tag + Math.random()}
                      name={tag}
                      onClick={() => removeTags(tag)}
                      className="hover:cursor-pointer text-[12px] text-bb22 bg-bbyellow mr-[8px] mb-[8px] px-[9px] py-[7px] rounded-md"
                    >
                      # {tag}
                    </div>
                  )
                })}
              {0 < tags.length && tags.length < 11 ? (
                <p className="text-b11 text-bbpurple absolute bottom-[0px] left-0 py-[8px] px-[24px] bg-white w-full">
                  ※ 태그를 클릭해서 등록한 태그를 삭제할 수 있어요.
                </p>
              ) : (
                ""
              )}
            </div>
            {searchTag && (
              <div
                className={
                  searchTag.length !== 0
                    ? "absolute top-0 left-0 w-full rounded-b-md bg-white h-[240px] overflow-auto"
                    : "hidden"
                }
              >
                {searchTag.map((search) => {
                  return (
                    <li
                      onClick={() => onButtonClick(search)}
                      key={search + Math.random()}
                      className="hover:cursor-pointer last-of-type:rounded-b-md active:bg-[#fff6c9] flex p-6 items-center text-bb22 text-sm w-full h-14 bg-white"
                    >
                      # {search}
                    </li>
                  )
                })}
              </div>
            )}
          </ul>
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
