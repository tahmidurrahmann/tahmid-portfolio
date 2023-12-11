import { Outlet } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Footer from "./shared/Footer/Footer"

function App() {

  return (
    <div className="font-raleway bg-black text-white">
      <MainLayout>
        <Outlet></Outlet>
        <Footer></Footer>
      </MainLayout>
    </div>
  )
}

export default App