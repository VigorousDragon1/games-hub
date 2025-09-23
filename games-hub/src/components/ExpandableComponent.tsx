import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface Props{
    children:string
}

function ExpandableComponent({children}:Props) {

const [expanded , setExpanded]=useState(false)

const limit=300;
if (children.length<=limit  ) return <Text>{children}</Text>

const summary =expanded?children: children.substring(0,limit)+'....'

  return (

<Text>
    {summary}
    <Button padding={2} size='xs' colorScheme='yellow' onClick={()=>setExpanded(!expanded)}>{expanded?'show less':'read more'}</Button>
</Text>

  )
}

export default ExpandableComponent