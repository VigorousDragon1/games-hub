import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"

function Layout() {
  return (
    <>
     <Navbar/>
   <div className="main">
    <Outlet/>
   </div>
   </>
  
  )
}

export default Layout