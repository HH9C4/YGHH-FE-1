import React from "react"
import Router from "./shared/Router"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  )
}

export default App
