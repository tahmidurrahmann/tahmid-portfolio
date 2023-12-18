import { Outlet } from "react-router-dom"
import Footer from "./shared/Footer/Footer"
import Navbar from "./shared/Navbar/Navbar"

function App() {

  return (
    <div className="font-raleway bg-black text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App