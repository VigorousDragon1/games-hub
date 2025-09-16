
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../Navbar'
import { Box } from '@chakra-ui/react'

function ErrorPage() {
    const error=useRouteError()
  return (
    <>
    <Navbar/>
    <Box padding={6}>
          <h1>Oops</h1>
   <p>{isRouteErrorResponse(error)?"This route does not exist" : "Unexpected error Occured"}</p>
  
    </Box>
   </>
  )
}

export default ErrorPage