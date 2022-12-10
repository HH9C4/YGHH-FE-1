import React from "react"

const ImgInput = ({ uploadHandle, imgRef, fileUrls, imgDelete }) => {
  return (
    <>
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
              fill="#222222"
            />
          </svg>
        </label>
        {fileUrls.length !== 0 &&
          fileUrls.reverse().map((value) => {
            return (
              <div key={value} className="relative shrink-0">
                <img
                  className="border-[0.5px] border-bbBB w-[100px] h-[100px] rounded-md my-3 mr-3 object-cover"
                  src={value.url ? value.url : ""}
                  alt="userUploadImage"
                  key={Math.random()}
                />
                <div
                  onClick={() => imgDelete(value)}
                  className="bg-white hover:cursor-pointer absolute right-[4px] top-[8px] rounded-full w-[24px] h-[24px]"
                >
                  <svg
                    className="origin-center rotate-45 transition-transform duration-300 mx-auto mt-[4px]"
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
    </>
  )
}

export default ImgInput
