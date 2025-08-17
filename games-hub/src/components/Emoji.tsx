import target from '../assets/target.png'
import like from '../assets/like.png'
import meh from '../assets/meh.png'
import { Image, type ImageProps } from '@chakra-ui/react'
interface Props{
    rating :number;
}

function Emoji({rating}:Props) {
    if(rating<3) return null

    const emojiMap:{[key:number]:ImageProps}={
      3:{src:meh , alt :"meh"},
      4:{src:like ,alt :"recommended"},
      5:{src:target, alt :"exceptional"},

    }
  return (
<    Image {...emojiMap[rating]} boxSize={"25px"}/>   
  )
}

export default Emoji