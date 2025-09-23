import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props{
    term:string;
    children:ReactNode|ReactNode[]
}

function GameAttributes({term,children}:Props) {
  return (
    <>
    <Box marginY={5}>
           <Heading fontSize={"medium"} color={"gray.600"} as={"dt"}>{term}</Heading>

    <dd >{children}</dd>
  
    </Box>
   
    </>
  )
}

export default GameAttributes