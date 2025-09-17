import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import { Box } from "@chakra-ui/react"

function Layout() {
  return (
    <>
     <Navbar/>
   <div className="main">
    <Box padding={5}>
       <Outlet/>
    </Box>
   
   </div>
   </>
  
  )
}

export default Layout