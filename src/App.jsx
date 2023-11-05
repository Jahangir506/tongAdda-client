import { Outlet } from "react-router-dom"
import MainLayouts from "./components/layouts/MainLayouts"

function App() {

  return (
    <>
     <MainLayouts>
      <Outlet></Outlet>
     </MainLayouts>
    </>
  )
}

export default App
