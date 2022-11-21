import React from "react"

const Tabs = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div
        className="grid w-[40rem] grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2"
        x-data="app"
      >
        <div>
          <input
            type="radio"
            name="option"
            id="1"
            className="peer hidden"
            checked
          />
          <label
            for="1"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            1
          </label>
        </div>

        <div>
          <input type="radio" name="option" id="2" className="peer hidden" />
          <label
            for="2"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            2
          </label>
        </div>

        <div>
          <input type="radio" name="option" id="3" className="peer hidden" />
          <label
            for="3"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            3
          </label>
        </div>

        <div>
          <input type="radio" name="option" id="4" className="peer hidden" />
          <label
            for="4"
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            4
          </label>
        </div>
      </div>
    </main>
  )
}

export default Tabs
