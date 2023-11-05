import { Outlet } from "react-router-dom"
import MainLayouts from "./components/layouts/MainLayouts"
import ErrorPages from "./pages/ErrorPages/ErrorPages"

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
